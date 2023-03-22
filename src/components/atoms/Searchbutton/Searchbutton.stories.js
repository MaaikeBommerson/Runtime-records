import React from 'react'
import Searchbutton from './Searchbutton'

/// TODO: fix story entries
const SearchbuttonMeta = {
    title: "atoms/Searchbutton",
    component: Searchbutton,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Searchbutton-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Searchbutton {...args} />

export const DefaultSearchbutton = Template.bind({})
DefaultSearchbutton.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default SearchbuttonMeta