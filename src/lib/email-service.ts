interface EmailData {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const sendEmail = async (data: EmailData) => {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        recipients: ['shakesdigital@gmail.com', 'info@shakesdigital.com']
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return true;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};