import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultLogo } from './Logo.stories'

const testID = "Logo-" + Math.floor(Math.random()*90000) + 10000

describe("Logo", () => {

    it("Can render Logo", () => {
        render(<DefaultLogo testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})