import React from 'react'
import Header1 from './Header1'

/// TODO: fix story entries
const Header1Meta = {
    title: "atoms/Header1",
    component: Header1,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Header1-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Header1 {...args} />

export const DefaultHeader1 = Template.bind({})
DefaultHeader1.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default Header1Meta