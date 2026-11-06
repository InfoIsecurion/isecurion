import type { Endpoint } from 'payload'
import {
  submitContactForm,
  breachAttackSimulation,
  redTeam,
  aiAugamentedRedTeam,
  phishingSimulation,
  managedSecurityService,
  dpoServices,
  aadharAudit,
  bseNseAudit,
  cicraAudit,
  rbiSecurityAudit,
  irda,
} from '@/controller/contact.controller'

export const contactEndpoint: Endpoint = {
  path: '/contact',
  method: 'post',
  handler: submitContactForm,
}

export const breachAttackEndpoint: Endpoint = {
  path: '/breach-attack-simulation',
  method: 'post',
  handler: breachAttackSimulation,
}

export const redTeamEndpoint: Endpoint = {
  path: '/red-team',
  method: 'post',
  handler: redTeam,
}

export const aiAugamented: Endpoint = {
  path: '/ai-augamented',
  method: 'post',
  handler: aiAugamentedRedTeam,
}

export const phishingSimulationEndpoint: Endpoint = {
  path: '/phishing-simulation',
  method: 'post',
  handler: phishingSimulation,
}

export const managedSecurityEndpoint: Endpoint = {
  path: '/managed-security-service',
  method: 'post',
  handler: managedSecurityService,
}

export const dpoEndpoint: Endpoint = {
  path: '/dpo-service',
  method: 'post',
  handler: dpoServices,
}

export const aadharAduditEndpoint: Endpoint = {
  path: '/aadhar-audit',
  method: 'post',
  handler: aadharAudit,
}

export const bseNseAuditEndpoint: Endpoint = {
  path: '/bse-nse-audit',
  method: 'post',
  handler: bseNseAudit,
}

export const ciraAuditEndpoint: Endpoint = {
  path: '/cicra-audit',
  method: 'post',
  handler: cicraAudit,
}

export const rbiSecurityAuditEndpoint: Endpoint = {
  path: '/rbi-audit',
  method: 'post',
  handler: rbiSecurityAudit,
}

export const irdaEndpoint: Endpoint = {
  path: '/irda-audit',
  method: 'post',
  handler: irda,
}
