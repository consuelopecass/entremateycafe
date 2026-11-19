<script setup>
import { CONTACT_EMAIL, INSTAGRAM_URL } from '../data/contact'

defineProps({
  tone: { type: String, default: 'dark' },
})
</script>

<template>
  <div class="flex flex-wrap items-center gap-x-5 gap-y-3" :class="tone === 'light' ? 'text-white/75' : 'text-ink/75'">
    <a :href="INSTAGRAM_URL" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Entre Mate y Café (se abre en una pestaña nueva)" class="inline-flex min-h-10 items-center gap-2 text-sm transition hover:text-[#d8c59b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8c59b]">
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
      <span>Instagram</span>
    </a>
    <a :href="`mailto:${CONTACT_EMAIL}`" class="inline-flex min-h-10 items-center gap-2 text-sm transition hover:text-[#d8c59b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d8c59b]">
      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="m4 7 8 6 8-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <span>{{ CONTACT_EMAIL }}</span>
    </a>
  </div>
</template>
