# Deployment Guide for Netlify

## Prerequisites
- A Netlify account (sign up at https://www.netlify.com/)
- Your project pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- Node.js >= 20.9.0 (required for Next.js 16)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Add Next.js migration and Netlify config"
   git push origin master
   ```

2. **Connect to Netlify**
   - Log in to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider and repository

3. **Configure Build Settings**
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - The `netlify.toml` file will automatically configure everything else

4. **Deploy**
   - Click "Deploy site"
   - Netlify will automatically install dependencies and build your site

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   pnpm add -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   netlify deploy --prod
   ```

## Configuration Files

- `netlify.toml` - Main Netlify configuration file
- `.node-version` - Specifies Node.js version 20.9.0 for build
- `package.json` - Contains `engines` field requiring Node >= 20.9.0

## Build Settings

The `netlify.toml` file is already configured with:
- Build command: `pnpm build`
- Node version: 20.9.0 (required for Next.js 16)
- Next.js plugin for optimal deployment
- Automatic redirects for client-side routing

## Environment Variables (if needed)

If you need to add environment variables:
1. Go to Site settings → Build & deploy → Environment
2. Add your variables (e.g., API keys, database URLs)
3. Create a `.env.local` file locally for development (already gitignored)

## Troubleshooting

### Build Fails
- Check that all dependencies are listed in `package.json`
- Verify Node version is 20.9.0 or higher
- Check build logs in Netlify dashboard

### 404 Errors
- The redirect rules in `netlify.toml` should handle this
- Verify the publish directory is set to `.next`

### Performance Issues
- Enable Netlify's Edge Functions if needed
- Use Next.js Image Optimization
- Check bundle size with `pnpm build`

## Custom Domain (Optional)

1. Go to Domain settings in Netlify
2. Add your custom domain
3. Follow Netlify's DNS configuration instructions

## Continuous Deployment

Once connected, Netlify will automatically:
- Deploy on every push to your main branch
- Create preview deployments for pull requests
- Run build checks before deploying

For more information, visit [Netlify Next.js Documentation](https://docs.netlify.com/integrations/frameworks/next-js/)
