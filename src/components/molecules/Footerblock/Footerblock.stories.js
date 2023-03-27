import React from 'react'
import Footerblock from './Footerblock'

/// TODO: fix story entries
const FooterblockMeta = {
    title: "molecules/Footerblock",
    component: Footerblock,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Footerblock-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Footerblock {...args} />

export const DefaultFooterblock = Template.bind({})
DefaultFooterblock.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default FooterblockMeta