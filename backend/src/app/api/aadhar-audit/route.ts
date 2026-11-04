import type { NextRequest } from 'next/server'
import { aadharAudit } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return aadharAudit(request)
}
