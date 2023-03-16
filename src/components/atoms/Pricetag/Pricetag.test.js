import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultPricetag } from './Pricetag.stories'

const testID = "Pricetag-" + Math.floor(Math.random()*90000) + 10000

describe("Pricetag", () => {

    it("Can render Pricetag", () => {
        render(<DefaultPricetag testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})