import React from 'react'
import Image from './Image'

/// TODO: fix story entries
const ImageMeta = {
    title: "atoms/Image",
    component: Image,
    argTypes: {
        testID: { table: { disable: true } },
        size: { name: "Size" },
        type: { name: "Type"}
    }
}

const testID = "Image-" + Math.floor(Math.random() * 90000) + 10000
const Template = (args) => <Image {...args} />

export const DefaultImage = Template.bind({})
DefaultImage.args = {
    testID: testID,
    size: "medium",
    type: "regular"
}

export default ImageMeta