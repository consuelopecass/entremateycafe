<script setup>
defineProps({
  marketingServices: { type: Array, required: true },
  technologyServices: { type: Array, required: true },
})
</script>

<template>
  <section id="servicios" class="scroll-mt-24 bg-ivory px-4 py-20 sm:px-6 sm:py-24 lg:px-12 lg:py-32">
    <div class="mx-auto w-full max-w-7xl">
      <div class="mx-auto max-w-3xl text-center"><p class="section-kicker justify-center"><span></span> Servicios integrales</p><h2 class="section-title mt-5">Lo que necesitas, conectado en un solo equipo.</h2><p class="mt-5 leading-7 text-muted">Sumamos capacidades según cada desafío. Puedes partir por una necesidad puntual o integrar varios servicios en un mismo plan.</p></div>

      <div class="mt-14 grid gap-6 lg:grid-cols-2">
        <article id="marketing" class="scroll-mt-28 rounded-[1.4rem] border border-forest/10 bg-paper p-5 shadow-sm sm:rounded-[1.7rem] sm:p-8 lg:p-10">
          <div class="flex items-start justify-between gap-4"><div><p class="text-xs font-semibold uppercase tracking-[.16em] text-forest/60">Área 01</p><h3 class="mt-3 font-display text-2xl font-semibold tracking-tight text-forest sm:text-3xl">Marketing, comunicaciones y diseño</h3></div><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-soft text-forest"><svg viewBox="0 0 24 24" fill="none" class="h-6 w-6" aria-hidden="true"><path d="M4 17.5V20h2.5L19 7.5 16.5 5 4 17.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="m14.8 6.7 2.5 2.5M4 12h5M4 7h7M4 17h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></div></div>
          <p class="mt-5 leading-7 text-muted">Estrategia, contenido y diseño para comunicar con claridad y mantener una presencia consistente.</p>
          <ul class="mt-7 grid gap-x-7 gap-y-3 sm:grid-cols-2">
            <li v-for="service in marketingServices" :key="service" class="flex gap-3 text-sm leading-6 text-ink/80"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest"></span>{{ service }}</li>
          </ul>
        </article>

        <article id="tecnologia" class="scroll-mt-28 rounded-[1.4rem] bg-navy p-5 text-white shadow-sm sm:rounded-[1.7rem] sm:p-8 lg:p-10">
          <div class="flex items-start justify-between gap-4"><div><p class="text-xs font-semibold uppercase tracking-[.16em] text-white/55">Área 02</p><h3 class="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">Tecnología y soluciones digitales</h3></div><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#e5d5b2]"><svg viewBox="0 0 24 24" fill="none" class="h-6 w-6" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="12" rx="1.5" stroke="currentColor" stroke-width="1.6"/><path d="M8 20h8M12 16.5V20M8 9l-2 2 2 2m8-4 2 2-2 2m-3-5-2 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>
          <p class="mt-5 leading-7 text-white/70">Desarrollo y soporte digital pensados para la forma en que trabaja tu organización.</p>
          <ul class="mt-7 grid gap-x-7 gap-y-3 sm:grid-cols-2">
            <li v-for="service in technologyServices" :key="service" class="flex gap-3 text-sm leading-6 text-white/80"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e5d5b2]"></span>{{ service }}</li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
