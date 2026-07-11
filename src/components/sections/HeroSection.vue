<template>
  <section class="hero" id="inicio">
    <div class="hero-bg-mark">
      <img :src="prismaMark" alt="" aria-hidden="true" />
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <h1>PrismaKore Solutions</h1>

        <p>
          Sitios web, automatización y soluciones digitales para negocios.
        </p>

        <div class="actions">
          <a
            class="pk-btn pk-btn-primary"
            href="https://ajsaavedra.com/diagnostico/"
            target="_blank"
            rel="noopener"
          >
            Solicitar diagnóstico
          </a>

          <a class="pk-btn pk-btn-outline" href="#demos">
            Ver demos
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import prismaMark from '@/assets/images/pk-transparente.png'
</script>
<style scoped>
  .hero {
    padding-top: 140px;
  }
</style>
