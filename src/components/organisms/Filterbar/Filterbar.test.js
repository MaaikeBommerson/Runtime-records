import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultFilterbar } from './Filterbar.stories'

const testID = "Filterbar-" + Math.floor(Math.random()*90000) + 10000

describe("Filterbar", () => {

    it("Can render Filterbar", () => {
        render(<DefaultFilterbar testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})