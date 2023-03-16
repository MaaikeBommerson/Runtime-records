import React from 'react'
import Button from './Button'

/// TODO: fix story entries
const ButtonMeta = {
    title: "atoms/Button",
    component: Button,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Button-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Button {...args} />

export const DefaultButton = Template.bind({})
DefaultButton.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default ButtonMeta