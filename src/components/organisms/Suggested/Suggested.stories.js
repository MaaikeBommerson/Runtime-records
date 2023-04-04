import React from 'react'
import Suggested from './Suggested'

/// TODO: fix story entries
const SuggestedMeta = {
    title: "organisms/Suggested",
    component: Suggested,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Suggested-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Suggested {...args} />

export const DefaultSuggested = Template.bind({})
DefaultSuggested.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default SuggestedMeta