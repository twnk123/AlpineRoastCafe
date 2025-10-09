type Social = { instagram?: string; facebook?: string; tiktok?: string }

const SocialIcons = {
  Instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Facebook: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  TikTok: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
    </svg>
  ),
}

export default function Footer({ social }: { social: Social }) {
  const links = [
    { name: 'Instagram' as const, url: social?.instagram },
    { name: 'Facebook' as const, url: social?.facebook },
    { name: 'TikTok' as const, url: social?.tiktok },
  ].filter((link) => link.url && link.url !== '#')

  return (
    <footer className="mt-20 border-t border-border/60">
      <div className="container-px mx-auto py-10 text-sm text-white/60">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Alpine Roast Café · Ljubljana, Slovenia</p>
          {links.length > 0 && (
            <div className="flex gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={link.name}
                  className="flex items-center gap-2 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded p-1"
                >
                  {SocialIcons[link.name]}
                  <span className="hidden sm:inline">{link.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}

