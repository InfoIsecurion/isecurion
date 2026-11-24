import type { CollectionConfig } from 'payload'
import { getAllCaseStudies } from '@/controller/casestudies.controller'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',

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
    // this is the card details
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'carddescription',
      type: 'text',
      required: true,
      label: 'carddescription',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'category',
      type: 'text',
      required: true,
      label: 'Case Study Category',
      admin: {
        description: 'Example: COMPLIANCE AUDIT, RED TEAM, CLOUD',
      },
    },
    {
      name: 'featuredImage',
      type: 'relationship',
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

    // hero section
    {
      name: 'heroEyebrow',
      type: 'text',
      required: true,
      label: 'Hero Eyebrow',
      admin: {
        description: 'Example: Technical Research · Windows Internals',
      },
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'hero section heading',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Case Study Description',
    },
    {
      name: 'heroHighlights',
      label: 'Hero Highlights',
      type: 'array',
      maxRows: 4,
      admin: {
        description: 'Pills shown under the hero description',
      },
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'icon',
          type: 'text',
          required: true,
          admin: {
            description: 'Iconify name, e.g. mdi:microsoft-windows',
          },
        },
      ],
    },
    {
      name: 'heroTemplate',
      type: 'select',
      label: 'Hero Section Template',
      defaultValue: 'template1',
      required: true,
      options: [
        { label: 'Hero Template 1', value: 'template1' },
        { label: 'Hero Template 2', value: 'template2' },
        { label: 'Hero Template 3', value: 'template3' },
        { label: 'Hero Template 4', value: 'template4' },
        { label: 'Hero Template 5', value: 'template5' },
        { label: 'Hero Template 6', value: 'template6' },
      ],
    },
    // agenda
    {
      name: 'agenda',
      type: 'array',
      label: 'Agenda',
      fields: [
        {
          name: 'number',
          type: 'text',
          required: true,
          label: 'Agenda Number',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
          label: 'Agenda Title',
        },
      ],
    },
    // section 1
    {
      name: 'section1',
      type: 'group',
      label: 'Section 1',
      fields: [
        {
          name: 'number',
          type: 'text',

          label: 'Section Number',
        },
        {
          name: 'eyebrow',
          type: 'text',
          required: true,
          label: 'Small Heading',
        },
        {
          name: 'mainheading',
          type: 'text',
          required: true,
          label: 'Main Heading',
        },
        {
          name: 'description',
          type: 'array',
          label: 'Description',
          fields: [
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
          ],
        },
        {
          name: 'engagementsnapshot',
          type: 'array',
          label: 'Engagement Snapshot',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'heading',
            },
            {
              name: 'description',
              type: 'text',
              label: 'description',
            },
          ],
        },
        {
          name: 'researchfocus',
          type: 'array',
          label: 'Research list',
          fields: [
            {
              name: 'researchitem',
              type: 'text',
              label: 'Research Item',
            },
          ],
        },
        {
          name: 'observations',
          type: 'array',
          label: 'Key Research Observations',
          fields: [
            {
              name: 'value',
              type: 'text',
              required: true,
            },
            {
              name: 'description',
              type: 'textarea',
              required: true,
            },
          ],
        },
      ],
    },

    // section 2
    {
      name: 'section2',
      type: 'group',
      label: 'Section 02',
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Section Number',
        },
        {
          name: 'eyebrow',
          type: 'text',
          required: true,
          label: 'Small Heading',
        },
        {
          name: 'section2heading',
          type: 'text',
          required: true,
          label: 'Main Heading',
        },
        {
          name: 'paragraphs',
          type: 'array',
          label: 'Description Paragraphs',
          fields: [
            {
              name: 'text',
              type: 'textarea',
              required: true,
            },
          ],
        },
        {
          name: 'questionIntro',
          type: 'text',
          label: 'Question Introduction',
        },
        {
          name: 'questionLabel',
          type: 'text',
          label: 'Question Label',
        },
        {
          name: 'highlightQuestion',
          type: 'textarea',
          label: 'Highlighted Question',
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Answer / Conclusion',
        },
      ],
    },
    // section 3
    {
      name: 'section3',
      type: 'group',
      label: 'Section 3',
      fields: [
        {
          name: 'number',
          type: 'text',

          label: 'Section Number',
        },
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Small Heading',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'corecomponents',
          type: 'array',
          label: 'Core Components',
          fields: [
            {
              name: 'componentlist',
              type: 'text',
              label: 'Component',
            },
          ],
        },
        {
          name: 'constraints',
          type: 'array',
          label: 'Constraints',
          fields: [
            {
              name: 'constraintitem',
              type: 'text',
              label: 'Constraintitem',
            },
          ],
        },
        {
          name: 'techniques',
          type: 'array',
          label: 'Techniques',
          fields: [
            {
              name: 'technique',
              type: 'text',
              label: 'Technique',
            },
          ],
        },
      ],
    },
    // section 4
    {
      name: 'section4',
      type: 'group',
      label: 'Section 4',
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Section Number',
        },
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Small Heading',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
        },
        {
          name: 'description',
          type: 'text',
          label: 'description',
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Methodology Card',
          fields: [
            {
              name: 'phasenumber',
              type: 'text',
              label: 'Phase Number',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Heading',
            },
            {
              name: 'description',
              type: 'text',
              label: 'Description',
            },
          ],
        },
      ],
    },
    // section 5
    {
      name: 'section5',
      type: 'group',
      label: 'Section 5',
      fields: [
        {
          name: 'number',
          type: 'text',

          label: 'Section Number',
        },
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Small Heading',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Cards',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Card heading',
            },
            {
              name: 'description',
              type: 'text',
              label: 'Card Description',
            },
          ],
        },
      ],
    },
    // section 6
    {
      name: 'section6',
      type: 'group',
      label: 'Section 6',
      fields: [
        {
          name: 'number',
          type: 'text',

          label: 'Section Number',
        },
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Small Heading',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Key Cards',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Card Heading',
            },
            {
              name: 'title',
              type: 'text',
              label: 'Card title',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
            {
              name: 'listItems',
              type: 'array',
              label: 'List Items',
              fields: [
                {
                  name: 'item',
                  type: 'text',
                  label: 'List Item',
                },
              ],
            },
          ],
        },
      ],
    },
    // section 7
    {
      name: 'section7',
      type: 'group',
      label: 'section 7',
      fields: [
        {
          name: 'number',
          type: 'text',

          label: 'Section Number',
        },
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Small Heading',
        },
        {
          name: 'mainheading',
          type: 'text',
          label: 'Main Heading',
        },
        {
          name: 'descriptions',
          type: 'array',
          label: 'Descriptions',
          fields: [
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
            },
          ],
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Impact Cards',
          fields: [
            {
              name: 'heading',
              type: 'text',
              label: 'Card Heading',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Card Description',
            },
          ],
        },
      ],
    },
    // section 8
    {
      name: 'section8',
      type: 'group',
      label: 'section 8',
      fields: [
        {
          name: 'number',
          type: 'text',
          label: 'Section Number',
        },
        {
          name: 'eyebrow',
          type: 'text',
          label: 'Small Heading',
        },
        {
          name: 'heading',
          type: 'text',
          label: 'Main Heading',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'descritpion',
        },
        {
          name: 'cards',
          type: 'array',
          label: 'Recommendation Cards',
          fields: [
            {
              name: 'icon',
              type: 'text',
              label: 'Icon',
            },
            {
              name: 'heading',
              type: 'text',
              label: 'Card Heading',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Card Description',
            },
          ],
        },
        {
          name: 'conclusion',
          type: 'text',
          label: 'conclusion',
        },
      ],
    },
    //section 9
    {
      name: 'section9',
      type: 'group',
      label: 'Section 9',
      fields: [
        {
          name: 'number',
          type: 'text',

          label: 'Section Number',
        },
        { name: 'eyebrow', type: 'text', label: 'Small Heading' },
        { name: 'heading', type: 'text', label: 'Main Heading' },
        {
          name: 'descriptions',
          type: 'array',
          label: 'Cards',
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Card Title',
            },
            {
              name: 'description',
              type: 'array',
              required: true,
              label: 'Description',
              fields: [
                {
                  name: 'description',
                  type: 'textarea',
                  label: 'description',
                },
              ],
            },
          ],
        },
      ],
    },
    // this is for faqs
    {
      name: 'number',
      type: 'text',

      label: 'Section Number',
    },
    {
      name: 'faqheading',
      type: 'text',

      label: 'FAQ Heading',
    },
    {
      name: 'faqdescription',
      type: 'text',

      label: 'FAQ description',
    },

    {
      name: 'faqs',
      type: 'array',
      label: 'Frequently Asked Questions',
      fields: [
        {
          name: 'question',
          type: 'text',
          required: true,
          label: 'Question',
        },
        {
          name: 'answer',
          type: 'textarea',
          required: true,
          label: 'Answer',
        },
      ],
    },
    {
      name: 'faqnote',
      type: 'textarea',
      label: 'faqnote',
    },
    // cat section
    {
      name: 'catsection',
      type: 'group',
      label: 'CTA Section',
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
        },
        {
          name: 'button',
          type: 'text',
          label: 'Button',
        },
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
