import { ref } from 'vue'

const STORAGE_KEY = 'emyc-theme'
const initialTheme = (() => {
  try {
    const savedTheme = localStorage.getItem(STORAGE_KEY)
    if (savedTheme === 'sun' || savedTheme === 'moon') return savedTheme
  } catch {
    // Fall back to the system preference when storage is unavailable.
  }

  try {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'moon' : 'sun'
  } catch {
    return 'sun'
  }
})()

export const currentTheme = ref(initialTheme)

if (typeof document !== 'undefined') {
  document.documentElement.dataset.theme = currentTheme.value
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', currentTheme.value === 'moon' ? '#142a23' : '#f6f4ec')
}

export function setTheme(theme) {
  if (theme !== 'sun' && theme !== 'moon') return
  currentTheme.value = theme
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = currentTheme.value
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', currentTheme.value === 'moon' ? '#142a23' : '#f6f4ec')
  }
  try {
    localStorage.setItem(STORAGE_KEY, currentTheme.value)
  } catch {
    // Theme remains available for the current page even when storage is disabled.
  }
}

export function toggleTheme() {
  setTheme(currentTheme.value === 'sun' ? 'moon' : 'sun')
}
