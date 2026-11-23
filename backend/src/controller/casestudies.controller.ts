import type { PayloadHandler } from 'payload'

export const getAllCaseStudies: PayloadHandler = async (req) => {
  try {
    const result = await req.payload.find({
      collection: 'case-studies',
      where: {
        status: {
          equals: 'published',
        },
      },
      depth: 0,
      limit: 100,
      sort: '-createdAt',
    })

    const caseStudies = await Promise.all(
      result.docs.map(async (item) => {
        const relationship = item.featuredImage

        const imageId =
          typeof relationship === 'string'
            ? relationship
            : relationship && typeof relationship === 'object'
              ? relationship.id
              : null

        let featuredImage = null

        if (imageId) {
          try {
            const media = await req.payload.findByID({
              collection: 'media',
              id: imageId,
              depth: 0,
              overrideAccess: true,
            })

            featuredImage = {
              id: media.id,
              alt: media.alt,
              filename: media.filename,
              mimeType: media.mimeType,
              imageData: media.imageData,
            }
          } catch (error) {
            console.error(`Media not found for case study: ${item.title}`, error)
          }
        }

        return {
          ...item,
          featuredImage,
        }
      }),
    )

    return Response.json({
      success: true,
      message: 'Case studies fetched successfully',
      data: caseStudies,
    })
  } catch (error) {
    console.error('Error fetching case studies:', error)

    return Response.json(
      {
        success: false,
        message: 'Failed to fetch case studies',
      },
      { status: 500 },
    )
  }
}
