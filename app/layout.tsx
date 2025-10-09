import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'
import Link from 'next/link'
import { MotionConfig } from 'framer-motion'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
})
const space = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Alpine Roast Café — Best Specialty Coffee in Ljubljana | Craft Espresso & Latte',
    template: '%s — Alpine Roast Café',
  },
  description: 'Award-winning specialty coffee in Ljubljana, Slovenia. Handcrafted espresso, cappuccino, and pour-over. Open Mon-Fri 7:30-19:00. Located at Miklošičeva cesta 3, 5 min from train station. Free wifi, vegan options available.',
  keywords: ['coffee ljubljana', 'specialty coffee slovenia', 'best cafe ljubljana', 'craft coffee', 'espresso ljubljana', 'cappuccino', 'coffee shop near train station', 'ljubljana city center cafe', 'wifi cafe ljubljana', 'vegan coffee ljubljana'],
  authors: [{ name: 'Alpine Roast Café' }],
  openGraph: {
    title: 'Alpine Roast Café — Best Specialty Coffee in Ljubljana',
    description: 'Award-winning specialty coffee in the heart of Ljubljana. Single-origin beans, expert baristas, free wifi. Perfect for remote work or a quick espresso.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Alpine Roast Café',
    images: [{
      url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80',
      width: 1200,
      height: 630,
      alt: 'Cozy Alpine Roast Café interior with warm lighting',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpine Roast Café — Best Specialty Coffee in Ljubljana',
    description: 'Craft coffee, expert baristas, cozy atmosphere. Visit us in Ljubljana city center.',
    images: ['https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
  },
  other: {
    'business:contact_data:street_address': 'Miklošičeva cesta 3',
    'business:contact_data:locality': 'Ljubljana',
    'business:contact_data:country_name': 'Slovenia',
    'place:location:latitude': '46.0569',
    'place:location:longitude': '14.5058',
  }
}

export const viewport: Viewport = {
  themeColor: '#0b0b0b',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CoffeeShop",
              "name": "Alpine Roast Café",
              "image": "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80",
              "description": "Award-winning specialty coffee in Ljubljana, Slovenia. Handcrafted espresso, single-origin beans, expert baristas.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Miklošičeva cesta 3",
                "addressLocality": "Ljubljana",
                "addressCountry": "SI",
                "postalCode": "1000"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "46.0569",
                "longitude": "14.5058"
              },
              "url": "https://alpineroastcafe.com",
              "telephone": "+386-1-234-5678",
              "priceRange": "€€",
              "servesCuisine": ["Coffee", "Espresso", "Specialty Coffee"],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:30",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "08:00",
                  "closes": "18:00"
                }
              ],
              "amenityFeature": [
                { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
                { "@type": "LocationFeatureSpecification", "name": "Wheelchair Accessible", "value": true }
              ],
              "menu": "https://alpineroastcafe.com/#menu",
              "hasMenu": {
                "@type": "Menu",
                "hasMenuSection": {
                  "@type": "MenuSection",
                  "name": "Coffee Drinks",
                  "hasMenuItem": [
                    {
                      "@type": "MenuItem",
                      "name": "Espresso",
                      "description": "Single origin Ethiopian Yirgacheffe",
                      "offers": { "@type": "Offer", "price": "2.20", "priceCurrency": "EUR" }
                    },
                    {
                      "@type": "MenuItem",
                      "name": "Cappuccino",
                      "description": "Velvety microfoam with award-winning latte art",
                      "offers": { "@type": "Offer", "price": "2.80", "priceCurrency": "EUR" }
                    }
                  ]
                }
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${space.variable} font-sans`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <MotionConfig reducedMotion="user">
          <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-black/30">
            <nav className="container-px mx-auto flex h-14 items-center justify-between">
              <Link href="#" className="font-display text-lg tracking-tight">Alpine Roast <span className="text-accent">Café</span></Link>
              <div className="hidden sm:flex gap-6 text-sm text-white/80">
                <a href="/#menu" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded">Menu</a>
                <a href="/#gallery" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded">Gallery</a>
                <a href="/#hours" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded">Hours</a>
                <a href="/#faq" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded">FAQ</a>
                <Link href="/about" className="hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded">About</Link>
              </div>
              <a href="#contact" className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-white shadow-soft hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">Say hello</a>
            </nav>
          </header>
          <main id="main" className="relative">{children}</main>
        </MotionConfig>
      </body>
    </html>
  )
}
