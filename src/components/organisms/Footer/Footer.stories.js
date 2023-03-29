import React from 'react'
import Footer from './Footer'

/// TODO: fix story entries
const FooterMeta = {
    title: "organisms/Footer",
    component: Footer,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Footer-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Footer {...args} />

export const DefaultFooter = Template.bind({})
DefaultFooter.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default FooterMeta