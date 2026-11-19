export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrpqkdkz'

export async function sendContactRequest(fields, fetcher = fetch) {
  const formData = new FormData()
  formData.set('name', fields.name)
  formData.set('company', fields.company)
  formData.set('email', fields.email)
  formData.set('interest', fields.interest)
  formData.set('message', fields.message)
  formData.set('subject', `Nueva solicitud de contacto: ${fields.name}`)

  const response = await fetcher(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })
  const result = await response.json().catch(() => null)

  if (!response.ok || result?.ok !== true) {
    throw new Error('Formspree no pudo aceptar el envío.')
  }

  return result
}
