import { render, screen } from '@testing-library/react'
import MenuHighlights from '@/components/MenuHighlights'

const items = [
  { name: 'Espresso', desc: 'Single origin', price: '€2.20' },
  { name: 'Cappuccino', desc: 'Velvety microfoam', price: '€2.80' },
  { name: 'Cold Brew', desc: '12h steep', price: '€3.50' },
]

describe('MenuHighlights', () => {
  it('renders cards for items', () => {
    render(<MenuHighlights items={items} />)
    items.forEach((it) => {
      expect(screen.getByText(it.name)).toBeInTheDocument()
      expect(screen.getByText(it.price)).toBeInTheDocument()
    })
  })
})

