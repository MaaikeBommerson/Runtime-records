import React from 'react'
import Label from './Label'

/// TODO: fix story entries
const LabelMeta = {
    title: "atoms/Label",
    component: Label,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Label-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Label {...args} />

export const DefaultLabel = Template.bind({})
DefaultLabel.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default LabelMeta