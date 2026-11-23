import { getAllblogs } from '@/controller/blog.controller'
import type { CollectionConfig } from 'payload'

export const Blog: CollectionConfig = {
  slug: 'blog',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'updatedAt'],
  },

  access: {
    read: ({ req }) => {
      if (req.user) {
        return true
      }

      return {
        status: {
          equals: 'published',
        },
      }
    },

    create: ({ req }) => Boolean(req.user),
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'featuredImage',
      type: 'relationship',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      required: true,
      options: [
        { label: 'Draft', value: 'draft' },
        { label: 'Published', value: 'published' },
      ],
    },
  ],

  endpoints: [
    {
      path: '/get-all',
      method: 'get',
      handler: getAllblogs,
    },
  ],
}
