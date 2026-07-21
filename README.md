# Nexora — High-Converting Video Ads Portfolio

An ultra-premium, high-performance portfolio website designed for **Nexora**, a luxury video ad creative agency. Designed with custom **Calacatta Viola Marble** background aesthetics, dramatic **Burgundy Patina** branding, and smooth typographic and motion animations.

The application is fully optimized for speed, responsive design, interactive galleries, and is **100% ready for instant deployment to Vercel, Netlify, or GitHub Pages**.

---

## 🎨 Visual Brand Identity
*   **Background (Calacatta Viola Marble)**: A luxurious, warm, organic off-white stone background (`#fdfbf9`) detailed with custom-crafted, glowing SVG veins containing deep wine (`#4A0711`) and plum-rose (`#C98894`) marble textures.
*   **Typography (Burgundy Patina)**: High-contrast, elegant display fonts paired with deep burgundy patinas (`#3d050b`, `#ad4e5b`) representing meticulous craftsmanship and premium architectural quality.
*   **Aesthetics**: Minimalist luxury, spacious negative space, fluid motion entering transitions, and zero artificial splash screens.

---

## 🚀 Key Features

*   ✨ **Intelligent Entry Transition**: A pixel-perfect introductory visual sweep that gently fades in the portfolio elements.
*   🎥 **Interactive Video Gallery**: A high-performance gallery of curated high-converting advertising creatives with smooth hover scaling and interactive media viewing.
*   📞 **Dynamic Consultation Engine**: A gorgeous, fully integrated contact form with filterable category chips to seamlessly collect client inquiries.
*   🗺️ **Fully Responsive Layout**: Fluid bento grids and desktop-first layouts that scale mathematically to mobile screen sizes.
*   ⚡ **Vercel Optimized**: Includes native Single Page Application (SPA) routing handling via `vercel.json` to prevent `404` errors on sub-routes.

---

## 🛠️ Tech Stack

*   **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vite.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animations**: [Motion (Framer Motion v11)](https://motion.dev/)
*   **Icons**: [Lucide React](https://lucide.dev/)

---

## 📦 How to Run Locally

Get the project running on your computer in less than a minute:

1.  **Clone the Repository**:
    ```bash
    git clone <your-github-repo-url>
    cd nexora-portfolio
    ```

2.  **Install Dependencies**:
    ```bash
    npm install
    ```

3.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) (or the port specified in your terminal) in your browser.

4.  **Build for Production**:
    ```bash
    npm run build
    ```
    This generates static, highly optimized production assets in the `dist/` directory.

---

## 📐 Vercel Deployment Guide

This project is fully pre-configured for Vercel out of the box with the included `vercel.json` config.

### Option 1: Deploy with Vercel Git Integration (Recommended)
1.  Push this project to your GitHub repository.
2.  Go to [Vercel](https://vercel.com/) and log in.
3.  Click **Add New...** > **Project**.
4.  Import your GitHub repository.
5.  Vercel will automatically detect **Vite** as the framework:
    *   **Build Command**: `npm run build` (or `vite build`)
    *   **Output Directory**: `dist`
6.  Click **Deploy**!

### Option 2: Deploy via Vercel CLI
If you have the Vercel CLI installed, simply run:
```bash
npm install -g vercel
vercel
```
Follow the interactive prompts to deploy.

---

## 📄 License
This project is licensed under the MIT License. Feel free to use and adapt it for your client acquisition and advertising production services.
