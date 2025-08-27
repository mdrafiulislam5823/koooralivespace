# Koora Live - Football Streaming Website

A modern Next.js application for live football streaming with Arabic RTL support, SEO optimization, and responsive design.

## Features

- 🏈 Live football streaming interface
- 🌐 Arabic RTL layout support
- 📱 Fully responsive design
- 🔍 SEO optimized with structured data
- ⚡ Fast performance with Next.js 15
- 🎨 Modern UI with Tailwind CSS
- 📊 Analytics ready

## Tech Stack

- **Framework:** Next.js 15
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **Icons:** Lucide React
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd koora-live-streaming
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment on Vercel

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/koora-live-streaming)

### Manual Deployment

1. **Connect to GitHub:**
   - Push your code to a GitHub repository
   - Connect your GitHub account to Vercel

2. **Import Project:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Settings:**
   - Framework Preset: Next.js
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Environment Variables:**
   - Add any required environment variables in Vercel dashboard
   - Reference `.env.example` for available variables

5. **Deploy:**
   - Click "Deploy"
   - Your site will be available at `https://your-project.vercel.app`

### Custom Domain

To use your custom domain (koooralive.space):

1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Configure DNS settings as instructed by Vercel

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── [pages]/          # Other pages
├── components/            # Reusable components
├── lib/                  # Utility functions
├── public/               # Static assets
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
├── vercel.json          # Vercel deployment config
└── package.json         # Dependencies and scripts
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.