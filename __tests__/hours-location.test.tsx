import { render, screen } from '@testing-library/react'
import HoursLocation from '@/components/HoursLocation'

describe('Hours & Location', () => {
  it('renders address link with target', () => {
    render(
      <HoursLocation
        address="Miklošičeva cesta 3, Ljubljana"
        hours={[{ days: 'Mon–Fri', time: '07:30–19:00' }]}
        mapUrl="https://maps.google.com/?q=Alpine%20Roast%20Cafe%20Ljubljana"
      />
    )
    const link = screen.getByRole('link', { name: /miklošičeva/i })
    expect(link).toHaveAttribute('href', expect.stringContaining('http'))
  })
})

