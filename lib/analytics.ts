export function track(event: string, data?: Record<string, any>) {
  if (process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'true') return
  // Placeholder for analytics. Example: window.gtag?.('event', event, data)
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('[analytics]', event, data)
  }
}

