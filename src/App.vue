<script setup>
import SiteHeader from './components/SiteHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ServiceAreas from './components/ServiceAreas.vue'
import ServicesSection from './components/ServicesSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ContactSection from './components/ContactSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import WhatsAppButton from './components/WhatsAppButton.vue'
import WhatsAppContactDialog from './components/WhatsAppContactDialog.vue'

const marketingServices = [
  'Gestión de redes sociales y LinkedIn empresarial',
  'Email marketing y campañas digitales',
  'Contenido para WhatsApp y comunicación con medios',
  'Diseño digital e impreso: RRSS, reels, mailing y piezas gráficas',
  'Brochures, catálogos, presentaciones y papelería',
  'Identidad corporativa y mantención de sitios web',
  'Producción y difusión de eventos y actividades',
  'Influencers, medios y colaboraciones estratégicas',
]

const technologyServices = [
  'Desarrollo de páginas web y aplicaciones',
  'Software a medida y plataformas empresariales',
  'Integración de sistemas y APIs',
  'Automatización de procesos',
  'Bases de datos y reportes',
  'Consultoría tecnológica',
  'Soporte y mantención informática',
]

const processSteps = [
  { number: '01', title: 'Escuchamos', text: 'Conocemos tu negocio, tus objetivos y lo que hoy necesitas resolver.' },
  { number: '02', title: 'Proponemos', text: 'Definimos contigo un plan claro, priorizado y ajustado a tu realidad.' },
  { number: '03', title: 'Desarrollamos', text: 'Implementamos cada solución con coordinación y atención al detalle.' },
  { number: '04', title: 'Acompañamos', text: 'Revisamos resultados y ajustamos el trabajo cuando tu proyecto evoluciona.' },
]
</script>

<template>
  <div class="min-h-screen overflow-hidden bg-ivory text-ink">
    <SiteHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <ServiceAreas />
      <ServicesSection :marketing-services="marketingServices" :technology-services="technologyServices" />
      <ProcessSection :steps="processSteps" />
      <ExperienceSection />
      <ContactSection />
    </main>
    <SiteFooter />
    <WhatsAppButton />
    <WhatsAppContactDialog />
  </div>
</template>
