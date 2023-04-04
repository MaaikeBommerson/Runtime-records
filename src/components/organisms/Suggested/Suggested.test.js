import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSuggested } from './Suggested.stories'

const testID = "Suggested-" + Math.floor(Math.random()*90000) + 10000

describe("Suggested", () => {

    it("Can render Suggested", () => {
        render(<DefaultSuggested testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})