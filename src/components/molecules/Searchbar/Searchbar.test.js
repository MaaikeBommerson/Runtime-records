import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSearchbar } from './Searchbar.stories'

const testID = "Searchbar-" + Math.floor(Math.random()*90000) + 10000

describe("Searchbar", () => {

    it("Can render Searchbar", () => {
        render(<DefaultSearchbar testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})