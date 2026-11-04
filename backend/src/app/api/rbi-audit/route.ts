import type { NextRequest } from 'next/server'
import { rbiSecurityAudit } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return rbiSecurityAudit(request)
}
