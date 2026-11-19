<script setup>
import { nextTick, ref, watch } from 'vue'
import { closeWhatsAppContact, isWhatsAppDialogOpen } from '../composables/useWhatsAppContact'
import { whatsappUrl, createServiceMessage } from '../utils/whatsapp'
import { whatsappServices } from '../data/whatsappServices'

const dialog = ref(null)
const selectedService = ref(null)
const projectDetails = ref('')
const serviceListHeading = ref(null)
const selectedServiceHeading = ref(null)

watch(isWhatsAppDialogOpen, async (isOpen) => {
  await nextTick()
  if (isOpen && dialog.value && !dialog.value.open) {
    selectedService.value = null
    projectDetails.value = ''
    dialog.value.showModal()
    dialog.value.querySelector('[data-first-option]')?.focus()
    document.body.classList.add('dialog-open')
  } else if (!isOpen && dialog.value?.open) {
    dialog.value.close()
    document.body.classList.remove('dialog-open')
  }
})

function closeDialog() {
  closeWhatsAppContact()
}

function handleClose() {
  document.body.classList.remove('dialog-open')
  if (isWhatsAppDialogOpen.value) closeWhatsAppContact()
}

function handleBackdropClick(event) {
  if (event.target === dialog.value) closeDialog()
}

async function chooseService(service) {
  selectedService.value = service
  await nextTick()
  selectedServiceHeading.value?.focus()
}

async function changeService() {
  selectedService.value = null
  await nextTick()
  serviceListHeading.value?.focus()
}

function contactFor() {
  if (!selectedService.value) return
  closeDialog()
  window.open(whatsappUrl(createServiceMessage(selectedService.value, projectDetails.value)), '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <dialog ref="dialog" class="whatsapp-dialog" aria-labelledby="whatsapp-dialog-title" aria-describedby="whatsapp-dialog-description" @cancel.prevent="closeDialog" @close="handleClose" @click="handleBackdropClick">
    <section class="whatsapp-dialog-card">
      <div class="whatsapp-dialog-heading">
        <div>
          <p class="whatsapp-dialog-eyebrow">Entre Mate y Café · WhatsApp</p>
          <h2 id="whatsapp-dialog-title">{{ selectedService ? 'Preparemos tu mensaje' : '¡Hola! 😊 ¿Cómo estás?' }}</h2>
        </div>
        <button type="button" class="dialog-close" aria-label="Cerrar opciones de WhatsApp" @click="closeDialog"><span aria-hidden="true">×</span></button>
      </div>
      <div class="whatsapp-dialog-body">
        <template v-if="!selectedService">
          <p id="whatsapp-dialog-description" class="whatsapp-dialog-intro">¿Qué idea te gustaría llevar a cabo hoy? Cuéntanos y te ayudamos a encontrar el camino.</p>
          <h3 ref="serviceListHeading" tabindex="-1" class="whatsapp-service-list-title">Elige un servicio para partir</h3>
          <div class="whatsapp-service-list" role="group" aria-label="Selecciona un servicio">
            <button v-for="(service, index) in whatsappServices" :key="service.label" type="button" class="whatsapp-service-option" :class="{ 'is-selected': selectedService?.label === service.label }" :aria-pressed="selectedService?.label === service.label" :data-first-option="index === 0 ? '' : null" @click="chooseService(service)">
              <span class="whatsapp-service-emoji" aria-hidden="true">{{ service.emoji }}</span>
              <span class="whatsapp-service-copy"><span class="whatsapp-service-label">{{ service.label }}</span><span class="whatsapp-service-description">{{ service.description }}</span></span>
              <span class="whatsapp-service-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </template>
        <div v-else class="whatsapp-selected-service">
          <p class="whatsapp-selected-eyebrow">Servicio elegido</p>
          <h3 ref="selectedServiceHeading" tabindex="-1" class="whatsapp-selected-title"><span aria-hidden="true">{{ selectedService.emoji }}</span> {{ selectedService.label }}</h3>
          <p id="whatsapp-dialog-description" class="whatsapp-dialog-intro">{{ selectedService.description }}</p>
          <label class="whatsapp-project-label" for="whatsapp-project-details">Si quieres, cuéntanos un poco más</label>
          <textarea id="whatsapp-project-details" v-model="projectDetails" class="whatsapp-project-input" rows="4" maxlength="1200" placeholder="Escribe aquí los detalles de tu idea (opcional)"></textarea>
          <div class="whatsapp-selected-actions">
            <button type="button" class="whatsapp-back-button" @click="changeService"><span aria-hidden="true">←</span> Cambiar servicio</button>
            <button type="button" class="whatsapp-send-button" @click="contactFor">Abrir WhatsApp <span aria-hidden="true">↗</span></button>
          </div>
        </div>
        <p v-if="!selectedService" class="whatsapp-dialog-note">Al elegir un servicio podrás agregar detalles antes de abrir WhatsApp.</p>
      </div>
    </section>
  </dialog>
</template>
