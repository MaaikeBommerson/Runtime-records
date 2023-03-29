import React from 'react'
import { render, screen } from "@testing-library/react"

/// Preferably each story instead of actual object
/// TODO: fix test based upon story entries
import { DefaultSocialblock } from './Socialblock.stories'

const testID = "Socialblock-" + Math.floor(Math.random()*90000) + 10000

describe("Socialblock", () => {

    it("Can render Socialblock", () => {
        render(<DefaultSocialblock testID={ testID } />)
        let defaultCreated = screen.getByTestId(testID)
        expect(defaultCreated).not.toBeNull()
    })

})