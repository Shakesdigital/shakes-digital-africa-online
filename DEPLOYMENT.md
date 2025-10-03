# Deployment Guide

## Automated Deployment Setup

This project is configured to automatically deploy to Netlify when changes are pushed to the `main` branch.

### Configuration Files

1. **netlify.toml** - Netlify build configuration
2. **.nvmrc** - Node.js version specification (v18)
3. **.github/workflows/netlify-deploy.yml** - GitHub Actions workflow (optional)

## Deployment Methods

### Method 1: Automatic Deployment (Recommended)

Netlify is configured to automatically deploy when you push to GitHub:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

The deployment will automatically trigger and you can monitor it at:
https://app.netlify.com/projects/shakesdigital

### Method 2: Manual Deployment via Netlify CLI

If automatic deployment fails or you need to deploy manually:

```bash
# Build the project
npm run build

# Deploy to production
netlify deploy --prod --dir=dist
```

### Method 3: Manual Deployment via Netlify Dashboard

1. Go to https://app.netlify.com/projects/shakesdigital
2. Click "Deploys" tab
3. Click "Trigger deploy" → "Deploy site"

## Build Configuration

- **Node Version**: 18
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Functions Directory**: `netlify/functions`

## Environment Variables

Make sure the following are set in Netlify dashboard (if needed):
- `NODE_VERSION=18`

## Troubleshooting

### Build Fails on Netlify

1. Check build logs in Netlify dashboard
2. Verify `netlify.toml` configuration
3. Ensure all dependencies are in `package.json`
4. Try building locally first: `npm run build`

### Changes Not Appearing on Live Site

1. Wait 2-3 minutes for CDN cache to clear
2. Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Check deployment status in Netlify dashboard
4. Clear browser cache

### Manual Deploy Required

If automatic deployments aren't working:
```bash
netlify build
netlify deploy --prod --dir=dist
```

## GitHub Secrets Setup (for GitHub Actions)

To enable GitHub Actions deployments, add these secrets to your GitHub repository:

1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Add the following secrets:
   - `NETLIFY_AUTH_TOKEN`: Get from https://app.netlify.com/user/applications#personal-access-tokens
   - `NETLIFY_SITE_ID`: Get from Netlify site settings or use `32fb4bc6-06a6-449a-9222-dbbee7d6a9fd`

## Production URLs

- **Primary URL**: https://shakesdigital.com
- **Netlify URL**: https://shakesdigital.netlify.app
- **Admin Dashboard**: https://app.netlify.com/projects/shakesdigital

## Support

For deployment issues, contact the development team or check:
- Netlify Documentation: https://docs.netlify.com
- Build logs: https://app.netlify.com/projects/shakesdigital/deploys
