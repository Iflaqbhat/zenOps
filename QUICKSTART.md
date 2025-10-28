# 🚀 Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

If you see TypeScript errors, also run:

```bash
npm install --save-dev @types/react @types/node
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Explore the App

- **Homepage**: Hero, features, stats, testimonials
- **Agents Page**: `/agents` - View all AI agents
- **Agent Details**: `/agents/nurse`, `/agents/scribe`, etc.
- **Integrations**: `/integrations` - EHR systems
- **Case Studies**: `/case-studies` - Customer stories
- **Demo Modal**: Click "Book a Demo" button (floating bottom-right)

## 🎨 Customization Tips

### Change Brand Colors

Edit `tailwind.config.js` or search/replace `blue-600` with your color.

### Add Your Logo

Replace "ZenOps AI" text in `components/layout/Navigation.tsx` with an `<Image>` component.

### Add Real Images

Place images in `/public/images/` and update paths in:

- `components/agents/AgentsGrid.tsx`
- `app/agents/[slug]/page.tsx`

### Connect Demo Form

Update `components/demo/DemoModal.tsx` `handleSubmit` to POST to your API:

```tsx
const response = await fetch("/api/demo-request", {
  method: "POST",
  body: JSON.stringify(formData),
});
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

1. Push code to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Deploy automatically

## 💡 Need Help?

Check the full README.md for detailed documentation.
