export default {
    title: 'Image',
    name: 'img',
    type: 'object',
    options: {
        hotspot: true // <-- Defaults to false
    },
    fields: [
        {
            title: 'Image',
            name: 'image',
            type: 'image',
        },
        {
            title: 'alt',
            name: 'alt',
            type: 'string',
        }
    ]
}