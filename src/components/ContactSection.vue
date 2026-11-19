<script setup>
import { ref } from 'vue'
import { openWhatsAppContact } from '../composables/useWhatsAppContact'
import { sendContactRequest } from '../utils/formspree'
const name = ref('')
const company = ref('')
const email = ref('')
const interest = ref('')
const message = ref('')
const feedback = ref('')
const feedbackType = ref('success')
const isSubmitting = ref(false)
const formElement = ref(null)

async function submitRequest() {
  if (isSubmitting.value) return
  if (!formElement.value?.reportValidity()) return
  if (!name.value.trim() || !email.value.trim() || !interest.value || !message.value.trim()) return

  isSubmitting.value = true
  feedback.value = ''

  try {
    await sendContactRequest({
      name: name.value.trim(),
      company: company.value.trim(),
      email: email.value.trim(),
      interest: interest.value,
      message: message.value.trim(),
    })

    feedbackType.value = 'success'
    feedback.value = '¡Gracias! Tu solicitud fue enviada correctamente. Te responderemos al correo que indicaste.'
    name.value = ''
    company.value = ''
    email.value = ''
    interest.value = ''
    message.value = ''
    formElement.value.reset()
  } catch {
    feedbackType.value = 'error'
    feedback.value = 'No pudimos enviar tu solicitud. Tus datos siguen en el formulario; revisa tu conexión e inténtalo nuevamente.'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section id="contacto" class="scroll-mt-24 bg-ivory px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
    <div class="mx-auto grid w-full max-w-7xl overflow-hidden rounded-[1.5rem] bg-paper lg:grid-cols-[.9fr_1.1fr] sm:rounded-[2rem]">
      <div class="relative isolate overflow-hidden bg-forest-dark p-7 text-white sm:p-10 lg:p-14">
        <div class="absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full border border-white/10"></div>
        <div class="absolute -right-5 -top-5 -z-10 h-44 w-44 rounded-full border border-white/10"></div>
        <p class="section-kicker section-kicker-light"><span></span> Hablemos</p>
        <h2 class="mt-5 max-w-md font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Las buenas ideas parten conversando.</h2>
        <p class="mt-6 max-w-md leading-7 text-white/70">Cuéntanos qué estás buscando. Podemos ayudarte a ordenar el desafío y explorar juntos los siguientes pasos.</p>
        <div class="mt-10 border-t border-white/20 pt-6"><p class="text-sm font-semibold text-[#e5d5b2]">Entre Mate y Café</p><p class="mt-1 text-sm text-white/55">Donde nacen las ideas.</p><button type="button" class="mt-5 inline-flex min-h-11 items-center gap-2 text-left text-sm font-semibold text-white transition hover:text-[#e5d5b2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e5d5b2]" @click="openWhatsAppContact">Escríbenos directamente <span aria-hidden="true">↗</span></button><a href="mailto:hola@entremateycafe.cl" class="mt-2 block min-h-11 content-center text-sm font-medium text-white/75 underline-offset-4 transition hover:text-[#e5d5b2] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5d5b2]">hola@entremateycafe.cl</a></div>
      </div>

      <form ref="formElement" class="p-5 sm:p-8 lg:p-14" :aria-busy="isSubmitting" @submit.prevent="submitRequest">
        <p class="text-sm font-semibold text-forest">Cuéntanos de tu proyecto</p>
        <p class="mt-2 text-sm leading-6 text-muted">Completa los datos para enviarnos tu solicitud por correo.</p>
        <fieldset class="contents" :disabled="isSubmitting">
          <div class="mt-7 grid gap-5 sm:grid-cols-2">
            <label class="form-label">Nombre<input v-model.trim="name" class="form-input" type="text" name="name" autocomplete="name" placeholder="Tu nombre" required /></label>
            <label class="form-label">Empresa <span class="font-normal text-muted">(opcional)</span><input v-model.trim="company" class="form-input" type="text" name="company" autocomplete="organization" placeholder="Nombre de la empresa" /></label>
            <label class="form-label sm:col-span-2">Correo electrónico<input v-model.trim="email" class="form-input" type="email" name="email" autocomplete="email" placeholder="nombre@empresa.cl" required /></label>
            <label class="form-label sm:col-span-2">Servicio de interés<select v-model="interest" class="form-input" name="interest" required><option disabled value="">Selecciona un servicio</option><option>Marketing, comunicaciones y diseño</option><option>Tecnología y soluciones digitales</option><option>Una solución integral</option><option>Quiero conversar primero</option></select></label>
            <label class="form-label sm:col-span-2">Mensaje<textarea v-model.trim="message" class="form-input min-h-28 resize-y" name="message" placeholder="Cuéntanos brevemente sobre tu desafío" required></textarea></label>
          </div>
        </fieldset>
        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button type="submit" :disabled="isSubmitting" :aria-busy="isSubmitting" class="inline-flex w-full items-center justify-center gap-3 rounded-full bg-forest px-6 py-4 text-sm font-semibold text-white transition hover:bg-forest-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto" @click="feedback = ''">
            <svg v-if="isSubmitting" viewBox="0 0 24 24" fill="none" class="h-4 w-4 animate-spin" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-opacity=".25" stroke-width="3" /><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" stroke-width="3" stroke-linecap="round" /></svg>
            <span>{{ isSubmitting ? 'Enviando…' : 'Enviar solicitud' }}</span>
            <span v-if="!isSubmitting" aria-hidden="true">↗</span>
          </button>
          <p v-if="feedback" :role="feedbackType === 'error' ? 'alert' : 'status'" class="form-feedback text-sm leading-5" :class="feedbackType === 'error' ? 'form-feedback-error' : 'form-feedback-success'">{{ feedback }}</p>
        </div>
        <p class="mt-4 text-xs leading-5 text-muted">Tu correo se usará para responder esta solicitud. No mostraremos públicamente los datos de contacto del equipo.</p>
      </form>
    </div>
  </section>
</template>
