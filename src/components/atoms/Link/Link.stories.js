import React from 'react'
import Link from './Link'

/// TODO: fix story entries
const LinkMeta = {
    title: "atoms/Link",
    component: Link,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Link-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Link {...args} />

export const DefaultLink = Template.bind({})
DefaultLink.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default LinkMeta