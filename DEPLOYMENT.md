# 🚀 Quick Deployment Guide

## Option 1: GitHub Pages (Recommended)

### Step 1: Upload to GitHub
1. Go to https://github.com/new
2. Create a new repository (e.g., "ccs-website")
3. Make it **PUBLIC** (required for exam)
4. Don't initialize with README

### Step 2: Upload Your Files
**Method A - Via GitHub Website:**
1. Click "uploading an existing file"
2. Drag all files from the `ccs-website` folder
3. Commit changes

**Method B - Via Git Command Line:**
```bash
cd ccs-website
git init
git add .
git commit -m "Initial commit - College of Computer Studies Website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/ccs-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Select branch: **main**
   - Select folder: **/ (root)**
5. Click **Save**
6. Wait 1-2 minutes
7. Your site will be live at: `https://YOUR-USERNAME.github.io/ccs-website/`

## Option 2: Local Testing

### Open Directly
- Double-click `index.html` in the ccs-website folder
- It will open in your default browser

### Using Python (if installed)
```bash
cd ccs-website
python -m http.server 8000
```
Then open: http://localhost:8000

### Using Node.js (if installed)
```bash
cd ccs-website
npx serve
```
Then open the URL shown in terminal

## 📝 Important Exam Notes

1. **Repository must be PUBLIC** for your instructor to access
2. **Test the live link** before submitting
3. **All JavaScript must work** after deployment
4. Your GitHub Pages URL format will be:
   ```
   https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
   ```

## ✅ Pre-Submission Checklist

- [ ] Repository is PUBLIC
- [ ] All files uploaded (index.html, css/, js/)
- [ ] GitHub Pages is enabled
- [ ] Live website loads correctly
- [ ] All 6 pages navigate properly
- [ ] Faculty search/filter works
- [ ] Program tabs and details work
- [ ] Announcements load with animation
- [ ] Contact form validation works
- [ ] Navbar auto-hide works on scroll

## 🆘 Troubleshooting

**Site shows 404 error:**
- Make sure GitHub Pages is enabled
- Check that you selected the correct branch (main)
- Wait a few minutes and refresh

**JavaScript not working:**
- Check browser console for errors (F12)
- Ensure all files are in correct folders
- Verify file paths are correct

**Styles not loading:**
- Check that css/style.css exists
- Verify the link tag in index.html is correct

## 📧 Need Help?

Common issues:
1. Make sure all folder names are lowercase (css, js, assets)
2. File structure must match exactly as shown in README
3. Don't rename files unless you update the references in index.html

## Final Step

**Record Your GitHub Pages URL and submit it with your exam!**

Example: `https://johndoe.github.io/ccs-website/`
