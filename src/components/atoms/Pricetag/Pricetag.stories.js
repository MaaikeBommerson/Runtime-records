import React from 'react'
import Pricetag from './Pricetag'

/// TODO: fix story entries
const PricetagMeta = {
    title: "atoms/Pricetag",
    component: Pricetag,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Pricetag-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Pricetag {...args} />

export const DefaultPricetag = Template.bind({})
DefaultPricetag.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default PricetagMeta