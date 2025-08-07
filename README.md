# Elixir Skin & Hair Clinic

A modern, responsive website for Elixir Skin & Hair Clinic, featuring comprehensive dermatology and hair treatment services. Visit the live site: [Elixir Skin & Hair Clinic](https://elixir-mu-henna.vercel.app/)

## Features

- 🎨 Modern, responsive design optimized for all devices
- 🏥 Comprehensive treatment information and service listings
- 📸 Dynamic gallery with before/after treatment results
- 📝 Blog section for skincare tips and medical insights
- 📅 Easy appointment booking system
- 🔍 SEO-optimized content and structure
- 📱 Mobile-first approach with smooth navigation
- ⚡ Fast loading with optimized assets

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) - React framework for production
- **Styling**:
  - [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
  - [class-variance-authority](https://cva.style/docs) - For managing component variants
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
  - Custom components with modern design patterns
- **Notifications**: Toast notifications using Radix UI Toast primitive
- **Icons**: [Lucide Icons](https://lucide.dev/) - Beautiful open-source icons

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/abhishekislive/Elixir.git
```

2. Install dependencies:

```bash
cd Elixir
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

## Project Structure

```
Elixir/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components
│   └── ...             # Feature-specific components
├── pages/              # Next.js pages and API routes
│   ├── treatments/     # Treatment-specific pages
│   ├── blog/          # Blog section
│   └── ...            # Other pages
├── public/            # Static assets
├── styles/           # Global styles
└── lib/              # Utility functions and helpers
```

## Key Features in Detail

### Treatment Pages

- Dynamic routing for individual treatment pages
- Detailed information about procedures
- Before/after galleries
- Patient testimonials

### Contact & Booking

- Easy-to-use contact form
- Direct phone call integration
- Location map integration
- Quick response system

### Gallery Section

- Optimized image loading
- Category-based filtering
- Lightbox view for detailed images
- Before/after comparisons

### Blog Integration

- Regular updates on skincare topics
- SEO-optimized content
- Easy sharing functionality
- Category-based organization

## Deployment

The site is deployed on [Vercel](https://vercel.com) with automatic deployments from the main branch. Visit the live site at [https://elixir-mu-henna.vercel.app/](https://elixir-mu-henna.vercel.app/)

## Performance Optimizations

- Image optimization with Next.js Image component
- Static site generation for faster page loads
- Code splitting and lazy loading
- Optimized fonts and icons
- Efficient CSS with Tailwind's JIT compiler

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
