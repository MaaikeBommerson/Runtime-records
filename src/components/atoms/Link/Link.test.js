import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultLink } from './Link.stories'

const testID = "Link-" + Math.floor(Math.random()*90000) + 10000

describe("Link", () => {

    it("Can render Link", () => {
        render(<DefaultLink testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})