import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultHeader2 } from './Header2.stories'

const testID = "Header2-" + Math.floor(Math.random()*90000) + 10000

describe("Header2", () => {

    it("Can render Header2", () => {
        render(<DefaultHeader2 testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})