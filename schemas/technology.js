export default {
    title: 'Technology',
    name: 'technology',
    type: 'document',
    fields: [
        {
            title: 'name',
            name: 'name',
            type: 'string',
        },
        {
            title: 'Tcon',
            name: 'icon',
            type: 'img',
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'icon.image'
        },
    }
}