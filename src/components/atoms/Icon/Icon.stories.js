import React from 'react'
import Icon from './Icon'

/// TODO: fix story entries
const IconMeta = {
    title: "atoms/Icon",
    component: Icon,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Icon-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Icon {...args} />

export const DefaultIcon = Template.bind({})
DefaultIcon.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default IconMeta