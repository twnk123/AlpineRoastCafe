import { describe, it, expect } from 'vitest'
import { contactSchema } from '../lib/validators'

describe('contact validation', () => {
  it('accepts valid data', () => {
    const data = { name: 'Ana', email: 'ana@example.com', message: 'Hello from Ljubljana!' }
    const parsed = contactSchema.safeParse(data)
    expect(parsed.success).toBe(true)
  })

  it('rejects invalid data', () => {
    const data = { name: 'A', email: 'not-an-email', message: 'Hi' }
    const parsed = contactSchema.safeParse(data)
    expect(parsed.success).toBe(false)
  })
})
