# Walkthrough - Developer Portfolio Website

We have successfully completed the full-stack developer portfolio for **Trunal Prajapati**. The project is production-ready, highly optimized, accessible, and structured according to professional creative standards.

---

## 🏗️ Completed Project Directory Structure

Here is a breakdown of the generated project hierarchy:
* **`public/`**
  * `resume.pdf` - Statically served CV for recruiter downloads
  * `robots.txt` - Search engine crawler indexing permissions
  * `sitemap.xml` - Site URL map for indexing search engines
* **`src/`**
  * **`data/`**
    * [resumeData.js](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/data/resumeData.js) - Static single source of truth for resume details (skills, education, projects, contact parameters)
  * **`hooks/`**
    * [useGitHubData.js](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/hooks/useGitHubData.js) - GitHub API details fetcher with local storage caching to prevent API rate limit issues
  * **`components/`**
    * [GlowCursor.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/components/GlowCursor.jsx) - Custom desktop hardware-accelerated pointer halo tracking
    * [LoadingScreen.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/components/LoadingScreen.jsx) - Code-typing loading bar intro
    * [ThemeToggle.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/components/ThemeToggle.jsx) - Smooth light/dark class toggle with local persistence
    * [ScrollToTop.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/components/ScrollToTop.jsx) - Bottom-right scroll utility
    * [Navbar.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/components/Navbar.jsx) - Sticky glassmorphic nav header with `IntersectionObserver` active highlight
    * [Footer.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/components/Footer.jsx) - Social links and copyright footer
  * **`sections/`**
    * [Hero.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/Hero.jsx) - Visual hero layout with typing job title, parallax floating icons, and main actions
    * [About.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/About.jsx) - Core bio with scroll-triggered statistics count-ups
    * [Skills.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/Skills.jsx) - Technology classification grids with interactive level meters and hover lights
    * [Projects.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/Projects.jsx) - Visual cards using custom mock mockups, technology tag filters, and click-details popups
    * [Education.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/Education.jsx) - Alternate timeline coursework summary
    * [Certifications.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/Certifications.jsx) - Credentials grid showing verification seals
    * [GitHubStats.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/GitHubStats.jsx) - Live integration metrics, language breakdown bars, and mock activity maps
    * [Contact.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/Contact.jsx) - EmailJS contact form with email validations and developer testing fallbacks
  * [App.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/App.jsx) - Main layout with 404 path triggers
  * [index.css](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/index.css) - Main stylesheet with Tailwind CSS v4 variables and custom webkit layouts
* [index.html](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/index.html) - Setup with Google Fonts (Inter, Poppins), meta headers, OG cards, and structured JSON-LD schemas
* [vite.config.js](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/vite.config.js) - Bundler configurations loaded with React and Tailwind v4 compilation engines

---

## 🎨 Premium Visual Design & Functionality Highlights

1. **Aesthetic Transitions & Colors**: Pure slate-blue themes (`#0F172A`/`#1E293B`) combined with glassy backdrops (`backdrop-blur-md bg-white/10`) provide high depth. Light and dark modes transition seamlessly via a root class toggle.
2. **Performance Caching**: The GitHub Stats component implements local caching. If multiple page loads occur, it loads profile stats instantly from local storage, only hitting the API once per hour. It also handles rate limits elegantly with a hardcoded resume fallback.
3. **EmailJS Fallback**: If EmailJS keys are left default, the Contact form uses an automated mock timer to simulate message transmission, allowing testing right out of the box.
4. **Custom 404 Redirection**: The portfolio includes a client-side path scanner in `App.jsx`. If a user attempts to navigate to a nested folder path, they are greeted by an elegant, dark-themed 404 system error console.

---

## 🧪 Production Build Verification

The compilation completed successfully:
```bash
vite v8.1.5 building client environment for production...
transforming...✓ 2223 modules transformed.
rendering chunks...
computing gzip size...
dist/index.html                   3.50 kB │ gzip:   1.18 kB
dist/assets/index-_lEfIIpU.css   71.20 kB │ gzip:  11.55 kB
dist/assets/index-Cd_apF_L.js   435.98 kB │ gzip: 135.29 kB

✓ built in 537ms
```

---

## 🚀 How to Run Locally

Follow these commands in your terminal:

1. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser to the local address displayed (typically `http://localhost:5173`).

2. **Run Local Production Preview**:
   ```bash
   npm run build
   npm run preview
   ```

---

## 📁 How to Wire EmailJS Keys for Deployment

Once you deploy to production, replace the placeholders inside [Contact.jsx](file:///c:/Users/Trunal/OneDrive/Desktop/PORTFOLIO/src/sections/Contact.jsx#L42-L44):
```javascript
const SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID"; 
const TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_EMAILJS_PUBLIC_KEY";
```
This will activate real email transmissions directly to your inbox.
