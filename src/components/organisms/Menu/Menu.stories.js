import React from 'react'
import Menu from './Menu'

/// TODO: fix story entries
const MenuMeta = {
    title: "organisms/Menu",
    component: Menu,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Menu-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Menu {...args} />

export const DefaultMenu = Template.bind({})
DefaultMenu.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default MenuMeta