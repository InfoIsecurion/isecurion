import type { NextRequest } from 'next/server'
import { bseNseAudit } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return bseNseAudit(request)
}
