import type { NextRequest } from 'next/server'
import { dpoServices } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return dpoServices(request)
}
