import React from 'react'
import Iconrow from './Iconrow'

/// TODO: fix story entries
const IconrowMeta = {
    title: "atoms/Iconrow",
    component: Iconrow,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Iconrow-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Iconrow {...args} />

export const DefaultIconrow = Template.bind({})
DefaultIconrow.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default IconrowMeta