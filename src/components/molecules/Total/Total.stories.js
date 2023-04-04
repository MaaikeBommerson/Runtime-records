import React from 'react'
import Total from './Total'

/// TODO: fix story entries
const TotalMeta = {
    title: "molecules/Total",
    component: Total,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Total-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Total {...args} />

export const DefaultTotal = Template.bind({})
DefaultTotal.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default TotalMeta