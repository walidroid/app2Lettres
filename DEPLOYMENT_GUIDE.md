# Vercel Deployment Guide - App2Lettres

## 🚀 Quick Deployment Steps

### 1. Prerequisites
Ensure you have:
- Node.js 16+ installed
- Git repository initialized
- Vercel CLI installed (`npm i -g vercel`)

### 2. Local Setup
```bash
# Install dependencies
npm install

# Test local build
npm run build

# Test local server
npm run dev
```

### 3. Git Configuration
```bash
# Initialize git if not already done
git init
git add .
git commit -m "Initial commit with professional structure"
```

### 4. Vercel Deployment Methods

#### Method A: Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Method B: GitHub Integration
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### 5. Troubleshooting Common Issues

#### Error: "Input buffer contains unsupported image format"
**Solutions:**
1. **Check image formats**: Ensure all images are .png, .jpg, .jpeg, .gif, or .webp
2. **Verify image integrity**: Test opening each image locally
3. **Remove corrupted files**: Delete and re-upload any problematic images
4. **Use web-optimized formats**: Convert to .webp for better performance

#### Error: "Build failed"
**Solutions:**
1. **Check build locally**: Run `npm run build` locally first
2. **Verify imports**: Ensure all import paths are correct
3. **Check dependencies**: All required packages should be in package.json

#### Error: "Module not found"
**Solutions:**
1. **Check file paths**: Use relative paths correctly
2. **Verify file extensions**: Include .jsx, .js extensions in imports
3. **Case sensitivity**: Ensure consistent casing (Vercel is case-sensitive)

### 6. Vercel Configuration Files

Your project now includes:
- ✅ `vercel.json` - Vercel deployment configuration
- ✅ `.gitignore` - Prevents uploading unnecessary files
- ✅ `vite.config.js` - Build configuration
- ✅ `package.json` - Dependencies and scripts

### 7. Required Files Checklist

**Essential files for deployment:**
- [x] `package.json` (with all dependencies)
- [x] `vite.config.js`
- [x] `vercel.json`
- [x] `public/index.html`
- [x] `src/main.jsx`
- [x] `src/App.jsx`

### 8. Environment Variables (if needed)
If you need environment variables:
1. Create `.env` file locally
2. Add variables to Vercel dashboard
3. Use `import.meta.env.VARIABLE_NAME` in code

### 9. Post-Deployment Verification

After successful deployment:
1. Check the live URL
2. Verify all images load correctly
3. Test all interactive features
4. Check console for any errors

### 10. Common Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview build
npm run preview

# Deploy to Vercel
vercel --prod

# Check deployment status
vercel --version
```

## 🆘 Still Having Issues?

If you continue to experience problems:

1. **Check Vercel logs**: Go to Vercel dashboard → Deployments → View build logs
2. **Verify file encoding**: Ensure all files are UTF-8 encoded
3. **Test locally**: Run `npm run build` to catch issues before deployment
4. **Check file permissions**: Ensure files are readable
5. **Contact support**: Use Vercel's support if issues persist

## 📞 Support

For additional help:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Community Discord: https://vercel.com/discord