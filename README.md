# ZenOps AI - Healthcare AI Agents Platform

A modern, Sully.ai-inspired marketing website showcasing AI agents for healthcare organizations. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Marketing Site**: Hero sections, feature showcases, testimonials, and CTAs
- **AI Agents Showcase**: Dedicated pages for each AI agent (Nurse, Receptionist, Scribe, Medical Coder)
- **Interactive Demo Modal**: Form-based demo request with validation and success states
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **EHR Integrations Page**: Showcase of Epic, Cerner, Athenahealth, and 50+ integrations
- **Case Studies**: Customer success stories with metrics and testimonials
- **Clean Navigation**: Sticky header with mobile menu support

## 📁 Project Structure

```
ZenOps-main/
├── app/
│   ├── page.tsx                    # Homepage
│   ├── layout.tsx                  # Root layout with nav/footer
│   ├── globals.css                 # Global styles and Tailwind
│   ├── agents/
│   │   ├── page.tsx               # Agents listing page
│   │   └── [slug]/
│   │       └── page.tsx           # Dynamic agent detail pages
│   ├── integrations/
│   │   └── page.tsx               # EHR integrations page
│   └── case-studies/
│       └── page.tsx               # Customer success stories
│
├── components/
│   ├── agents/
│   │   ├── AgentsGrid.tsx         # Grid of agent cards
│   │   └── AgentCard.tsx          # Individual agent card
│   ├── demo/
│   │   └── DemoModal.tsx          # Interactive demo request modal
│   └── layout/
│       ├── Navigation.tsx         # Header navigation
│       └── Footer.tsx             # Site footer
│
└── README.md                       # This file
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Emoji (can be replaced with heroicons or lucide-react)
- **State Management**: React hooks (useState)

## 📦 Installation

1. **Clone or navigate to the project**:

   ```bash
   cd c:/Users/ASK/Downloads/ZenOps-main
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

   Or if using yarn:

   ```bash
   yarn install
   ```

3. **Install missing type definitions** (if needed):
   ```bash
   npm install --save-dev @types/react @types/node
   ```

## 🏃 Running the Application

### Development Mode

Start the Next.js development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000)

### Production Build

Build the optimized production version:

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Adding a New AI Agent

1. **Update agents data** in `components/agents/AgentsGrid.tsx`:

   ```tsx
   const agents = [
     // ... existing agents
     {
       id: "pharmacist",
       name: "AI Pharmacist",
       blurb: "Medication management and interaction checks",
       img: "/images/agent-pharmacist.png",
     },
   ];
   ```

2. **Add agent detail data** in `app/agents/[slug]/page.tsx`:

   ```tsx
   const agentData = {
     // ... existing agents
     pharmacist: {
       name: "AI Pharmacist",
       icon: "💊",
       tagline: "Intelligent medication management",
       // ... features, workflow, benefits
     },
   };
   ```

3. **Update generateStaticParams** in the same file:
   ```tsx
   export async function generateStaticParams() {
     return [
       // ... existing slugs
       { slug: "pharmacist" },
     ];
   }
   ```

### Updating Integrations

Edit `app/integrations/page.tsx` and modify the `mainEHRs` or `additionalIntegrations` arrays.

### Changing Brand Colors

Update Tailwind config or modify inline classes:

- Primary blue: `bg-blue-600`, `text-blue-600`
- Replace with your brand color: `bg-[#yourcolor]`

### Adding Real Images

Replace placeholder image paths in:

- `components/agents/AgentCard.tsx` (agent screenshots)
- `app/agents/[slug]/page.tsx` (agent detail images)

Place images in `public/images/` directory.

## 🔧 Configuration

### Tailwind CSS

If Tailwind isn't configured, create `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### TypeScript

Ensure `tsconfig.json` exists with proper Next.js settings:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## 📱 Pages Overview

### Homepage (`/`)

- Hero with CTA buttons
- Stats section (24/7, 50% time saved, etc.)
- Features grid (6 AI agents)
- Customer testimonial
- Compliance badges (HIPAA, SOC 2, etc.)
- Final CTA section

### Agents Listing (`/agents`)

- Grid of all AI agents
- Clickable cards leading to detail pages
- Floating demo modal button

### Agent Detail (`/agents/[slug]`)

- Agent-specific hero
- Key features grid
- How it works (workflow steps)
- Impact metrics
- CTA section

### Integrations (`/integrations`)

- Main EHR partners (Epic, Cerner, etc.)
- Additional integrations grid
- Integration categories
- CTA to schedule integration call

### Case Studies (`/case-studies`)

- Multiple customer success stories
- Metrics and testimonials
- Alternating left/right layout
- CTA to get started

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build and deploy the `.next` folder:

```bash
npm run build
```

Upload to your hosting provider or use Docker.

## 🎯 Next Steps / Roadmap

- [ ] Add real screenshots for each AI agent
- [ ] Integrate with a backend API for demo requests
- [ ] Add analytics (Google Analytics, Mixpanel)
- [ ] Implement blog section
- [ ] Add live chat widget
- [ ] SEO optimization (meta tags, sitemaps)
- [ ] Accessibility audit and improvements
- [ ] Performance optimization (image optimization, code splitting)
- [ ] Add animated stats counters
- [ ] Implement A/B testing for CTAs

## 🤝 Contributing

This is a template project. Feel free to customize for your needs!

## 📄 License

MIT License - feel free to use this template for your projects.

## 💡 Credits

Inspired by [Sully.ai](https://www.sully.ai/) design and user experience patterns.

---

**Built with ❤️ using Next.js and Tailwind CSS**

For questions or support, visit our website or contact support@zenops.ai
