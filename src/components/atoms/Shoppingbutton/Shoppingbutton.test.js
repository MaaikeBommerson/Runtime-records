import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultShoppingbutton } from './Shoppingbutton.stories'

const testID = "Shoppingbutton-" + Math.floor(Math.random()*90000) + 10000

describe("Shoppingbutton", () => {

    it("Can render Shoppingbutton", () => {
        render(<DefaultShoppingbutton testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})