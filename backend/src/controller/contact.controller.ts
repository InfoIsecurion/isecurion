import { NextResponse } from 'next/server'
import { sendContactEmail } from '../services/emailService'
import { verifyTurnstile } from '@/services/verifyTurnstile'
import type { PayloadRequest } from 'payload'

interface ContactFormData {
  fullname: string
  email: string
  phonenumber: string
  company: string
  message: string
  service: string
  turnstileToken: string
}

interface BreachAttackSimulation {
  email: string
  companyName: string
  simulation: string
  turnstileToken: string
}
interface RedTeam {
  email: string
  companyName: string
  assessment: string
}
interface AiAugamentedRedTeam {
  email: string
  orgname: string
  phonenumber: string
  country: string
  aifootprint: string
  turnstileToken: string
}
interface PhishingSimulation {
  email: string
  companyName: string
  simulation: string
  turnstileToken: string
}

interface DpoServices {
  fullname: string
  companyname: string
  email: string
  phonenumber: string
  location: string
  engagement: string
  message: string
}

interface AadharAudit {
  email: string
  companyname: string
  entity: string
  turnstileToken: string
}

interface BseNse {
  email: string
  companyName: string
  organizationtype: string
  turnstileToken: string
}

interface CicraAudit {
  email: string
  companyName: string
  industry: string
  turnstileToken: string
}
interface RbiSecurityAudit {
  email: string
  companyName: string
  organizationtype: string
  turnstileToken: string
}
interface IrdaAudit {
  email: string
  companyName: string
  organizationtype: string
  turnstileToken: string
}

function containsHTML(value: string): boolean {
  return /<[^>]*>/i.test(value)
}

