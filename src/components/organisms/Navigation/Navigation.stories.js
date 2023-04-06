import React from 'react'
import Navigation from './Navigation'

/// TODO: fix story entries
const NavigationMeta = {
    title: "organisms/Navigation",
    component: Navigation,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Navigation-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Navigation {...args} />

export const DefaultNavigation = Template.bind({})
DefaultNavigation.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default NavigationMeta