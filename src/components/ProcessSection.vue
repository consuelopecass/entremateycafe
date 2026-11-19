<script setup>
defineProps({ steps: { type: Array, required: true } })
</script>

<template>
  <section id="metodo" class="scroll-mt-24 bg-forest-dark px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-12 lg:py-28">
    <div class="mx-auto w-full max-w-7xl">
      <div class="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
        <div><p class="section-kicker section-kicker-light"><span></span> Cómo trabajamos</p><h2 class="mt-5 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">Un proceso claro, desde la primera conversación.</h2><p class="mt-6 max-w-md leading-7 text-white/65">Cada proyecto es distinto. La forma de avanzar se define contigo, con prioridades claras y comunicación directa.</p><a href="#contacto" class="mt-8 inline-flex items-center gap-3 rounded-full border border-white/25 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-forest-dark">Conversemos sobre tu proyecto <span aria-hidden="true">↗</span></a></div>
        <ol class="grid gap-0 sm:grid-cols-2">
          <li v-for="(step, index) in steps" :key="step.number" class="border-t border-white/20 py-6 sm:px-5" :class="index % 2 === 0 ? 'sm:pl-0' : 'sm:pr-0'">
            <span class="font-display text-sm text-[#d8c59b]">{{ step.number }}</span><h3 class="mt-4 font-display text-2xl font-semibold">{{ step.title }}</h3><p class="mt-3 max-w-xs text-sm leading-6 text-white/65">{{ step.text }}</p>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
