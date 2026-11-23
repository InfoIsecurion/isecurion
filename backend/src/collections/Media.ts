import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',

  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['alt', 'filename', 'mimeType'],
  },

  access: {
    read: () => true,
    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'filename',
      type: 'text',
      required: true,
    },
    {
      name: 'mimeType',
      type: 'text',
      required: true,
    },

    {
      name: 'imageData',
      label: 'Image Data',
      type: 'textarea',
      required: true,
      validate: (value) => {
        if (typeof value !== 'string' || value.trim().length === 0) {
          return 'Please upload an image.'
        }

        const validPrefix = [
          'data:image/jpeg;base64,',
          'data:image/png;base64,',
          'data:image/webp;base64,',
          'data:image/gif;base64,',
        ]

        const hasValidPrefix = validPrefix.some((prefix) => value.startsWith(prefix))

        if (!hasValidPrefix) {
          return 'Please upload a valid JPG, PNG, WEBP or GIF image.'
        }

        return true
      },
      admin: {
        components: {
          Field: '/components/MediaBase64Field#MediaBase64Field',
        },
      },
    },
  ],
}
