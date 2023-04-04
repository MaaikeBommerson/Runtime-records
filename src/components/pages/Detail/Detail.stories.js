import React from 'react'
import Detail from './Detail'

/// TODO: fix story entries
const DetailMeta = {
    title: "pages/Detail",
    component: Detail,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Detail-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Detail {...args} />

export const DefaultDetail = Template.bind({})
DefaultDetail.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default DetailMeta