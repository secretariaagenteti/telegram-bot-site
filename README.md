# Telegram Bot Site

This project is a Next.js web application using pnpm for package management. It includes Radix UI, Tailwind CSS, and other modern libraries for building a responsive and interactive site.

## Prerequisites
- Node.js (v18 or newer recommended)
- pnpm (https://pnpm.io/installation)

## Getting Started

### Install dependencies
```bash
pnpm install
```

### Development server
Start the development server:
```bash
pnpm dev
```
Visit `http://localhost:3000` in your browser.

### Build for production
```bash
pnpm build
```

### Start production server
After building:
```bash
pnpm start
```

## Linting
Run lint checks:
```bash
pnpm lint
```

## Deployment

You can deploy this project to Vercel, Netlify, or any platform that supports Next.js. For Astro.js deployment, use the following steps:

### Deploy with Astro.js (if using Astro integration)
1. Build the project:
    ```bash
    pnpm build
    ```
2. Deploy using Astro CLI:
    ```bash
    pnpm astro deploy
    ```
   (Make sure you have Astro CLI installed and configured if using Astro)

### Deploy to Vercel
1. Push your code to GitHub/GitLab/Bitbucket.
2. Import your repository in Vercel (https://vercel.com/import).
3. Vercel will detect Next.js and handle the build/deploy automatically.

### Deploy to Netlify
1. Push your code to a Git repository.
2. Connect your repository to Netlify (https://app.netlify.com/).
3. Set build command to `pnpm build` and publish directory to `.next`.

## Project Structure
- `app/` - Main application pages and layout
- `components/` - Reusable UI components
- `hooks/` - Custom React hooks
- `lib/` - Utility functions
- `public/` - Static assets
- `styles/` - Global styles

## License
MIT
