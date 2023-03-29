import React from 'react'
import Productsection from './Productsection'

/// TODO: fix story entries
const ProductsectionMeta = {
    title: "organisms/Productsection",
    component: Productsection,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Productsection-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Productsection {...args} />

export const DefaultProductsection = Template.bind({})
DefaultProductsection.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default ProductsectionMeta