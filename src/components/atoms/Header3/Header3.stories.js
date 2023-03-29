import React from 'react'
import Header3 from './Header3'

/// TODO: fix story entries
const Header3Meta = {
    title: "atoms/Header3",
    component: Header3,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Header3-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Header3 {...args} />

export const DefaultHeader3 = Template.bind({})
DefaultHeader3.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default Header3Meta