<script setup>
import { ref } from 'vue'
import logo from '../assets/Logo-EMYC-2.png'
import ThemeToggle from './ThemeToggle.vue'
import { openWhatsAppContact } from '../composables/useWhatsAppContact'

const menuOpen = ref(false)
const links = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#metodo' },
  { label: 'Experiencia', href: '#experiencia' },
]

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-forest/10 bg-ivory/95 backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:px-6 lg:px-12">
      <a href="#inicio" class="shrink-0" aria-label="Entre Mate y Café, inicio" @click="closeMenu">
        <img :src="logo" alt="Entre Mate y Café, donde nacen las ideas" class="theme-logo h-14 w-44 object-contain object-left sm:h-16 sm:w-56" />
      </a>

      <nav class="hidden items-center gap-5 lg:flex xl:gap-7" aria-label="Navegación principal">
        <a v-for="link in links" :key="link.href" :href="link.href" class="text-sm font-medium text-ink/75 transition hover:text-forest">{{ link.label }}</a>
        <ThemeToggle />
        <button type="button" class="whatsapp-cta" @click="openWhatsAppContact">WhatsApp <span aria-hidden="true">↗</span></button>
      </nav>

      <div class="flex shrink-0 items-center gap-2 lg:hidden">
        <ThemeToggle />
        <button class="flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 text-forest" type="button" :aria-expanded="menuOpen" aria-controls="mobile-navigation" :aria-label="menuOpen ? 'Cerrar menú' : 'Abrir menú'" @click="menuOpen = !menuOpen">
          <svg v-if="!menuOpen" viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /></svg>
          <svg v-else viewBox="0 0 24 24" fill="none" class="h-5 w-5" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" /></svg>
        </button>
      </div>
    </div>

    <nav v-if="menuOpen" id="mobile-navigation" class="border-t border-forest/10 bg-ivory px-4 pb-5 pt-2 lg:hidden" aria-label="Navegación móvil">
      <a v-for="link in links" :key="link.href" :href="link.href" class="block border-b border-forest/10 py-3 text-sm font-medium" @click="closeMenu">{{ link.label }}</a>
      <button type="button" class="mt-4 block w-full rounded-full bg-forest px-5 py-3 text-center text-sm font-semibold text-white" @click="closeMenu(); openWhatsAppContact()">Escríbenos por WhatsApp ↗</button>
    </nav>
  </header>
</template>
