import { render, screen } from '@testing-library/react'
import Gallery from '@/components/Gallery'

describe('Gallery', () => {
  it('renders six images with alt text', () => {
    render(<Gallery />)
    const imgs = screen.getAllByRole('img')
    expect(imgs.length).toBe(6)
    imgs.forEach((img, i) => {
      expect(img).toHaveAttribute('alt', expect.stringContaining(`image ${i + 1}`))
    })
  })
})

