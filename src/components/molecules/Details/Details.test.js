import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultDetails } from './Details.stories'

const testID = "Details-" + Math.floor(Math.random()*90000) + 10000

describe("Details", () => {

    it("Can render Details", () => {
        render(<DefaultDetails testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})