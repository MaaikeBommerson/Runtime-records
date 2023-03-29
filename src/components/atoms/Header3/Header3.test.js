import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultHeader3 } from './Header3.stories'

const testID = "Header3-" + Math.floor(Math.random()*90000) + 10000

describe("Header3", () => {

    it("Can render Header3", () => {
        render(<DefaultHeader3 testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})