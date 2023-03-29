import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultProductsection } from './Productsection.stories'

const testID = "Productsection-" + Math.floor(Math.random()*90000) + 10000

describe("Productsection", () => {

    it("Can render Productsection", () => {
        render(<DefaultProductsection testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})