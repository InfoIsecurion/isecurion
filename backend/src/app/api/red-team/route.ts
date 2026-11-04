import type { NextRequest } from 'next/server'
import { redTeam } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return redTeam(request)
}
