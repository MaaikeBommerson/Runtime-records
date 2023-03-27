import React from 'react'
import Producttile from './Producttile'

/// TODO: fix story entries
const ProducttileMeta = {
    title: "molecules/Producttile",
    component: Producttile,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Producttile-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Producttile {...args} />

export const DefaultProducttile = Template.bind({})
DefaultProducttile.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default ProducttileMeta