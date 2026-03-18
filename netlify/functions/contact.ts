import { Handler } from '@netlify/functions';

type FormType = 'contact' | 'newsletter';

interface SubmissionPayload {
  formType?: FormType;
  name?: string;
  email?: string;
  company?: string;
  service?: string;
  message?: string;
  source?: string;
  phone?: string;
}

const EMAIL_RECIPIENTS = ['shakesdigital@gmail.com'];
const DEFAULT_WHATSAPP_NUMBER = '256705718590';

const normalizePhoneNumber = (value: string) => {
  const digits = value.replace(/\D/g, '');

  if (digits.startsWith('256')) {
    return digits;
  }

  if (digits.startsWith('0')) {
    return `256${digits.slice(1)}`;
  }

  return digits;
};

const sendWhatsappNotification = async (message: string) => {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const whatsappFrom = process.env.TWILIO_WHATSAPP_FROM;
  const whatsappTo = normalizePhoneNumber(
    process.env.WHATSAPP_NOTIFY_NUMBER || DEFAULT_WHATSAPP_NUMBER
  );

  if (!accountSid || !authToken || !whatsappFrom) {
    return { skipped: true, reason: 'Twilio WhatsApp is not configured' };
  }

  const response = await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: 'POST',
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        From: whatsappFrom,
        To: `whatsapp:+${whatsappTo}`,
        Body: message,
      }).toString(),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send WhatsApp notification: ${errorText}`);
  }

  return await response.json();
};

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const {
      formType = 'contact',
      name,
      email,
      company,
      service,
      message,
      source,
      phone,
    }: SubmissionPayload = JSON.parse(event.body || '{}');

    // Validate required fields
    if (!email || !message || (formType === 'contact' && !name)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
      };
    }

    const apiKey = process.env.RESEND_API_KEY || 're_T9hzN7hf_Q2Yu9XW8fZrvwck9PNJuiogX';

    const subject =
      formType === 'newsletter'
        ? `New Newsletter Subscription from ${email}`
        : `New Contact Form Submission from ${name}`;

    const emailHtml =
      formType === 'newsletter'
        ? `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${email}</p>
          ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
          ${source ? `<p><strong>Source:</strong> ${source}</p>` : ''}
          <p><strong>Message:</strong> ${message.replace(/\n/g, '<br>')}</p>
        `
        : `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
          ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
          ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          ${source ? `<p><strong>Source:</strong> ${source}</p>` : ''}
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `;

    const whatsappText =
      formType === 'newsletter'
        ? [
            'New newsletter subscription',
            `Email: ${email}`,
            name ? `Name: ${name}` : null,
            source ? `Source: ${source}` : null,
          ]
            .filter(Boolean)
            .join('\n')
        : [
            'New contact form submission',
            `Name: ${name}`,
            `Email: ${email}`,
            service ? `Service: ${service}` : null,
            company ? `Company: ${company}` : null,
            source ? `Source: ${source}` : null,
            `Message: ${message}`,
          ]
            .filter(Boolean)
            .join('\n');

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Shakes Digital <onboarding@resend.dev>',
        to: EMAIL_RECIPIENTS,
        subject,
        html: emailHtml,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend API error:', error);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Failed to send email' }),
      };
    }

    const data = await response.json();
    const whatsapp = await sendWhatsappNotification(whatsappText).catch((error) => {
      console.error('WhatsApp notification error:', error);
      return { error: error instanceof Error ? error.message : 'Unknown WhatsApp error' };
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Notification sent successfully',
        id: data.id,
        whatsapp,
      }),
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error sending email' }),
    };
  }
};
