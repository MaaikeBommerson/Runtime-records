import React from 'react'
import Socialblock from './Socialblock'

/// TODO: fix story entries
const SocialblockMeta = {
    title: "molecules/Socialblock",
    component: Socialblock,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Socialblock-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Socialblock {...args} />

export const DefaultSocialblock = Template.bind({})
DefaultSocialblock.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default SocialblockMeta