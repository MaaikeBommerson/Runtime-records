import React from 'react'
import Banner from './Banner'

/// TODO: fix story entries
const BannerMeta = {
    title: "molecules/Banner",
    component: Banner,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Banner-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Banner {...args} />

export const DefaultBanner = Template.bind({})
DefaultBanner.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default BannerMeta