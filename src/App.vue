<template>
  <v-app>
    <AppHeader />

    <main class="app">
      <HeroSection />
      <ServicesSection />
      <DemosSection />
      <ProcessSection />
      <FinalCtaSection />
    </main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import AppHeader from './components/layout/AppHeader.vue'
import AppFooter from './components/layout/AppFooter.vue'

import HeroSection from './components/sections/HeroSection.vue'
import ServicesSection from './components/sections/ServicesSection.vue'
import DemosSection from './components/sections/DemosSection.vue'
import ProcessSection from './components/sections/ProcessSection.vue'
import FinalCtaSection from './components/sections/FinalCtaSection.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
}
</style>