import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validators'

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // Server-side validation
    const parsed = contactSchema.safeParse(data)
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: 'Invalid data' }, { status: 400 })
    }

    // Log in development
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.log('📧 CONTACT_FORM:', parsed.data)
    }

    // TODO: Add email service integration here (SendGrid, Resend, etc.)

    return NextResponse.json({ ok: true })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Contact form error:', error)
    return NextResponse.json({ ok: false, error: 'Server error' }, { status: 500 })
  }
}
