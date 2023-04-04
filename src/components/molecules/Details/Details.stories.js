import React from 'react'
import Details from './Details'

/// TODO: fix story entries
const DetailsMeta = {
    title: "molecules/Details",
    component: Details,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Details-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Details {...args} />

export const DefaultDetails = Template.bind({})
DefaultDetails.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default DetailsMeta