import type { NextRequest } from 'next/server'
import { breachAttackSimulation } from '@/controller/contact.controller'
export const runtime = 'nodejs'
export async function POST(request: NextRequest) {
  return breachAttackSimulation(request)
}
