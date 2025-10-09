"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

type HeroProps = {
  title: string
  tagline: string
  ctaText: string
}

export default function Hero({ title, tagline, ctaText }: HeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Soft gradients for a Framer-like depth */}
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div className="container-px mx-auto py-16 sm:py-24">
        <div className="grid items-center gap-10 sm:grid-cols-2">
          <div className="flex flex-col items-center text-center sm:items-center sm:text-center">
            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
              className="mt-4 max-w-prose text-white/80"
            >
              {tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: 0.1 }}
              className="mt-8 flex flex-wrap gap-3 justify-center"
            >
              <a href="#contact" className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-white shadow-glow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">
                {ctaText}
              </a>
              <a href="#menu" className="rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60">
                Explore menu
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/[.06] to-white/[.02] p-1 shadow-soft overflow-hidden"
            aria-hidden
          >
            <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(60%_80%_at_10%_10%,rgba(255,255,255,0.08),transparent),radial-gradient(40%_60%_at_90%_90%,rgba(92,61,46,0.25),transparent)]" />
            <div className="relative h-full w-full rounded-xl border border-white/10 bg-black/30 backdrop-blur overflow-hidden">
              {/* High-quality cafe interior from Unsplash */}
              <Image
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=1200&q=80"
                alt="Cozy Alpine Roast Café interior with warm lighting"
                fill
                priority
                className="object-cover opacity-40"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
