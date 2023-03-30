import React from 'react'
import Menubutton from './Menubutton'

/// TODO: fix story entries
const MenubuttonMeta = {
    title: "atoms/Menubutton",
    component: Menubutton,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Menubutton-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Menubutton {...args} />

export const DefaultMenubutton = Template.bind({})
DefaultMenubutton.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default MenubuttonMeta