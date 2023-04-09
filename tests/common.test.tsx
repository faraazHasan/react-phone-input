import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { PhoneInput } from '../src/components/PhoneInput'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(<PhoneInput value={0} onchange={(n) => console.log(n)} />)
  })
})
