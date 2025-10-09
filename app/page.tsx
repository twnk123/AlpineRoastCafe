import site from '@/content/site.json'
import Hero from '@/components/Hero'
import MenuHighlights from '@/components/MenuHighlights'
import Gallery from '@/components/Gallery'
import HoursLocation from '@/components/HoursLocation'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
      {/* Schema.org FAQ structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": site.faqs?.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />

      {/* Review Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(site.reviews?.map((review) => ({
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "CoffeeShop",
              "name": "Alpine Roast Café"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": review.author
            },
            "reviewBody": review.quote
          })))
        }}
      />

      <Hero
        title={site.name}
        tagline={site.tagline}
        ctaText={site.ctaText}
      />

      <section id="menu" className="container-px mx-auto pt-20 sm:pt-28 md:pt-32">
        <MenuHighlights items={site.menu} />
      </section>

      <section id="gallery" className="container-px mx-auto pt-20 sm:pt-28 md:pt-32">
        <Gallery />
      </section>

      <section id="hours" className="container-px mx-auto pt-20 sm:pt-28 md:pt-32">
        <HoursLocation address={site.address} hours={site.hours} mapUrl={site.mapUrl} />
      </section>

      <section id="faq" className="container-px mx-auto pt-20 sm:pt-28 md:pt-32">
        <FAQ faqs={site.faqs} />
      </section>

      <section id="contact" className="container-px mx-auto pt-20 sm:pt-28 md:pt-32 pb-24 sm:pb-28">
        <ContactForm ctaText={site.ctaText} />
      </section>

      <Footer social={site.social} />
    </>
  )
}


