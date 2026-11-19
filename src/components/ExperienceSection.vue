<script setup>
const capabilities = [
  { label: 'Presencia y comunicación', title: 'Marcas que se expresan con claridad', image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=78', srcset: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=480&q=78 480w, https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=700&q=78 700w, https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1000&q=78 1000w', alt: 'Equipo revisando ideas y materiales de comunicación', number: '01' },
  { label: 'Plataformas y procesos', title: 'Herramientas que ordenan el trabajo', image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=78', srcset: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=480&q=78 480w, https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=700&q=78 700w, https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=78 1000w', alt: 'Profesionales trabajando en una plataforma digital', number: '02' },
  { label: 'Encuentros y experiencias', title: 'Actividades que conectan personas', image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=78', srcset: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=480&q=78 480w, https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=700&q=78 700w, https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=78 1000w', alt: 'Audiencia participando en un encuentro corporativo', number: '03' },
]
</script>

<template>
  <section id="experiencia" class="scroll-mt-24 bg-paper px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
    <div class="mx-auto w-full max-w-7xl">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p class="section-kicker"><span></span> Experiencia y proyectos</p><h2 class="section-title mt-5 max-w-2xl">Cada desafío merece una solución propia.</h2></div><p class="max-w-md leading-7 text-muted">Trabajamos en proyectos de comunicación, herramientas digitales y experiencias para empresas y organizaciones. El punto de partida siempre es entender lo que hace falta.</p></div>
      <div class="mt-12 grid gap-5 md:grid-cols-3">
        <article v-for="item in capabilities" :key="item.number" class="group min-w-0 overflow-hidden rounded-[1.4rem] border border-forest/10 bg-ivory transition duration-300 hover:-translate-y-1 hover:shadow-xl">
          <div class="relative h-56 overflow-hidden bg-forest-soft"><img :src="item.image" :srcset="item.srcset" sizes="(min-width: 768px) 30vw, calc(100vw - 2rem)" :alt="item.alt" loading="lazy" decoding="async" class="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span class="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[.13em] text-forest">{{ item.label }}</span></div>
          <div class="flex items-start justify-between gap-4 p-5"><h3 class="max-w-xs font-display text-xl font-semibold leading-snug text-ink">{{ item.title }}</h3><span class="mt-1 text-xs font-medium text-forest/55">{{ item.number }}</span></div>
        </article>
      </div>
      <p class="mt-6 text-center text-xs text-muted">Ámbitos de trabajo. Cada servicio y proyecto se define según las necesidades de cada organización.</p>
    </div>
  </section>
</template>
