# Database Setup Instructions

## Problem
Contact form showing error: "There was a problem sending your message. Please try again."

## Cause
The database tables don't exist in your Supabase project yet.

## Solution (5 minutes)

### Step 1: Go to Supabase SQL Editor

1. Open your browser
2. Go to: https://supabase.com/dashboard/project/coflowvqtsacmwxhqwpv
3. Log in with your Supabase account
4. Click on "SQL Editor" in the left sidebar

### Step 2: Run the Setup Script

1. Click "New Query" button
2. Copy ALL the content from `QUICK_DATABASE_SETUP.sql` file
3. Paste it into the SQL editor
4. Click "Run" button (or press Ctrl+Enter)
5. Wait for "Success" message (should take 2-3 seconds)

### Step 3: Verify Tables Were Created

1. In Supabase dashboard, click "Table Editor" in left sidebar
2. You should see these 3 tables:
   - ✅ `contact_submissions`
   - ✅ `newsletter_subscriptions`
   - ✅ `message_responses`

### Step 4: Test the Contact Form

1. Go to: https://shakesdigital.com/contact
2. Fill out the form with test data
3. Click "Connect with Us Today"
4. You should see: "Message Sent! Thank you for contacting us..."

### Step 5: Verify Submission in Admin Dashboard

1. Go to: https://shakesdigital.com/admin/login
2. Log in
3. Go to: https://shakesdigital.com/admin/contacts
4. You should see your test submission!

## Troubleshooting

### Still getting error after running SQL?

**Check browser console:**
1. Open contact form
2. Press F12 to open developer tools
3. Go to "Console" tab
4. Submit the form
5. Look for red error messages
6. Send me the error message

**Verify tables exist:**
1. Go to Supabase dashboard
2. Click "Table Editor"
3. Check if tables are listed
4. If not, try running the SQL script again

**Check RLS policies:**
1. In Supabase, go to Authentication → Policies
2. Make sure "Anyone can submit contact form" policy exists
3. Should allow INSERT for anon users

### Common Issues

**Error: "relation 'contact_submissions' does not exist"**
- Tables not created yet
- Run `QUICK_DATABASE_SETUP.sql` in SQL Editor

**Error: "permission denied"**
- RLS policies not set correctly
- Re-run the SQL script to fix policies

**Error: "Failed to fetch"**
- Network issue
- Check internet connection
- Check if Supabase is accessible

## After Setup Works

Once the form works, you can set up email notifications:

1. Follow instructions in `EMAIL_SETUP.md`
2. This is optional - form will work without emails
3. Emails just notify you when someone submits

## Need Help?

If you still have issues:
1. Check browser console for errors
2. Check Supabase dashboard → Logs
3. Make sure you're logged out when testing (anon user should work)
4. Try in incognito/private browsing mode

## Quick Test

Run this in Supabase SQL Editor to insert test data:

```sql
INSERT INTO contact_submissions (name, email, message)
VALUES ('Test User', 'test@example.com', 'This is a test message');
```

Then check if it appears in the admin dashboard!
