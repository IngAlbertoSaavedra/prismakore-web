<template>
  <section class="hero" id="inicio">
    <div class="hero-bg-mark">
      <img :src="prismaMark" alt="" aria-hidden="true" />
    </div>

    <div class="hero-container">
      <div class="hero-content">
        <h1>PrismaKore Solutions</h1>

        <p>
          Sitios web, demos y automatizaciones prácticas para negocios que quieren presentar mejor
          lo que hacen y facilitar algunas tareas sin complicarse de más.
        </p>

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
  .hero-content {
    max-width: 640px;
    animation: heroTextIn 0.85s ease-out both;
  }

  .hero-content h1 {
    animation: fadeUp 0.85s ease-out both;
  }

  .hero-content p {
    animation: fadeUp 0.85s ease-out 0.12s both;
  }
  .hero-bg-mark {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: min(46vw, 760px);
    opacity: 0.18;
    filter: drop-shadow(0 0 35px rgba(122, 78, 255, 0.25));
    z-index: 2;
    pointer-events: none;
    animation: prismaFloat 7s ease-in-out infinite;
  }

  .hero-bg-mark img {
    width: 100%;
    height: auto;
    display: block;
  }


  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(22px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes heroTextIn {
    from {
      opacity: 0;
      transform: translateX(-18px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes prismaFloat {
    0% {
      transform: translateY(-50%) translateX(0) scale(1);
    }

    50% {
      transform: translateY(-52%) translateX(10px) scale(1.025);
    }

    100% {
      transform: translateY(-50%) translateX(0) scale(1);
    }
  }
</style>
