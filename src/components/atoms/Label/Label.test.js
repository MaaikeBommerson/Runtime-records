import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultLabel } from './Label.stories'

const testID = "Label-" + Math.floor(Math.random()*90000) + 10000

describe("Label", () => {

    it("Can render Label", () => {
        render(<DefaultLabel testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})