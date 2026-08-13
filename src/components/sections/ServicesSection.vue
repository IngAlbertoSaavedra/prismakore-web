<template>
  <section id="servicios" class="services-section">
    <div class="services-wrap">
      <div class="section-heading">
        <span class="eyebrow">Servicios</span>

        <h2>
          Soluciones digitales para negocios que quieren avanzar sin complicarse
        </h2>

        <p>
          Desde una página clara para vender mejor hasta automatizaciones que reducen trabajo
          manual. Nada de humo corporativo, porque para eso ya existe LinkedIn.
        </p>
      </div>

      <div class="services-grid">
        <v-hover
          v-for="(service, index) in services"
          :key="service.title"
          v-slot="{ isHovering, props }"
          open-delay="100"
          close-delay="120"
        >
          <article
            v-bind="props"
            class="service-card"
            :class="{
              'is-hovering': isDesktop ? isHovering : tarjetaActiva === index,
            }"
            tabindex="0"
            role="button"
            :aria-expanded="tarjetaActiva === index"
            @click="alternarTarjeta(index)"
            @keydown.enter.prevent="alternarTarjeta(index)"
            @keydown.space.prevent="alternarTarjeta(index)"
          >
            <div class="card-front">
              <span class="service-kicker">
                {{ service.kicker }}
              </span>

              <h3>{{ service.title }}</h3>

              <p>
                {{ service.description }}
              </p>

              <span
                v-if="!isDesktop"
                class="mobile-hint"
              >
                Toca para ver precio
              </span>
            </div>

            <div class="card-hover">
              <span class="price-label">
                {{ service.priceLabel }}
              </span>

              <strong class="price">
                {{ service.price }}
              </strong>

              <h3>{{ service.title }}</h3>

              <p>
                {{ service.hoverText }}
              </p>

              <a
                :href="service.href"
                class="service-action"
                @click.stop
              >
                Me interesa
              </a>

              <button
                v-if="!isDesktop"
                type="button"
                class="mobile-back"
                @click.stop="cerrarTarjeta"
              >
                Volver
              </button>
            </div>
          </article>
        </v-hover>
      </div>

      <p class="services-note">
        Precios base. Si el proyecto requiere más secciones, integraciones o diseño avanzado,
        se cotiza antes. La sorpresa debe ser el resultado, no la factura.
      </p>
    </div>
  </section>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { services } from '../../data/services'

const tarjetaActiva = ref(null)
const isDesktop = ref(true)

const revisarPantalla = () => {
  isDesktop.value = window.matchMedia('(hover: hover) and (pointer: fine)').matches

  if (isDesktop.value) {
    tarjetaActiva.value = null
  }
}

const alternarTarjeta = (index) => {
  if (isDesktop.value) return

  tarjetaActiva.value =
    tarjetaActiva.value === index
      ? null
      : index
}

const cerrarTarjeta = () => {
  tarjetaActiva.value = null
}

onMounted(() => {
  revisarPantalla()

  window.addEventListener('resize', revisarPantalla)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', revisarPantalla)
})
</script>

<style scoped>
.services-section {
  position: relative;
  padding: 88px 0 92px;
  background:
    radial-gradient(circle at 14% 18%, rgba(109, 53, 255, 0.08), transparent 28%),
    radial-gradient(circle at 86% 10%, rgba(47, 180, 255, 0.10), transparent 30%),
    linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%);
  color: #0d1530;
  overflow: hidden;
}

.services-wrap {
  width: min(1180px, calc(100% - 42px));
  margin: 0 auto;
  position: relative;
  z-index: 1;
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
  color: #137ec8;
  border: 1px solid rgba(47, 180, 255, 0.18);

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
  max-width: 690px;
  margin: 18px auto 0;

  color: #566178;
  font-size: 17px;
  line-height: 1.7;
}