// main contact form
export async function submitContactForm(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()
    console.log(body, 'this is the body')
    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { fullname, email, company, phonenumber, message, service, turnstileToken } =
      body as Record<string, unknown>

    if (!fullname || !email || !phonenumber || !service) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof fullname !== 'string' ||
      typeof email !== 'string' ||
      typeof company !== 'string' ||
      typeof phonenumber !== 'string' ||
      typeof message !== 'string' ||
      typeof service !== 'string' ||
      typeof turnstileToken !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const fields = [fullname, email, company, phonenumber, service, message]

    if (fields.some((field) => containsHTML(field))) {
      return Response.json(
        {
          message: 'Invalid input',
        },
        { status: 400 },
      )
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
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
      phonenumber,
      company,
      message,
      service,
      turnstileToken,
    }

    await sendContactEmail({
      email: validatedData.email,
      subject: `New service- ${validatedData.fullname}`,
      fields: {
        Name: validatedData.fullname,
        Email: validatedData.email,
        Company: validatedData.company,
        service: validatedData.service,
        PhoneNumber: validatedData.phonenumber,
        Message: validatedData.message,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function breachAttackSimulation(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, companyName, simulation, turnstileToken } = body as Record<string, unknown>

    if (!email || !simulation) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof companyName !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof simulation !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: BreachAttackSimulation = { email, companyName, simulation, turnstileToken }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Breach Attack Simulation`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.companyName,
        Message: validatedData.simulation,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function redTeam(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, companyName, assessment, turnstileToken } = body as Record<string, unknown>

    if (!email || !assessment) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof companyName !== 'string' ||
      typeof assessment !== 'string' ||
      typeof turnstileToken !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: RedTeam = { email, companyName, assessment }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Breach Attack Simulation`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.companyName,
        Message: validatedData.assessment,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function aiAugamentedRedTeam(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, orgname, phonenumber, country, aifootprint, turnstileToken } = body as Record<
      string,
      unknown
    >

    if (!email || !orgname || !phonenumber || !country || !aifootprint) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof orgname !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof phonenumber !== 'string' ||
      typeof country !== 'string' ||
      typeof aifootprint !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: AiAugamentedRedTeam = {
      email,
      orgname,
      phonenumber,
      country,
      aifootprint,
      turnstileToken,
    }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Ai Augamented Red Team`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.orgname,
        Phonenumber: phonenumber,
        Country: country,
        Aifootprint: aifootprint,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

// phishing simulation
export async function phishingSimulation(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, companyName, simulation, turnstileToken } = body as Record<string, unknown>

    if (!email || !companyName || !simulation) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof companyName !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof simulation !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: PhishingSimulation = {
      email,
      companyName,
      simulation,
      turnstileToken,
    }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Phishing Simulation`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.companyName,
        Simulation: validatedData.simulation,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

// managed security service

export async function dpoServices(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const {
      fullname,
      email,
      companyname,
      phonenumber,
      location,
      engagement,
      message,
      turnstileToken,
    } = body as Record<string, unknown>

    if (!fullname || !email || !companyname || !phonenumber) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof fullname !== 'string' ||
      typeof email !== 'string' ||
      typeof companyname !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof phonenumber !== 'string' ||
      typeof location !== 'string' ||
      typeof engagement !== 'string' ||
      typeof message !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: DpoServices = {
      fullname,
      companyname,
      email,
      phonenumber,
      location,
      engagement,
      message,
    }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Dpo Services`,
      fields: {
        Fullname: validatedData.fullname,
        Email: validatedData.email,
        Company: validatedData.companyname,
        Location: validatedData.location,
        Engagement: validatedData.engagement,
        Message: validatedData.message,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function aadharAudit(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, companyname, entity, turnstileToken } = body as Record<string, unknown>

    if (!email || !companyname || !entity) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof companyname !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof entity !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: AadharAudit = { email, companyname, entity, turnstileToken }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Dpo Services`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.companyname,
        Entity: validatedData.entity,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function bseNseAudit(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, companyName, organizationtype, turnstileToken } = body as Record<string, unknown>

    if (!email || !organizationtype) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof companyName !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof organizationtype !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: BseNse = { email, companyName, organizationtype, turnstileToken }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Dpo Services`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.companyName,
        Entity: validatedData.organizationtype,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function cicraAudit(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, companyName, industry, turnstileToken } = body as Record<string, unknown>

    if (!email || !industry || !turnstileToken) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof companyName !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof industry !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: CicraAudit = { email, companyName, industry, turnstileToken }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Dpo Services`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.companyName,
        Entity: validatedData.industry,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function rbiSecurityAudit(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, companyName, organizationtype, turnstileToken } = body as Record<string, unknown>

    if (!email || !organizationtype || !turnstileToken) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof companyName !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof organizationtype !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: RbiSecurityAudit = { email, companyName, organizationtype, turnstileToken }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Dpo Services`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.companyName,
        Entity: validatedData.organizationtype,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}

export async function irda(request: PayloadRequest) {
  try {
    const body: unknown = await request.json?.()

    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const { email, companyName, organizationtype, turnstileToken } = body as Record<string, unknown>

    if (!email || !organizationtype || !turnstileToken) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (
      typeof email !== 'string' ||
      typeof companyName !== 'string' ||
      typeof turnstileToken !== 'string' ||
      typeof organizationtype !== 'string'
    ) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (email && !emailPattern.test(email)) {
      return Response.json({ message: 'Invalid input' }, { status: 400 })
    }

    if (!turnstileToken || !turnstileToken.trim()) {
      return Response.json(
        { success: false, message: 'Please complete CAPTCHA verification.' },
        { status: 400 },
      )
    }

    const isVerified = await verifyTurnstile(turnstileToken)

    if (!isVerified) {
      return Response.json(
        {
          success: false,
          message: 'CAPTCHA verification failed. Please try again.',
        },
        { status: 400 },
      )
    }

    const validatedData: IrdaAudit = { email, companyName, organizationtype, turnstileToken }

    await sendContactEmail({
      email: validatedData.email,
      subject: `Dpo Services`,
      fields: {
        Email: validatedData.email,
        Company: validatedData.companyName,
        Entity: validatedData.organizationtype,
      },
    })

    return Response.json(
      {
        success: true,
        message: 'Your message has been sent successfully.',
      },
      { status: 200 },
    )
  } catch (error) {
    if (error instanceof SyntaxError) {
      return Response.json({ success: false, message: 'Invalid request body.' }, { status: 400 })
    }

    console.error('Contact form submission failed:', error)

    return Response.json(
      {
        success: false,
        message: 'Unable to send your message. Please try again later.',
      },
      { status: 500 },
    )
  }
}
