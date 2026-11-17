import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { getAllCaseStudies } from '@/controller/casestudies.controller'
export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',

  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'industry', 'status', 'updatedAt'],
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
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
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
      handler: getAllCaseStudies,
    },
  ],
}
