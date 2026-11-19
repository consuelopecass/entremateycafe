import { CONTACT_EMAIL } from '../data/contact'

export const FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

export async function sendContactRequest(fields, fetcher = fetch) {
  const formData = new FormData()
  formData.set('name', fields.name)
  formData.set('company', fields.company)
  formData.set('email', fields.email)
  formData.set('_replyto', fields.email)
  formData.set('interest', fields.interest)
  formData.set('message', fields.message)
  formData.set('_subject', `Nueva solicitud de contacto: ${fields.interest}`)
  formData.set('_template', 'table')
  formData.set('_honey', fields._honey || '')

  const response = await fetcher(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })
  const result = await response.json().catch(() => null)

  if (!response.ok || !(result?.success === true || result?.success === 'true')) {
    throw new Error(result?.message || 'FormSubmit no pudo aceptar el envío.')
  }

  return result
}
