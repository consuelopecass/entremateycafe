import { ref } from 'vue'

export const isWhatsAppDialogOpen = ref(false)

export function openWhatsAppContact() {
  isWhatsAppDialogOpen.value = true
}

export function closeWhatsAppContact() {
  isWhatsAppDialogOpen.value = false
}
