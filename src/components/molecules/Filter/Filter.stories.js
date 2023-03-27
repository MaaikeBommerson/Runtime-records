import React from 'react'
import Filter from './Filter'

/// TODO: fix story entries
const FilterMeta = {
    title: "molecules/Filter",
    component: Filter,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Filter-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Filter {...args} />

export const DefaultFilter = Template.bind({})
DefaultFilter.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default FilterMeta