import type { NextRequest } from 'next/server'
import { cicraAudit } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return cicraAudit(request)
}
