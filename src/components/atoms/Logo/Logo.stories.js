import React from 'react'
import Logo from './Logo'

/// TODO: fix story entries
const LogoMeta = {
    title: "atoms/Logo",
    component: Logo,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Logo-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Logo {...args} />

export const DefaultLogo = Template.bind({})
DefaultLogo.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default LogoMeta