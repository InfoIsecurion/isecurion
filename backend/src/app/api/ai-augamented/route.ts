import type { NextRequest } from 'next/server'
import { aiAugamentedContactForm } from '@/controller/contact.controller'

export function POST(request: NextRequest) {
  return aiAugamentedContactForm(request)
}
