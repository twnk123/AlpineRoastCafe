type FAQItem = {
  question: string
  answer: string
}

export default function FAQ({ faqs }: { faqs: FAQItem[] }) {
  if (!faqs || faqs.length === 0) return null

  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-display text-2xl sm:text-3xl mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4 text-left">
        {faqs.map((faq, idx) => (
          <details
            key={idx}
            className="group rounded-xl border border-white/10 bg-card/80 p-4 shadow-soft backdrop-blur hover:border-white/20 transition-colors"
          >
            <summary className="cursor-pointer font-medium text-white/90 hover:text-white list-none flex items-center justify-between">
              <span>{faq.question}</span>
              <span className="ml-4 transition-transform group-open:rotate-180">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  )
}
