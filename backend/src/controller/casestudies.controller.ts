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
      depth: 1,
      limit: 100,
      sort: '-createdAt',
    })

    return Response.json({
      success: true,
      message: 'Case studies fetched successfully',
      data: result.docs,
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
