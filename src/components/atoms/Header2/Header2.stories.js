import React from 'react'
import Header2 from './Header2'

/// TODO: fix story entries
const Header2Meta = {
    title: "atoms/Header2",
    component: Header2,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Header2-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Header2 {...args} />

export const DefaultHeader2 = Template.bind({})
DefaultHeader2.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default Header2Meta