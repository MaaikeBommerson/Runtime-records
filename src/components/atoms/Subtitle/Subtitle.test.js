import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSubtitle } from './Subtitle.stories'

const testID = "Subtitle-" + Math.floor(Math.random()*90000) + 10000

describe("Subtitle", () => {

    it("Can render Subtitle", () => {
        render(<DefaultSubtitle testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})