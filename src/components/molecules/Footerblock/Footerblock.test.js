import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultFooterblock } from './Footerblock.stories'

const testID = "Footerblock-" + Math.floor(Math.random()*90000) + 10000

describe("Footerblock", () => {

    it("Can render Footerblock", () => {
        render(<DefaultFooterblock testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})