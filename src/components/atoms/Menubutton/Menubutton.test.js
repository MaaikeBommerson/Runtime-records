import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenubutton } from './Menubutton.stories'

const testID = "Menubutton-" + Math.floor(Math.random()*90000) + 10000

describe("Menubutton", () => {

    it("Can render Menubutton", () => {
        render(<DefaultMenubutton testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})