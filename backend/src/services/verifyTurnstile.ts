export async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  if (!secretKey) {
    throw new Error('Turnstile secret key is not configured.')
  }

  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      secret: secretKey,
      response: token,
    }),
    cache: 'no-store',
  })

  if (!response.ok) {
    throw new Error('Cloudflare verification service unavailable.')
  }
  const result = await response.json()
  return result.success === true
}
