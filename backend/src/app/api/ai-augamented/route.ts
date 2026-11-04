import type { NextRequest } from 'next/server'
import { aiAugamentedRedTeam } from '@/controller/contact.controller'

export function POST(request: NextRequest) {
  return aiAugamentedRedTeam(request)
}