.services-grid {
  margin-top: 48px;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.service-card {
  position: relative;

  min-height: 310px;
  padding: 26px 24px;

  display: flex;
  flex-direction: column;

  color: inherit;

  background: rgba(255, 255, 255, 0.92);
  border: 1px solid #e7eaf2;
  border-radius: 18px;
  box-shadow: 0 18px 46px rgba(13, 21, 48, 0.08);

  overflow: hidden;
  cursor: pointer;

  transform: translateY(0);
  transition:
    transform 0.26s ease,
    box-shadow 0.26s ease,
    border-color 0.26s ease;
}

.service-card.is-hovering {
  transform: translateY(-6px);
  border-color: rgba(47, 180, 255, 0.30);
  box-shadow: 0 24px 58px rgba(16, 24, 47, 0.13);
}

.service-card::before {
  content: "";
  position: absolute;
  inset: 0 0 auto 0;

  height: 3px;

  background: linear-gradient(
    90deg,
    rgba(47, 180, 255, 0),
    rgba(47, 180, 255, 0.62),
    rgba(16, 24, 47, 0.18),
    rgba(47, 180, 255, 0)
  );

  opacity: 0;
  transition: opacity 0.24s ease;
}

.service-card.is-hovering::before {
  opacity: 1;
}

.card-front,
.card-hover {
  position: absolute;
  inset: 0;

  padding: 26px 24px;

  display: flex;
  flex-direction: column;

  transition:
    opacity 0.24s ease,
    transform 0.24s ease;
}

.card-front {
  opacity: 1;
  transform: translateY(0);
}

.service-card.is-hovering .card-front {
  opacity: 0;
  transform: translateY(-12px);
  pointer-events: none;
}

.card-hover {
  opacity: 0;
  transform: translateY(18px);
  pointer-events: none;

  background:
    radial-gradient(circle at 18% 14%, rgba(47, 180, 255, 0.10), transparent 34%),
    radial-gradient(circle at 86% 16%, rgba(16, 24, 47, 0.06), transparent 34%),
    linear-gradient(135deg, #ffffff 0%, #f7fbff 100%);
}

.service-card.is-hovering .card-hover {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

.service-kicker {
  display: inline-flex;
  width: fit-content;

  padding: 8px 12px;
  border-radius: 999px;

  color: #137ec8;
  background: rgba(47, 180, 255, 0.08);
  border: 1px solid rgba(47, 180, 255, 0.16);

  font-size: 12px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: 0.02em;

  box-shadow: 0 10px 28px rgba(47, 180, 255, 0.08);
}

.service-card h3 {
  margin: 30px 0 0;

  color: #10182f;
  font-size: 21px;
  line-height: 1.25;
  letter-spacing: -0.02em;
  font-weight: 800;
}

.service-card p {
  margin: 16px 0 0;

  color: #566178;
  font-size: 14px;
  line-height: 1.65;
}

.price-label {
  color: #137ec8;
  font-size: 13px;
  font-weight: 900;
}

.price {
  margin-top: 8px;

  color: #10182f;
  font-size: clamp(36px, 3vw, 48px);
  line-height: 1;
  letter-spacing: -0.06em;
  font-weight: 950;
}

.card-hover h3 {
  margin-top: 24px;
}

.card-hover p {
  color: #303a52;
}

.service-action {
  width: fit-content;
  margin-top: auto;
  padding: 10px 16px;

  border-radius: 999px;

  background: #10182f;
  color: #ffffff;

  font-size: 13px;
  font-weight: 800;
  text-decoration: none;

  transition:
    transform 0.2s ease,
    background 0.2s ease;
}

.service-action:hover {
  transform: translateY(-2px);
  background: #137ec8;
}

.mobile-hint {
  display: none;
}

.mobile-back {
  display: none;
}

.services-note {
  max-width: 760px;
  margin: 34px auto 0;

  color: #303a52;
  font-size: 14px;
  line-height: 1.6;
  text-align: center;
}

@media (max-width: 1100px) {
  .services-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .services-section {
    padding: 72px 0;
  }

  .services-wrap {
    width: min(100% - 32px, 1180px);
  }

  .services-grid {
    grid-template-columns: 1fr;
    margin-top: 34px;
  }

  .service-card {
    min-height: 290px;
  }

  .section-heading {
    text-align: left;
  }

  .section-heading p {
    margin-left: 0;
    margin-right: 0;
  }

  .services-note {
    text-align: left;
  }

  .mobile-hint {
    display: inline-block;
    margin-top: auto;

    color: #137ec8;
    font-size: 12px;
    font-weight: 800;
  }

  .mobile-back {
    display: inline-flex;
    width: fit-content;

    margin-top: 10px;
    padding: 0;

    border: 0;
    background: transparent;

    color: #566178;
    font-size: 12px;
    font-weight: 700;

    cursor: pointer;
  }
}
</style>