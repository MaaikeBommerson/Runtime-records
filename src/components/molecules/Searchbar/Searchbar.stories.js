import React from 'react'
import Searchbar from './Searchbar'

/// TODO: fix story entries
const SearchbarMeta = {
    title: "molecules/Searchbar",
    component: Searchbar,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Searchbar-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Searchbar {...args} />

export const DefaultSearchbar = Template.bind({})
DefaultSearchbar.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default SearchbarMeta