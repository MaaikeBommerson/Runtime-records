import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultNav } from './Nav.stories'

const testID = "Nav-" + Math.floor(Math.random()*90000) + 10000

describe("Nav", () => {

    it("Can render Nav", () => {
        render(<DefaultNav testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})