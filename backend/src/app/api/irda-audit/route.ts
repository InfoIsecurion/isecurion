import type { NextRequest } from 'next/server'
import { irda } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return irda(request)
}
