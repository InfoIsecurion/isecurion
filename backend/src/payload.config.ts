import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import {
  breachAttackEndpoint,
  contactEndpoint,
  redTeamEndpoint,
  aiAugamentedEndpoint,
  phishingSimulationEndpoint,
  dpoEndpoint,
  dpdpEndpoint,
  aadharAduditEndpoint,
  irdaEndpoint,
  rbiSecurityAuditEndpoint,
  vcisoEndpoint,
  iso27001Endpoint,
  bseNseAuditEndpoint,
  ciraAuditEndpoint,
} from './app/api/contact/contact.endpoint'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  endpoints: [
    contactEndpoint,
    breachAttackEndpoint,
    redTeamEndpoint,
    aiAugamentedEndpoint,
    phishingSimulationEndpoint,
    dpoEndpoint,
    dpdpEndpoint,
    aadharAduditEndpoint,
    irdaEndpoint,
    rbiSecurityAuditEndpoint,
    vcisoEndpoint,
    iso27001Endpoint,
    bseNseAuditEndpoint,
    ciraAuditEndpoint,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || '',
  }),
  sharp,
  plugins: [],

  cors: ['http://localhost:3000', 'http://localhost:3001'],
})
