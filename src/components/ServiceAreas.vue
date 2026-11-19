<script setup>
const areas = [
  {
    number: '01', tag: 'Comunicación con intención', title: 'Marketing, comunicaciones\ny diseño',
    description: 'Construimos una presencia coherente y contenidos que acercan tu marca a las personas que quieres alcanzar.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=78', srcset: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=78 600w, https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=78 1000w, https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=78 1400w', alt: 'Espacio de trabajo creativo y colaborativo', href: '#marketing', tone: 'dark',
  },
  {
    number: '02', tag: 'Tecnología al servicio del negocio', title: 'Tecnología y\nsoluciones digitales',
    description: 'Creamos herramientas y sistemas digitales que ordenan procesos, conectan información y facilitan el trabajo.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=78', srcset: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=78 600w, https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=78 1000w, https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1400&q=78 1400w', alt: 'Profesionales colaborando en un proyecto tecnológico', href: '#tecnologia', tone: 'light',
  },
]
</script>

<template>
  <section class="bg-paper px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-28">
    <div class="mx-auto w-full max-w-7xl">
      <div class="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p class="section-kicker"><span></span> Lo que hacemos</p><h2 class="section-title mt-5 max-w-2xl">Dos áreas que se potencian.</h2></div>
        <p class="max-w-md text-base leading-7 text-muted">Desde el primer mensaje hasta las herramientas que sostienen tu operación, conectamos cada parte del desafío.</p>
      </div>
      <div class="grid gap-4 sm:gap-5 lg:grid-cols-2">
        <article v-for="area in areas" :key="area.number" class="group relative isolate min-h-[450px] overflow-hidden rounded-[1.7rem]" :class="area.tone === 'dark' ? 'bg-forest-dark text-white' : 'bg-navy text-white'">
          <img :src="area.image" :srcset="area.srcset" sizes="(min-width: 1024px) 50vw, calc(100vw - 2rem)" :alt="area.alt" loading="lazy" decoding="async" class="absolute inset-0 -z-20 h-full w-full object-cover opacity-40 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-50" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-t from-forest-dark via-forest-dark/65 to-transparent"></div>
          <div class="flex h-full min-h-[450px] flex-col justify-between p-7 sm:p-10">
            <div class="flex items-center justify-between"><span class="rounded-full border border-white/25 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.16em]">{{ area.tag }}</span><span class="font-display text-sm text-white/60">{{ area.number }}</span></div>
            <div class="max-w-lg">
              <h3 class="whitespace-pre-line font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">{{ area.title }}</h3>
              <p class="mt-4 max-w-md leading-7 text-white/75">{{ area.description }}</p>
              <a :href="area.href" class="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#e5d5b2] transition group-hover:gap-5">Explorar servicios <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
