# Email Notification Setup Guide

This guide explains how to set up email notifications for contact form submissions.

## Overview

When someone submits a contact form on your website:
1. ✅ The submission is saved to the Supabase database
2. ✅ The submission appears in your Admin Dashboard (`/admin/contacts`)
3. 📧 Email notifications are sent to all admin emails

## Email Recipients

Notifications are sent to:
- `shakesdigital@gmail.com`
- `fsddanmugisa@gmail.com`
- `info@shakesdigital.com`

## Setup Steps

### 1. Sign Up for Resend (Email Service)

1. Go to [Resend.com](https://resend.com) and create a free account
2. Verify your email address
3. In the Resend dashboard, click "API Keys"
4. Create a new API key and copy it

### 2. Configure Domain (Optional but Recommended)

To send emails from `@shakesdigital.com`:

1. In Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter: `shakesdigital.com`
4. Add the DNS records shown to your domain registrar:
   - SPF record
   - DKIM records
5. Wait for verification (usually 5-30 minutes)

**Note:** If you skip this step, emails will be sent from `@resend.dev` which is fine for testing.

### 3. Deploy the Email Function to Supabase

1. Install Supabase CLI:
```bash
npm install -g supabase
```

2. Login to Supabase:
```bash
supabase login
```

3. Link to your project:
```bash
cd "D:\SHAKES DIGITAL\shakesdigitalapp\shakes-digital-africa-online"
supabase link --project-ref coflowvqtsacmwxhqwpv
```

4. Set the Resend API key as a secret:
```bash
supabase secrets set RESEND_API_KEY=your_resend_api_key_here
```

5. Deploy the function:
```bash
supabase functions deploy send-contact-notification
```

### 4. Verify Setup

1. Go to your website: `https://shakesdigital.com/contact`
2. Fill out and submit the contact form
3. Check:
   - ✅ Submission appears in Admin Dashboard (`/admin/contacts`)
   - ✅ All three email addresses receive notification emails

## Email Template Features

The notification email includes:
- 🔔 **Subject:** "New Project Request from [Name] - [Service]"
- 👤 **Client Details:** Name, email, company, phone
- 💼 **Service Interest:** What service they're inquiring about
- 💬 **Full Message:** The complete message from the client
- 🕐 **Timestamp:** When the form was submitted
- 📊 **Quick Link:** Direct link to admin dashboard
- 📧 **Reply-To:** Set to client's email for easy response

## Testing

### Test the Email Function Directly:

```bash
supabase functions invoke send-contact-notification --body '{
  "name": "Test User",
  "email": "test@example.com",
  "company": "Test Company",
  "service": "Custom Software",
  "message": "This is a test message",
  "submittedAt": "2025-01-10T12:00:00Z"
}'
```

Expected response:
```json
{
  "success": true,
  "data": {
    "id": "email-id-here"
  }
}
```

## Troubleshooting

### Emails not being sent?

1. **Check Supabase Logs:**
```bash
supabase functions logs send-contact-notification
```

2. **Verify API Key:**
```bash
supabase secrets list
```

3. **Check Resend Dashboard:**
   - Go to Resend.com → Logs
   - Look for recent API calls
   - Check for errors

### Common Issues:

**"Failed to send email" error:**
- Verify your Resend API key is correct
- Check if you've exceeded free tier limits (100 emails/day)

**Emails going to spam:**
- Set up domain verification in Resend
- Add SPF and DKIM records to your domain

**No emails received:**
- Check spam/junk folders
- Verify email addresses in the function code
- Check Resend logs for delivery status

## Monitoring

### View Email Logs in Resend:
1. Go to Resend.com → Logs
2. See all sent emails, delivery status, and opens

### View Function Logs in Supabase:
```bash
supabase functions logs send-contact-notification --tail
```

### View Submissions in Admin Dashboard:
- Go to `https://shakesdigital.com/admin/contacts`
- All submissions are automatically saved here

## Cost

**Resend Free Tier:**
- 3,000 emails/month free
- 100 emails/day limit
- Perfect for contact form notifications

**Upgrade if needed:**
- $20/month for 50,000 emails
- No daily sending limits

## Security

- ✅ API keys stored as Supabase secrets (not in code)
- ✅ CORS enabled for your domain only
- ✅ Contact submissions saved to database with Row Level Security
- ✅ Admin dashboard requires authentication

## Support

If you need help:
1. Check Supabase function logs
2. Check Resend email logs
3. Contact Resend support (excellent response time)
4. Contact Supabase support

## Alternative: Using SMTP

If you prefer to use your own email server instead of Resend:

1. Update the function to use `nodemailer` with SMTP
2. Use your existing email provider (Gmail, Outlook, etc.)
3. Less reliable than Resend for deliverability

Recommended: Stick with Resend for better deliverability and monitoring.
