import { render, screen } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders headline and CTA', () => {
    render(<Hero title="Alpine Roast Café" tagline="Craft coffee" ctaText="Say hello" />)
    expect(screen.getByRole('heading', { level: 1, name: /alpine roast/i })).toBeInTheDocument()
    const cta = screen.getByRole('link', { name: /say hello/i })
    expect(cta).toHaveAttribute('href', '#contact')
  })
})

