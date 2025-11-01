# 🌟 CV Portfolio – Alaa Eddin Albarghoth

This file merges all architecture, refactor, and project documentation into one unified, enterprise-grade **README.md**.

---

<<<<<<< HEAD
# CV Portfolio - Alaa Eddin Albarghoth

> Production-ready animated portfolio website showcasing 8+ years of Android engineering experience

## Live Deployments

- **Primary**: [Vercel](https://cv-portfolio-alaa.vercel.app)
- **Fallback**: [GitHub Pages](https://alaaedalbarghoth.github.io/cv-portfolio)

## Features

- Modern Next.js static site with TypeScript
- Smooth animations powered by Framer Motion
- Fully responsive design (320px - 2560px)
- Dark/Light theme with localStorage persistence
- Accessible (WCAG compliant, keyboard navigation, ARIA labels)
- Optimized performance (Lighthouse scores ≥90)
- SEO optimized with OpenGraph and Twitter cards
- Contact integrations (Email, Phone, WhatsApp, GitHub)
- Downloadable CV/Resume

## Tech Stack

- **Framework**: Next.js 16 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Testing**: Playwright
- **Deployment**: Vercel + GitHub Pages
- **CI/CD**: GitHub Actions

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Format code
pnpm format

# Run tests
pnpm test
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
cv-portfolio/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── api/                # API routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── content/                # Site content
│   └── site.json           # Main content file
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
│   └── resume/             # CV PDF files
├── scripts/                # Build scripts
│   └── ingest-cv.js        # CV parser (future)
├── tests/                  # Playwright tests
└── .github/workflows/      # CI/CD workflows
```

## Updating Content

### Manual Update

Edit `content/site.json` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Contact details

### CV Ingestion (Planned)

```bash
# Future feature for automatic CV parsing
pnpm ingest:cv path/to/your-cv.pdf
```

## Deployment

### Vercel (Primary)

1. Import repository to Vercel
2. Configure build settings:
   - **Build Command**: `pnpm build`
   - **Output Directory**: `out`
3. Add custom domain (optional)
4. Deploy

### GitHub Pages (Fallback)

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. Workflow automatically builds and deploys

## CI/CD Pipeline

- **Type checking**: Ensures TypeScript correctness
- **Linting**: Enforces code quality standards
- **Format checking**: Validates code formatting
- **Build**: Generates static export
- **Testing**: Runs Playwright tests (on deployment)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- Responsive font sizes

## Performance

- Static generation for optimal loading
- Image optimization
- Code splitting
- Minimal JavaScript
- Efficient animations (GPU-accelerated)
- Lazy loading where applicable

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Alaa Eddin Albarghoth. All rights reserved.

## Contact

- **Email**: Eng.alaa.brghoth@gmail.com
- **Phone**: +90 553 956 5750
- **GitHub**: [@AlaaEddinAlbarghoth](https://github.com/AlaaEddinAlbarghoth)
- **WhatsApp**: [Message](https://wa.me/905539565750)

---

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
=======
# cv-portfolio-alaa
Professional CV Portfolio of Alaa Eddin Albarghoth - Senior Android Engineer
>>>>>>> 380791776269fbb547bd59ddd8862fedce7cc230


---

<<<<<<< HEAD
# CV Portfolio - Alaa Eddin Albarghoth

> Production-ready animated portfolio website showcasing 8+ years of Android engineering experience

## Live Deployments

- **Primary**: [Vercel](https://cv-portfolio-alaa.vercel.app)
- **Fallback**: [GitHub Pages](https://alaaedalbarghoth.github.io/cv-portfolio)

## Features

- Modern Next.js static site with TypeScript
- Smooth animations powered by Framer Motion
- Fully responsive design (320px - 2560px)
- Dark/Light theme with localStorage persistence
- Accessible (WCAG compliant, keyboard navigation, ARIA labels)
- Optimized performance (Lighthouse scores ≥90)
- SEO optimized with OpenGraph and Twitter cards
- Contact integrations (Email, Phone, WhatsApp, GitHub)
- Downloadable CV/Resume

## Tech Stack

- **Framework**: Next.js 16 (Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Testing**: Playwright
- **Deployment**: Vercel + GitHub Pages
- **CI/CD**: GitHub Actions

## Local Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Type checking
pnpm typecheck

# Linting
pnpm lint

# Format code
pnpm format

# Run tests
pnpm test
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
cv-portfolio/
├── app/                    # Next.js app directory
│   ├── components/         # React components
│   ├── api/                # API routes
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Homepage
├── content/                # Site content
│   └── site.json           # Main content file
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
│   └── resume/             # CV PDF files
├── scripts/                # Build scripts
│   └── ingest-cv.js        # CV parser (future)
├── tests/                  # Playwright tests
└── .github/workflows/      # CI/CD workflows
```

## Updating Content

### Manual Update

Edit `content/site.json` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Contact details

### CV Ingestion (Planned)

```bash
# Future feature for automatic CV parsing
pnpm ingest:cv path/to/your-cv.pdf
```

## Deployment

### Vercel (Primary)

1. Import repository to Vercel
2. Configure build settings:
   - **Build Command**: `pnpm build`
   - **Output Directory**: `out`
3. Add custom domain (optional)
4. Deploy

### GitHub Pages (Fallback)

1. Enable GitHub Pages in repository settings
2. Set source to "GitHub Actions"
3. Push to main branch
4. Workflow automatically builds and deploys

## CI/CD Pipeline

- **Type checking**: Ensures TypeScript correctness
- **Linting**: Enforces code quality standards
- **Format checking**: Validates code formatting
- **Build**: Generates static export
- **Testing**: Runs Playwright tests (on deployment)

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Keyboard navigation support
- Focus visible states
- Sufficient color contrast
- Responsive font sizes

## Performance

- Static generation for optimal loading
- Image optimization
- Code splitting
- Minimal JavaScript
- Efficient animations (GPU-accelerated)
- Lazy loading where applicable

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Alaa Eddin Albarghoth. All rights reserved.

## Contact

- **Email**: Eng.alaa.brghoth@gmail.com
- **Phone**: +90 553 956 5750
- **GitHub**: [@AlaaEddinAlbarghoth](https://github.com/AlaaEddinAlbarghoth)
- **WhatsApp**: [Message](https://wa.me/905539565750)

---

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion
=======
# cv-portfolio-alaa
Professional CV Portfolio of Alaa Eddin Albarghoth - Senior Android Engineer
>>>>>>> 380791776269fbb547bd59ddd8862fedce7cc230

