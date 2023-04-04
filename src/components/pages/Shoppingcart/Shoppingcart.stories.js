import React from 'react'
import Shoppingcart from './Shoppingcart'

/// TODO: fix story entries
const ShoppingcartMeta = {
    title: "pages/Shoppingcart",
    component: Shoppingcart,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Shoppingcart-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Shoppingcart {...args} />

export const DefaultShoppingcart = Template.bind({})
DefaultShoppingcart.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default ShoppingcartMeta