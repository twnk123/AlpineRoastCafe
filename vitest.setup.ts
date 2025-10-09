import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

// Mock next/image to a basic img for tests
vi.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => React.createElement('img', props),
}))

