# Mazuri Oil & Energy - Corporate Website

A professional, dark-themed corporate website for Mazuri Oil & Energy Company built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern Dark Theme** - Sleek design with gold/amber accents
- **Scroll Animations** - Smooth reveal animations throughout
- **Responsive Design** - Mobile-first approach
- **Fast Performance** - Built with Next.js App Router
- **Type Safe** - Full TypeScript support

## Pages

- **Home** - Hero, Stats, Services Preview, Why Choose Us, CTA
- **About** - Company Story, Mission/Vision, Leadership Team, Timeline
- **Services** - Service Details, Process Steps, Industries Served
- **Contact** - Contact Form, Office Locations, FAQ

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide Icons](https://lucide.dev/) - Icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
mazuri/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── animations/        # Reusable animation components
│   │   ├── FadeIn.tsx
│   │   ├── SlideIn.tsx
│   │   ├── Counter.tsx
│   │   └── StaggerContainer.tsx
│   ├── layout/            # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   └── ...
│   └── ui/                # UI components
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Input.tsx
└── lib/
    └── utils.ts           # Utility functions
```

## Customization

### Colors

Theme colors are defined in `app/globals.css`:

- Primary Background: `#0a0a0a`
- Secondary Background: `#1a1a1a`
- Accent (Gold): `#d4af37`
- Secondary Accent (Blue): `#1e3a5f`

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Import existing components or create new sections

## License

Private - Mazuri Oil & Energy Company
# Mazuri
