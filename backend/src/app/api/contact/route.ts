import type { NextRequest } from 'next/server'
import { submitContactForm } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return submitContactForm(request)
}
