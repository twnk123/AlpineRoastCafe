import { Metadata } from 'next'
import site from '@/content/site.json'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us — Our Story & Coffee Philosophy',
  description: 'Learn about Alpine Roast Café, Ljubljana\'s specialty coffee destination since 2020. We source single-origin beans ethically and roast locally. Meet our expert baristas and discover our coffee philosophy.',
}

export default function AboutPage() {
  return (
    <main className="container-px mx-auto py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-accent hover:underline mb-8"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back to home
        </Link>

        <h1 className="font-display text-4xl sm:text-5xl mb-6">About Alpine Roast Café</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-white/80 leading-relaxed mb-6">
            {site.about}
          </p>

          <h2 className="font-display text-2xl sm:text-3xl mt-12 mb-4">Our Story</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Founded in 2020 in the heart of Ljubljana, Alpine Roast Café was born from a passion for exceptional coffee and community. Our founders, inspired by Slovenia's rich café culture and the surrounding Alpine landscapes, set out to create a space where quality coffee meets warm hospitality.
          </p>
          <p className="text-white/70 leading-relaxed mb-4">
            We carefully select single-origin beans from ethical farms around the world, with a focus on Ethiopian, Colombian, and Central American varieties. Each batch is roasted locally in small quantities to ensure peak freshness and flavor.
          </p>

          <h2 className="font-display text-2xl sm:text-3xl mt-12 mb-4">Our Coffee Philosophy</h2>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><strong className="text-white">Single-Origin Excellence:</strong> We believe in showcasing the unique terroir of each coffee-growing region</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><strong className="text-white">Ethical Sourcing:</strong> Direct trade relationships with farmers who share our commitment to quality and sustainability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><strong className="text-white">Expert Craftsmanship:</strong> Our baristas are trained in specialty coffee preparation, from espresso extraction to latte art</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">✓</span>
              <span><strong className="text-white">Community Focus:</strong> We're more than a café — we're a gathering place for coffee lovers, remote workers, and neighbors</span>
            </li>
          </ul>

          <h2 className="font-display text-2xl sm:text-3xl mt-12 mb-4">Visit Us</h2>
          <div className="bg-card/80 rounded-xl p-6 border border-white/10">
            <p className="text-white/90 mb-4">
              <strong>Location:</strong> {site.address}
            </p>
            <p className="text-white/70 mb-2">
              We're conveniently located in Ljubljana's city center, just 5 minutes walk from the main train station. The bus stop "Miklošičeva" is right outside with routes 1, 3, 5, and 6.
            </p>
            <p className="text-white/70 mb-4">
              <strong>Nearby landmarks:</strong> Ljubljana Train Station (5 min), Prešeren Square (10 min), Ljubljana Castle (15 min)
            </p>
            <p className="text-white/90">
              <strong>Accessibility:</strong> {site.locationContext.accessibility}
            </p>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-block rounded-md bg-accent px-6 py-3 font-medium text-white shadow-glow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
