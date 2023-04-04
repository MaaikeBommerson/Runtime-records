import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultCartitem } from './Cartitem.stories'

const testID = "Cartitem-" + Math.floor(Math.random()*90000) + 10000

describe("Cartitem", () => {

    it("Can render Cartitem", () => {
        render(<DefaultCartitem testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})