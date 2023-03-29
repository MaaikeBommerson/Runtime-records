import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultHeader4 } from './Header4.stories'

const testID = "Header4-" + Math.floor(Math.random()*90000) + 10000

describe("Header4", () => {

    it("Can render Header4", () => {
        render(<DefaultHeader4 testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})