import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultHome } from './Home.stories'

const testID = "Home-" + Math.floor(Math.random()*90000) + 10000

describe("Home", () => {

    it("Can render Home", () => {
        render(<DefaultHome testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})