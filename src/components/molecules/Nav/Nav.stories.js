import React from 'react'
import Nav from './Nav'

/// TODO: fix story entries
const NavMeta = {
    title: "molecules/Nav",
    component: Nav,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Nav-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Nav {...args} />

export const DefaultNav = Template.bind({})
DefaultNav.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default NavMeta