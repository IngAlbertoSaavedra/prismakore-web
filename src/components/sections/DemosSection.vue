<template>
  <section id="demos" class="demos-section">
    <div class="demos-wrap">
      <div class="section-heading">
        <span class="eyebrow">Demos</span>

        <h2>Proyectos de muestra para distintos tipos de negocio</h2>

        <p>
          Ejemplos visuales de páginas que pueden adaptarse a negocios, servicios o propuestas comerciales.
        </p>
      </div>

      <v-slide-group
        class="demos-slide"
        show-arrows
        center-active
      >
        <v-slide-group-item
          v-for="demo in demos"
          :key="demo.title"
        >
          <v-hover
            v-slot="{ isHovering, props }"
            open-delay="120"
            close-delay="120"
          >
            <a
              v-bind="props"
              class="demo-card"
              :class="{ 'is-hovering': isHovering }"
              :href="demo.href"
              target="_blank"
              rel="noopener"
              :aria-label="`Ver demo ${demo.title}`"
            >
              <img
                class="demo-image"
                :src="demo.image"
                :alt="demo.title"
              >

              <span class="demo-overlay"></span>

              <span class="demo-title">
                {{ demo.title }}
              </span>
            </a>
          </v-hover>
        </v-slide-group-item>
      </v-slide-group>
    </div>
  </section>
</template>

<script setup>
import { demos } from '../../data/demos'
</script>

<style scoped>
.demos-section {
  position: relative;
  padding: 92px 0 96px;
  background:
    radial-gradient(circle at 18% 20%, rgba(47, 180, 255, 0.08), transparent 30%),
    radial-gradient(circle at 82% 14%, rgba(109, 53, 255, 0.10), transparent 32%),
    linear-gradient(180deg, #f7f9ff 0%, #ffffff 100%);
  color: #0d1530;
  overflow: hidden;
}

.demos-wrap {
  width: min(1180px, calc(100% - 42px));
  margin: 0 auto;
}

.section-heading {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 8px 14px;
  border-radius: 999px;

  background: rgba(47, 180, 255, 0.10);
  color: #1676e8;

  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.02em;
}

.section-heading h2 {
  margin: 18px 0 0;

  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.18;
  letter-spacing: -0.028em;
  font-weight: 750;
  color: #10182f;
}

.section-heading p {
  max-width: 700px;
  margin: 18px auto 0;

  color: #566178;
  font-size: 17px;
  line-height: 1.7;
}

.demos-slide {
  margin-top: 52px;
  background: transparent;
}

/* Vuetify slide group cleanup */
:deep(.v-slide-group) {
  background: transparent;
}

:deep(.v-slide-group__container) {
  background: transparent;
  overflow: hidden;
}

:deep(.v-slide-group__wrapper) {
  background: transparent;
  overflow: hidden;
}

:deep(.v-slide-group__content) {
  align-items: center;
  padding: 28px 0 60px;
  background: transparent;

  transition: transform 0.55s cubic-bezier(0.22, 1, 0.36, 1) !important;
  will-change: transform;
}

:deep(.v-slide-group__container) {
  background: transparent;
  overflow: hidden;
  scroll-behavior: smooth;
}

:deep(.v-slide-group__wrapper) {
  background: transparent;
  overflow: hidden;
  scroll-behavior: smooth;
}

/* Arrows */
:deep(.v-slide-group__prev),
:deep(.v-slide-group__next) {
  min-width: 58px;
  background: transparent;
}

:deep(.v-slide-group__prev .v-icon),
:deep(.v-slide-group__next .v-icon) {
  color: #6d35ff;
  opacity: 1;
}

:deep(.v-slide-group__prev--disabled),
:deep(.v-slide-group__next--disabled) {
  opacity: 0.22;
}

.demo-card {
  position: relative;

  width: 360px;
  height: 245px;
  margin: 0 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 18px;
  overflow: hidden;

  color: #ffffff;
  text-decoration: none;

  background: #050816;
  box-shadow: 0 8px 22px rgba(13, 21, 48, 0.10);

  transform: scale(1);
  transform-origin: center center;

  transition:
    transform 0.28s ease,
    box-shadow 0.28s ease;
}

.demo-card.is-hovering {
  transform: scale(1.035);
  box-shadow:
    0 3px 9px rgba(13, 21, 48, 0.24),
    0 18px 38px rgba(13, 21, 48, 0.14);
}

.demo-image {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: top center;

  filter: brightness(0.98) saturate(1.04);
  transition:
    inset 0.32s ease,
    width 0.32s ease,
    height 0.32s ease,
    filter 0.32s ease;
}

.demo-card.is-hovering .demo-image {
  inset: 0;
  width: 100%;
  height: 100%;
  filter: brightness(0.88) saturate(1.08);
}

.demo-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;

  background:
    linear-gradient(180deg, rgba(5, 8, 22, 0.03), rgba(5, 8, 22, 0.28)),
    radial-gradient(circle at 50% 35%, rgba(109, 53, 255, 0.08), transparent 46%);

  transition: background 0.3s ease;
}

.demo-card.is-hovering .demo-overlay {
  background:
    linear-gradient(180deg, rgba(5, 8, 22, 0.02), rgba(5, 8, 22, 0.22)),
    radial-gradient(circle at 50% 35%, rgba(47, 180, 255, 0.08), transparent 48%);
}

.demo-title {
  position: relative;
  z-index: 2;

  max-width: 84%;
  padding: 10px 18px 12px;
  border-radius: 14px;

  color: #ffffff;
  text-align: center;

  font-size: 26px;
  line-height: 1.05;
  font-weight: 800;
  letter-spacing: -0.025em;

  background: rgba(5, 8, 22, 0.46);
  backdrop-filter: blur(6px);

  text-shadow:
    0 8px 24px rgba(0, 0, 0, 0.55),
    0 2px 8px rgba(0, 0, 0, 0.65);

  transform: translateY(0);
  transition:
    transform 0.28s ease,
    background 0.28s ease;
}

.demo-card.is-hovering .demo-title {
  transform: translateY(-2px);
  background: rgba(5, 8, 22, 0.56);
}

@media (max-width: 720px) {
    .demo-card.is-hovering {
    transform: scale(1.02);
    }
  .demos-section {
    padding: 72px 0;
  }

  .demos-wrap {
    width: min(100% - 32px, 1180px);
  }

  .section-heading {
    text-align: left;
  }

  .section-heading p {
    margin-left: 0;
    margin-right: 0;
  }

  .demos-slide {
    margin-top: 36px;
  }

  :deep(.v-slide-group__content) {
    padding: 14px 0 32px;
  }

  .demo-card {
    width: 300px;
    height: 215px;
    margin-inline: 8px;
  }

  .demo-title {
    font-size: 23px;
  }

  :deep(.v-slide-group__prev),
  :deep(.v-slide-group__next) {
    display: none;
  }
}
</style>