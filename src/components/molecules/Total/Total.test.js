import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultTotal } from './Total.stories'

const testID = "Total-" + Math.floor(Math.random()*90000) + 10000

describe("Total", () => {

    it("Can render Total", () => {
        render(<DefaultTotal testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})