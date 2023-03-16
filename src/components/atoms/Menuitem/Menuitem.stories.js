import React from 'react'
import Menuitem from './Menuitem'

/// TODO: fix story entries
const MenuitemMeta = {
    title: "atoms/Menuitem",
    component: Menuitem,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Menuitem-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Menuitem {...args} />

export const DefaultMenuitem = Template.bind({})
DefaultMenuitem.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default MenuitemMeta