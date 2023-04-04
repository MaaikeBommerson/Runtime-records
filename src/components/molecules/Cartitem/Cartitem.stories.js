import React from 'react'
import Cartitem from './Cartitem'

/// TODO: fix story entries
const CartitemMeta = {
    title: "molecules/Cartitem",
    component: Cartitem,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Cartitem-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Cartitem {...args} />

export const DefaultCartitem = Template.bind({})
DefaultCartitem.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default CartitemMeta