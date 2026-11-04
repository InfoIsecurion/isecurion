import type { NextRequest } from 'next/server'
import { managedSecurityService } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return managedSecurityService(request)
}
