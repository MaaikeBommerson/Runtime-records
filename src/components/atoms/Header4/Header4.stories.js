import React from 'react'
import Header4 from './Header4'

/// TODO: fix story entries
const Header4Meta = {
    title: "atoms/Header4",
    component: Header4,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Header4-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Header4 {...args} />

export const DefaultHeader4 = Template.bind({})
DefaultHeader4.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default Header4Meta