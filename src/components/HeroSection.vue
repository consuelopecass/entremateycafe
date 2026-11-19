<script setup>
import logoCream from '../assets/Logo-EMYC-1-verde.png'
import { openWhatsAppContact } from '../composables/useWhatsAppContact'
</script>

<template>
  <section id="inicio" class="relative isolate overflow-hidden bg-forest-dark text-white">
    <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1280&q=76" srcset="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=720&q=76 720w, https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1280&q=76 1280w, https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=76 1920w" sizes="100vw" alt="" fetchpriority="high" decoding="async" class="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-25" />
    <div class="absolute inset-0 -z-10 bg-gradient-to-r from-forest-dark via-forest-dark/95 to-forest-dark/55" aria-hidden="true"></div>
    <div class="absolute -right-28 -top-36 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/10" aria-hidden="true"></div>
    <div class="absolute -right-8 -top-16 -z-10 h-[24rem] w-[24rem] rounded-full border border-white/10" aria-hidden="true"></div>

    <div class="mx-auto grid min-h-[620px] w-full max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:min-h-[690px] lg:grid-cols-[1.1fr_.9fr] lg:gap-12 lg:px-12 lg:py-24">
      <div class="max-w-3xl animate-[rise_.8s_ease-out_both]">
        <div class="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[.19em] text-white/80">
          <span class="h-2 w-2 rounded-full bg-[#d8c59b]"></span>
          Comunicación · Diseño · Tecnología
        </div>
        <h1 class="max-w-3xl text-[2.4rem] font-medium leading-[1.04] tracking-[-.045em] min-[400px]:text-[2.8rem] sm:text-6xl lg:text-7xl">Ideas que conectan.<br /><span class="font-semibold text-[#e5d5b2]">Soluciones que avanzan.</span></h1>
        <p class="mt-6 max-w-xl text-base leading-7 text-white/75 sm:mt-7 sm:text-xl sm:leading-8">Unimos estrategia, creatividad y tecnología para resolver lo que tu negocio necesita hoy y acompañar lo que viene.</p>
        <div class="mt-8 flex flex-col gap-3 min-[500px]:flex-row min-[500px]:flex-wrap min-[500px]:items-center">
          <a href="#servicios" class="inline-flex items-center justify-center gap-3 rounded-full bg-[#eee7d7] px-5 py-3.5 text-sm font-semibold text-forest-dark transition hover:-translate-y-0.5 hover:bg-white sm:px-6 sm:py-4">Conoce lo que hacemos <span aria-hidden="true">↗</span></a>
          <button type="button" class="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5d5b2] sm:px-6 sm:py-4" @click="openWhatsAppContact">Hablemos por WhatsApp <span aria-hidden="true">↗</span></button>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-lg animate-[rise_.8s_.15s_ease-out_both] lg:ml-auto">
        <div class="absolute -inset-5 rounded-[2.5rem] border border-white/10"></div>
        <div class="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/5 p-4 shadow-2xl backdrop-blur-sm sm:rounded-[2rem] sm:p-8">
          <img :src="logoCream" alt="Entre Mate y Café: Donde nacen las ideas" class="mx-auto w-full max-w-md" />
          <div class="mt-2 flex items-center justify-between border-t border-white/15 pt-5 text-xs uppercase tracking-[.17em] text-white/55">
            <span>Marketing & comunicaciones</span><span class="text-[#e5d5b2]">+</span><span>Tecnología</span>
          </div>
        </div>
        <div class="absolute -bottom-7 -left-6 hidden rounded-2xl border border-white/15 bg-forest px-5 py-4 shadow-xl sm:block">
          <p class="text-xs uppercase tracking-[.15em] text-white/55">Una mirada integral</p>
          <p class="mt-1 text-sm font-semibold text-white">Personas · Ideas · Soluciones</p>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
  </section>
</template>
