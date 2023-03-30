import React from 'react'
import Filterbar from './Filterbar'

/// TODO: fix story entries
const FilterbarMeta = {
    title: "organisms/Filterbar",
    component: Filterbar,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Filterbar-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Filterbar {...args} />

export const DefaultFilterbar = Template.bind({})
DefaultFilterbar.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default FilterbarMeta