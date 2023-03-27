import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultProducttile } from './Producttile.stories'

const testID = "Producttile-" + Math.floor(Math.random()*90000) + 10000

describe("Producttile", () => {

    it("Can render Producttile", () => {
        render(<DefaultProducttile testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})