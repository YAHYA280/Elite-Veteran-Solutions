# Elite Veteran Solutions - Modern Website

A modern, responsive single-page application built with Next.js 14, TypeScript, Tailwind CSS, shadcn/ui, and GSAP animations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **SEO Optimized**: Built-in SEO features with metadata, structured data, and semantic HTML
- **Smooth Animations**: GSAP-powered animations with scroll triggers
- **Component Library**: shadcn/ui components with custom styling
- **Performance Focused**: Optimized images, code splitting, and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📋 Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd elite-veteran-solutions
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Edit `.env.local` with your configuration values.

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Homepage
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/         # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/               # UI components (shadcn/ui)
└── lib/                  # Utility functions
```

## 🎨 Customization

### Colors

The website uses a custom color palette defined in `tailwind.config.js`:

- **Navy**: Primary brand color (various shades)
- **Orange**: Accent color for highlights and CTAs
- **Gray**: Neutral colors for text and backgrounds

### Fonts

- **Inter**: Primary font family for clean, modern typography

### Animations

GSAP animations are configured in individual components with:

- Scroll-triggered animations
- Stagger effects for multiple elements
- Smooth transitions and easing

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push to main branch

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📊 Performance Optimization

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting and dynamic imports
- **Bundle Analysis**: Run `npm run analyze` to analyze bundle size
- **SEO**: Comprehensive metadata and structured data

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run type-check` - Run TypeScript type checking

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🎯 SEO Features

- Meta tags and Open Graph
- Structured data (JSON-LD)
- Semantic HTML structure
- Optimized images with alt text
- Sitemap generation
- Robots.txt

## 🔒 Security Features

- Content Security Policy headers
- XSS protection
- HTTPS redirect configuration
- Secure headers with Next.js

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, contact:

- Email: info@elitevetsolutions.com
- Phone: 888-747-9909

## 📄 License

This project is proprietary and confidential. All rights reserved by Elite Veteran Solutions.

---

Built with ❤️ by the Elite Veteran Solutions team
