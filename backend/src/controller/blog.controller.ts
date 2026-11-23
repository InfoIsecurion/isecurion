import type { PayloadHandler } from 'payload'

export const getAllblogs: PayloadHandler = async (req) => {
  try {
    const result = await req.payload.find({
      collection: 'blog',
      where: {
        status: {
          equals: 'published',
        },
      },
      depth: 0,
      limit: 100,
      sort: '-createdAt',
    })

    const blogs = await Promise.all(
      result.docs.map(async (blog) => {
        const relationship = blog.featuredImage

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
            })

            featuredImage = {
              id: media.id,
              alt: media.alt,
              filename: media.filename,
              mimeType: media.mimeType,
              imageData: media.imageData,
            }
          } catch (error) {
            console.error(`Unable to find Media document with ID: ${imageId}`, error)
          }
        }

        return {
          ...blog,
          featuredImage,
        }
      }),
    )

    return Response.json({
      success: true,
      message: 'Blogs fetched successfully',
      data: blogs,
    })
  } catch (error) {
    console.error('Error fetching blogs:', error)

    return Response.json(
      {
        success: false,
        message: 'Failed to fetch blogs',
      },
      { status: 500 },
    )
  }
}
