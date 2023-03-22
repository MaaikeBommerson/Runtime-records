import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSearchbutton } from './Searchbutton.stories'

const testID = "Searchbutton-" + Math.floor(Math.random()*90000) + 10000

describe("Searchbutton", () => {

    it("Can render Searchbutton", () => {
        render(<DefaultSearchbutton testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})