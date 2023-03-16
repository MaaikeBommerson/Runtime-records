import React from 'react'
import Shoppingbutton from './Shoppingbutton'

/// TODO: fix story entries
const ShoppingbuttonMeta = {
    title: "atoms/Shoppingbutton",
    component: Shoppingbutton,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Shoppingbutton-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Shoppingbutton {...args} />

export const DefaultShoppingbutton = Template.bind({})
DefaultShoppingbutton.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default ShoppingbuttonMeta