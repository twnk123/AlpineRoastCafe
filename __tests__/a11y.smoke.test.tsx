import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { axe, toHaveNoViolations } from 'jest-axe'
import Page from '@/app/page'

expect.extend(toHaveNoViolations)

describe('Accessibility smoke', () => {
  it('renders Page with no critical a11y violations', async () => {
    const { container } = render(<Page />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
