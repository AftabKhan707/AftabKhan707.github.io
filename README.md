# Aftab Khan - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design showcasing projects, skills, and contact information.

## 🚀 Live Demo

Visit the live portfolio: [Your GitHub Pages URL will be here after deployment]

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Automatic theme switching based on user preference
- **Live Project Links**: Direct links to live demos and GitHub repositories
- **Contact Integration**: Easy ways to get in touch via email, phone, and social media
- **AI-Powered Projects**: Showcasing advanced MERN stack applications

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📁 Projects Featured

1. **Finance Managing App (Welth)** - AI-powered finance management with automated tracking
2. **Chat App** - Real-time messaging with MERN stack and Socket.io
3. **File Transfer App** - P2P file sharing with WebRTC
4. **Realtime Device Tracker** - Live device tracking with maps

## 🚀 Deployment to GitHub Pages

This portfolio is configured for automatic deployment to GitHub Pages. Here's how to set it up:

### Step 1: Create GitHub Repository

1. Go to github.com and create a new repository
2. Name it either:
   - "AftabKhan707.github.io" (main domain)
   - "portfolio-website" (subdomain)

### Step 2: Configure Repository Settings

1. Go to your repository settings
2. Navigate to "Pages" section
3. Set source to "GitHub Actions"

### Step 3: Push Your Code

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/your-username/your-repo-name.git

# Push to GitHub
git push -u origin main
```

### Step 4: Access Your Live Site

After the GitHub Actions workflow completes (usually 2-3 minutes), your site will be available at:

- `https://your-username.github.io` (if repo name is your-username.github.io)
- `https://your-username.github.io/portfolio-website` (if repo name is portfolio-website)

## 🔧 Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

## 📝 Customization

### Adding Your Profile Photo

1. Add your image to the `/public` folder as `profile.png`
2. The image will automatically display in the hero section

### Updating Project Information

Edit the `projects` array in `src/app/page.tsx` to add/modify your projects.

### Updating Contact Information

Update contact details in the contact section of `src/app/page.tsx`.

## 🤝 Connect with Aftab

- **Email**: aftabsaboorkhan@gmail.com
- **Phone**: +91 91990 35463
- **GitHub**: [github.com/AftabKhan707](https://github.com/AftabKhan707)
- **LinkedIn**: [linkedin.com/in/aftabskhan](https://linkedin.com/in/aftabskhan)

---

_Built with ❤️ by Aftab Khan - Full Stack Developer_
