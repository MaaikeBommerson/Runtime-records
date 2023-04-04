import React from 'react'
import Home from './Home'

/// TODO: fix story entries
const HomeMeta = {
    title: "pages/Home",
    component: Home,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Home-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Home {...args} />

export const DefaultHome = Template.bind({})
DefaultHome.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default HomeMeta