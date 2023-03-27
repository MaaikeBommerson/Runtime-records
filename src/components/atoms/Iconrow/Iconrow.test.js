import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultIconrow } from './Iconrow.stories'

const testID = "Iconrow-" + Math.floor(Math.random()*90000) + 10000

describe("Iconrow", () => {

    it("Can render Iconrow", () => {
        render(<DefaultIconrow testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})