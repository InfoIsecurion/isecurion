import type { NextRequest } from 'next/server'
import { phishingSimulation } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return phishingSimulation(request)
}
