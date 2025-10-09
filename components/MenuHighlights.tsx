"use client"
import { motion } from 'framer-motion'

type Item = { name: string; desc: string; price: string }

export default function MenuHighlights({ items }: { items: Item[] }) {
  // Edge case: no items
  if (!items || items.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-white/60">Menu items coming soon...</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl mb-6">Menu Highlights</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <motion.article
            key={`${item.name}-${i}`}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: Math.min(i * 0.03, 0.3), ease: 'easeOut' }}
            className="group rounded-xl border border-white/10 bg-card/80 p-4 shadow-soft backdrop-blur hover:border-white/20 transition-colors"
          >
            <header className="flex items-center justify-between gap-3">
              <h3 className="font-medium tracking-tight">{item.name}</h3>
              <span className="rounded bg-white/10 px-2 py-0.5 text-sm text-white/80 whitespace-nowrap">{item.price}</span>
            </header>
            <p className="mt-2 text-sm text-white/70">{item.desc}</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
