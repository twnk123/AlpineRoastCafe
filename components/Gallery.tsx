import Image from 'next/image'

const images = [
  { src: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80', alt: 'Perfect espresso shot in morning sunlight' },
  { src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80', alt: 'Professional coffee brewing equipment and setup' },
  { src: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=800&q=80', alt: 'Cappuccino with beautiful latte art heart design' },
  { src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&q=80', alt: 'Warm and inviting café interior atmosphere' },
  { src: 'https://images.unsplash.com/photo-1507914372368-b2b085b925a1?w=800&q=80', alt: 'Skilled barista carefully crafting coffee' },
  { src: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=80', alt: 'Freshly roasted coffee beans closeup' },
]

export default function Gallery() {
  if (!images || images.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-white/60">Gallery images coming soon...</p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl mb-6">Gallery</h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((img, idx) => (
          <div key={`gallery-${idx}`} className="relative overflow-hidden rounded-lg border border-white/10 bg-muted aspect-[4/3]">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

