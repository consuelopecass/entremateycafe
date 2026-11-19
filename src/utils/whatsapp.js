export const WHATSAPP_NUMBER = '56982434313'

export function whatsappUrl(message = '¡Hola! ¿Cómo estás?\nMe interesa conversar con Entre Mate y Café sobre una idea o proyecto.\n¡Muchas gracias!') {
  // The caller passes plain UTF-8 text; encode the complete message exactly once here.
  const normalizedMessage = message.normalize('NFC')
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(normalizedMessage)}`
}

export function createServiceMessage(service, projectDetails = '') {
  const details = projectDetails
    .normalize('NFC')
    .replace(/\r\n?/g, '\n')
    .replace(/[\t ]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return [
    '¡Hola! ¿Cómo estás?',
    `Me interesa conversar con Entre Mate y Café sobre ${service.label}.`,
    details ? `Mi proyecto: ${details}` : 'Tengo una idea o proyecto que me gustaría conversar con ustedes.',
    '¡Muchas gracias!',
  ].join('\n')
}
