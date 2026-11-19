<script setup>
import { currentTheme, setTheme } from '../composables/useTheme'
</script>

<template>
  <div class="theme-switch" role="group" aria-label="Tema visual">
    <button type="button" class="theme-switch-button" :class="{ 'is-active': currentTheme === 'sun' }" :aria-pressed="currentTheme === 'sun'" aria-label="Usar tema claro" title="Tema claro" @click="setTheme('sun')"><span aria-hidden="true">☀️</span></button>
    <button type="button" class="theme-switch-button" :class="{ 'is-active': currentTheme === 'moon' }" :aria-pressed="currentTheme === 'moon'" aria-label="Usar tema oscuro" title="Tema oscuro" @click="setTheme('moon')"><span aria-hidden="true">🌙</span></button>
  </div>
</template>
