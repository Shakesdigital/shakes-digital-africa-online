import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

interface ContactFormData {
  name: string
  email: string
  company?: string
  service?: string
  message: string
  phone?: string
  submittedAt: string
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const formData: ContactFormData = await req.json()

    // Recipients for email notifications
    const recipients = [
      'shakesdigital@gmail.com',
      'fsddanmugisa@gmail.com',
      'info@shakesdigital.com'
    ]

    // Create email HTML template
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0F4C81 0%, #14B8A6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0F4C81; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-left: 4px solid #14B8A6; border-radius: 4px; }
            .message-box { background: white; padding: 20px; border-left: 4px solid #14B8A6; border-radius: 4px; white-space: pre-wrap; }
            .footer { background: #1f2937; color: white; padding: 20px; text-align: center; border-radius: 0 0 8px 8px; font-size: 14px; }
            .cta-button { display: inline-block; background: #14B8A6; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; margin: 20px 0; font-weight: bold; }
            .alert { background: #fef2f2; border-left: 4px solid #ef4444; padding: 15px; margin: 20px 0; border-radius: 4px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🔔 New Project Request!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Shakes Digital Contact Form</p>
            </div>

            <div class="content">
              <div class="alert">
                <strong>⚡ Action Required:</strong> A new client has submitted a project request and is waiting for your response!
              </div>

              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${formData.name}</div>
              </div>

              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${formData.email}">${formData.email}</a></div>
              </div>

              ${formData.company ? `
              <div class="field">
                <div class="label">🏢 Company/Organization:</div>
                <div class="value">${formData.company}</div>
              </div>
              ` : ''}

              ${formData.phone ? `
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">${formData.phone}</div>
              </div>
              ` : ''}

              ${formData.service ? `
              <div class="field">
                <div class="label">💼 Service of Interest:</div>
                <div class="value">${formData.service}</div>
              </div>
              ` : ''}

              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="message-box">${formData.message}</div>
              </div>

              <div class="field">
                <div class="label">🕐 Submitted At:</div>
                <div class="value">${new Date(formData.submittedAt).toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}</div>
              </div>

              <div style="text-align: center; margin-top: 30px;">
                <a href="https://shakesdigital.com/admin/contacts" class="cta-button">
                  📊 View in Admin Dashboard
                </a>
              </div>

              <div style="background: #eff6ff; padding: 15px; border-radius: 4px; margin-top: 20px;">
                <strong>💡 Quick Actions:</strong>
                <ul style="margin: 10px 0;">
                  <li>Reply to the client at: <a href="mailto:${formData.email}">${formData.email}</a></li>
                  <li>Log in to the <a href="https://shakesdigital.com/admin/contacts">admin dashboard</a> to manage this request</li>
                  <li>Update the request status after responding</li>
                </ul>
              </div>
            </div>

            <div class="footer">
              <p style="margin: 0 0 10px 0;"><strong>Shakes Digital Africa</strong></p>
              <p style="margin: 0; opacity: 0.8;">Digital Solutions for Africa's Development</p>
              <p style="margin: 10px 0 0 0; font-size: 12px; opacity: 0.6;">
                This is an automated notification from your website contact form
              </p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email using Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Shakes Digital <notifications@shakesdigital.com>',
        to: recipients,
        subject: `🔔 New Project Request from ${formData.name} - ${formData.service || 'General Inquiry'}`,
        html: emailHtml,
        reply_to: formData.email,
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      throw new Error(`Failed to send email: ${error}`)
    }

    const data = await res.json()

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})
