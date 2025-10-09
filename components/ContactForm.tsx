"use client"
import { useState, useRef } from 'react'
import { contactSchema, type ContactFormData } from '@/lib/validators'

export default function ContactForm({ ctaText }: { ctaText: string }) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string[]>>({})
  const liveRef = useRef<HTMLDivElement>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrors({})

    const form = new FormData(e.currentTarget)
    const data: ContactFormData = {
      name: String(form.get('name') || '').trim(),
      email: String(form.get('email') || '').trim(),
      message: String(form.get('message') || '').trim(),
    }

    // Client-side validation
    const parsed = contactSchema.safeParse(data)
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors
      setErrors(Object.fromEntries(Object.entries(flat).map(([k, v]) => [k, v || []])))
      setStatus('error')
      liveRef.current?.focus()
      return
    }

    // Submit to API
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data),
      })

      const result = await res.json()
      if (!res.ok || !result.ok) throw new Error('Request failed')

      setStatus('success')
      e.currentTarget.reset()
      liveRef.current?.focus()
    } catch {
      setStatus('error')
      setErrors({ form: ['Failed to send message. Please try again.'] })
      liveRef.current?.focus()
    }
  }

  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="h2 text-center">Get in touch</h2>
      <p className="mt-2 text-white/70 mb-6">Have a question or want to learn more? Drop us a message and we'll get back to you soon.</p>

      {/* Visible success message */}
      {status === 'success' && (
        <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-400">
          <p className="font-medium">✓ Message sent successfully!</p>
          <p className="mt-1 text-sm text-green-400/80">Thanks for reaching out. We'll get back to you soon.</p>
        </div>
      )}

      <form className="form mx-auto" onSubmit={onSubmit} noValidate>
        <div
          ref={liveRef}
          tabIndex={-1}
          role="status"
          aria-live="polite"
          className="sr-only"
        >
          {status === 'success' && 'Thanks! Your message has been sent.'}
          {status === 'error' && 'Please fix the form errors and try again.'}
        </div>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" autoComplete="name" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'err-name' : undefined} />
          {errors.name && <p id="err-name" className="field-error">{errors.name[0]}</p>}
        </div>
        <div className="form-row">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'err-email' : undefined} />
          {errors.email && <p id="err-email" className="field-error">{errors.email[0]}</p>}
        </div>
        <div className="form-row">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={6} required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'err-message' : undefined} />
          {errors.message && <p id="err-message" className="field-error">{errors.message[0]}</p>}
        </div>
        <div className="form-actions">
          <button className="btn" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : ctaText}</button>
        </div>
      </form>
    </div>
  )
}

