export default {
    title: 'Profile Link',
    name: 'profileLink',
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
        },
        {
            title: 'Link',
            name: 'link',
            type: 'url'
        }
    ],
    preview: {
        select: {
            title: 'name',
            media: 'icon.image'
        },
    }
}