import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultMenuitem } from './Menuitem.stories'

const testID = "Menuitem-" + Math.floor(Math.random()*90000) + 10000

describe("Menuitem", () => {

    it("Can render Menuitem", () => {
        render(<DefaultMenuitem testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})