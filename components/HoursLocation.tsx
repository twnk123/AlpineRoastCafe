type Hours = { days: string; time: string }

export default function HoursLocation({ address, hours, mapUrl }: { address: string; hours: Hours[]; mapUrl: string }) {
  const embedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <div className="grid gap-8 sm:grid-cols-2">
      <div>
        <h2 className="font-display text-2xl sm:text-3xl">Hours & Location</h2>

        {/* Hours listing with edge case handling */}
        {hours && hours.length > 0 ? (
          <dl className="mt-4 space-y-2 text-white/80">
            {hours.map((h, idx) => (
              <div key={`${h.days}-${idx}`} className="flex items-center justify-between border-b border-white/10 py-2">
                <dt className="font-medium">{h.days}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="mt-4 text-white/60">Hours available upon request</p>
        )}

        {/* Address link */}
        {address && (
          <p className="mt-6">
            <a
              href={mapUrl || `https://maps.google.com/?q=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer noopener"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded transition-colors"
            >
              {address}
            </a>
          </p>
        )}
      </div>

      {/* Map embed */}
      <div role="region" aria-label="Map" className="rounded-xl border border-white/10 overflow-hidden shadow-soft min-h-[256px] bg-muted">
        <iframe
          title={`Map to ${address || 'location'}`}
          src={embedSrc}
          width="600"
          height="450"
          className="h-64 w-full sm:h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

