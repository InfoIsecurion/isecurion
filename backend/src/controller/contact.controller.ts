import { NextRequest, NextResponse } from 'next/server'
import { sendContactEmail } from '../services/emailService'

interface ContactFormData {
  fullname: string
  email: string
  phonenumber: string
  company: string
  message: string
  turnstileToken: string
}
interface ContactFormData {
  email: string
  orgname: string
  phonenumber: string
  country: string
  aifootprint: string
  turnstileToken: string
}

export async function submitContactForm(request: NextRequest) {
  try {
    const body: unknown = await request.json()

    if (!body || typeof body !== 'object') {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { fullname, email, company, phonenumber, message, turnstileToken } = body as Record<
      string,
      unknown
    >

    if (!fullname || !email || !phonenumber) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof fullname !== 'string' ||
      typeof email !== 'string' ||
      typeof company !== 'string' ||
      typeof phonenumber !== 'string' ||
      typeof message !== 'string'
    ) {
      return NextResponse.json({ message: 'Invalid input' }, { status: 400 })
    }
    // const fullname = typeof input.fullname === 'string' ? input.fullname.trim() : ''
    // const email = typeof input.email === 'string' ? input.email.trim() : ''
    // const company = typeof input.company === 'string' ? input.company.trim() : ''
    // const message = typeof input.message === 'string' ? input.message.trim() : ''
    // const turnstileToken =
    //   typeof input.turnstileToken === 'string' ? input.turnstileToken.trim() : ''

    // Required-field validation
    const errors: Partial<Record<keyof ContactFormData, string>> = {}

    if (!fullname) errors.fullname = 'Name is required.'
    if (!email) errors.email = 'Email is required.'
    if (!company) errors.company = 'Company is required.'
    if (!message) errors.message = 'Message is required.'

    // Field-length validation
    if (fullname.length > 100) errors.fullname = 'Name must not exceed 100 characters.'
    if (email.length > 254) errors.email = 'Email must not exceed 254 characters.'
    if (company.length > 200) {
      errors.company = 'Company must not exceed 200 characters.'
    }
    if (message.length > 5000) {
      errors.message = 'Message must not exceed 5000 characters.'
    }

    // Email-format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      errors.email = 'Please enter a valid email address.'
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please correct the highlighted fields.',
          errors,
        },
        { status: 400 },
      )
    }
    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }
    const secretKey = process.env.TURNSTILE_SECRET_KEY

    if (!secretKey) {
      throw new Error('Turnstile secret key is not configured.')
    }
    const verifyResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: turnstileToken,
        }),
        cache: 'no-store',
      },
    )

    if (!verifyResponse.ok) {
      throw new Error('Cloudflare verification service unavailable.')
    }

    const verification = await verifyResponse.json()

    if (!verification.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: ContactFormData = {
      fullname,
      email,
      company,
      message,
    }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Website Contact Enquiry - ${validatedData.fullname}`,
      fields: {
        Name: validatedData.fullname,
        Email: validatedData.email,
        Company: validatedData.company,
        Message: validatedData.message,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: 'Invalid request body.' },
        { status: 400 },
      )
    }

    console.error('Contact form submission failed:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function aiAugamentedContactForm(request: NextRequest) {
  try {
    const body: unknown = await request.json()
    console.log(body)

    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, message: 'Invalid request body.' },
        { status: 400 },
      )
    }

    const input = body as Record<string, unknown>

    const email = typeof input.email === 'string' ? input.email.trim() : ''
    const orgname = typeof input.orgname === 'string' ? input.orgname.trim() : ''
    const phonenumber = typeof input.phonenumber === 'string' ? input.phonenumber.trim() : ''
    const country = typeof input.country === 'string' ? input.country.trim() : ''
    const aifootprint = typeof input.aifootprint === 'string' ? input.aifootprint.trim() : ''
    const turnstileToken =
      typeof input.turnstileToken === 'string' ? input.turnstileToken.trim() : ''

    if (!email || !orgname || !phonenumber || !country || !aifootprint) {
      return NextResponse.json(
        { success: false, message: 'Please fill in all required fields.' },
        { status: 400 },
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 },
      )
    }
    if (!turnstileToken) {
      return NextResponse.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }
    const secretKey = process.env.TURNSTILE_SECRET_KEY

    if (!secretKey) {
      throw new Error('Turnstile secret key is not configured.')
    }
    const verifyResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: turnstileToken,
        }),
        cache: 'no-store',
      },
    )

    if (!verifyResponse.ok) {
      throw new Error('Cloudflare verification service unavailable.')
    }

    const verification = await verifyResponse.json()

    if (!verification.success) {
      return NextResponse.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: ContactFormData = {
      email,
      orgname,
      phonenumber,
      country,
      aifootprint,
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your enquiry has been submitted successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { success: false, message: 'Invalid request body.' },
        { status: 400 },
      )
    }

    console.error('AI-Augmented contact form failed:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Unable to submit your enquiry. Please try again later.',
      },
      { status: 500 },
    )
  }
}
