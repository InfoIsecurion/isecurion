import nodemailer from 'nodemailer'

interface ContactEmailData {
  email: string
  subject: string
  fields: Record<string, string>
}

function createTransporter() {
  const smtpUser = process.env.SMTP_USER
  const smtpPassword = process.env.SMTP_APP_PASSWORD

  if (!smtpUser || !smtpPassword) {
    throw new Error('SMTP email configuration is missing.')
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  })
}

export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const receiver = process.env.CONTACT_RECEIVER_EMAIL
  const smtpUser = process.env.SMTP_USER

  if (!receiver || !smtpUser) {
    throw new Error('Contact email configuration is missing.')
  }

  const transporter = createTransporter()

  await transporter.sendMail({
    from: {
      name: 'ISECURION Website',
      address: smtpUser,
    },
    to: receiver,
    replyTo: data.email,
    subject: data.subject,
    text: [
      'New contact form submission',
      '',
      ...Object.entries(data.fields).map(([key, value]) => `${key}: ${value}`),
    ].join('\n'),
  })
}
