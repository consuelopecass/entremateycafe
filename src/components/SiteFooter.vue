<script setup>
import logo from '../assets/Logo-EMYC-1.png'

const links = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#metodo' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Contacto', href: '#contacto' },
]
</script>

<template>
  <footer class="bg-[#102f29] px-4 pb-7 pt-12 text-white sm:px-6 lg:px-12">
    <div class="mx-auto max-w-7xl">
      <div class="grid gap-8 border-b border-white/15 pb-10 md:grid-cols-[1.2fr_.8fr] md:items-end">
        <div><a href="#inicio" aria-label="Entre Mate y Café, volver al inicio"><img :src="logo" alt="Entre Mate y Café" class="theme-logo theme-logo-on-dark h-20 w-44 object-contain object-left" /></a><p class="mt-3 max-w-sm text-sm leading-6 text-white/60">Marketing, comunicaciones, diseño y tecnología en soluciones que responden a cada necesidad.</p></div>
        <nav class="flex flex-wrap gap-x-6 gap-y-3 md:justify-end" aria-label="Navegación del pie de página"><a v-for="link in links" :key="link.href" :href="link.href" class="text-sm text-white/70 transition hover:text-white">{{ link.label }}</a></nav>
      </div>
      <div class="flex flex-col gap-2 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><p>© {{ new Date().getFullYear() }} Entre Mate y Café. Todos los derechos reservados.</p><a href="#inicio" class="transition hover:text-white/80">Donde nacen las ideas <span aria-hidden="true">↑</span></a></div>
    </div>
  </footer>
</template>
