import React from 'react'
import Subtitle from './Subtitle'

/// TODO: fix story entries
const SubtitleMeta = {
    title: "atoms/Subtitle",
    component: Subtitle,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Subtitle-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Subtitle {...args} />

export const DefaultSubtitle = Template.bind({})
DefaultSubtitle.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default SubtitleMeta