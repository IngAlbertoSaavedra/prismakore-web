<template>
  <section id="proceso" class="process-section">
    <div class="process-wrap">
      <div class="section-heading">
        <span class="eyebrow">Proceso</span>

        <h2>Una forma simple de llevar tu idea a una solución publicada</h2>

        <p>
          Trabajamos por etapas claras para que sepas qué se hará, cuánto cuesta y qué sigue.
          Sin venderte una caja negra disfrazada de innovación, porque ya bastante castigo es leer propuestas infladas.
        </p>
      </div>

      <div class="process-layout">
        <div
          v-for="step in processSteps"
          :key="step.number"
          class="process-card"
        >
          <span class="step-number">
            {{ step.number }}
          </span>

          <div class="step-content">
            <h3>{{ step.title }}</h3>

            <p>
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>

      <div class="process-note">
        <strong>La idea es avanzar sin complicarte.</strong>
        Primero dejamos claro el alcance, después construimos y ajustamos con base en lo acordado.
      </div>
    </div>
  </section>
</template>

<script setup>
const processSteps = [
  {
    number: '01',
    title: 'Revisamos la necesidad',
    description:
      'Vemos qué quieres lograr, qué tienes actualmente y qué problema necesita resolver la página o automatización.'
  },
  {
    number: '02',
    title: 'Definimos alcance y propuesta',
    description:
      'Aterrizamos qué incluye el proyecto, qué no incluye, tiempos aproximados y costo antes de empezar.'
  },
  {
    number: '03',
    title: 'Diseñamos y construimos',
    description:
      'Se arma la solución con estructura clara, diseño profesional y enfoque en que realmente pueda usarse.'
  },
  {
    number: '04',
    title: 'Publicamos y ajustamos',
    description:
      'Se publica la página o flujo, se revisan detalles finales y se deja funcionando con acompañamiento inicial.'
  }
]
</script>

<style scoped>
.process-section {
  position: relative;
  padding: 96px 0;
  color: #ffffff;
  background:
    radial-gradient(circle at 18% 20%, rgba(47, 180, 255, 0.13), transparent 30%),
    radial-gradient(circle at 84% 18%, rgba(109, 53, 255, 0.16), transparent 34%),
    linear-gradient(135deg, #071022 0%, #10182f 48%, #151236 100%);
  overflow: hidden;
}

.process-section::before {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.04), transparent 28%, transparent 70%, rgba(47, 180, 255, 0.05)),
    radial-gradient(circle at 50% 100%, rgba(47, 180, 255, 0.08), transparent 38%);

  pointer-events: none;
}

.process-wrap {
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

  color: #2fb4ff;
  background: rgba(47, 180, 255, 0.10);
  border: 1px solid rgba(47, 180, 255, 0.22);

  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.02em;
}

.section-heading h2 {
  margin: 18px 0 0;

  font-size: clamp(30px, 3vw, 44px);
  line-height: 1.16;
  letter-spacing: -0.035em;
  font-weight: 750;
  color: #f8fbff;
}

.section-heading p {
  max-width: 720px;
  margin: 18px auto 0;

  color: rgba(248, 251, 255, 0.72);
  font-size: 17px;
  line-height: 1.7;
}

.process-layout {
  position: relative;
  margin-top: 56px;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}

.process-layout::before {
  content: "";
  position: absolute;
  top: 42px;
  left: 7%;
  right: 7%;

  height: 1px;

  background: linear-gradient(
    90deg,
    rgba(47, 180, 255, 0),
    rgba(47, 180, 255, 0.42),
    rgba(47, 180, 255, 0)
  );
}

.process-card {
  position: relative;

  min-height: 270px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 26px;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.10);

  background:
    radial-gradient(circle at 20% 12%, rgba(47, 180, 255, 0.10), transparent 35%),
    rgba(255, 255, 255, 0.055);

  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(14px);

  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background 0.24s ease,
    box-shadow 0.24s ease;
}

.process-card:hover {
  transform: translateY(-6px);
  border-color: rgba(47, 180, 255, 0.32);
  background:
    radial-gradient(circle at 20% 12%, rgba(47, 180, 255, 0.16), transparent 35%),
    rgba(255, 255, 255, 0.075);

  box-shadow: 0 24px 58px rgba(0, 0, 0, 0.25);
}

.step-number {
  width: 58px;
  height: 58px;
  border-radius: 18px;

  display: grid;
  place-items: center;

  color: #2fb4ff;
  background: rgba(47, 180, 255, 0.10);
  border: 1px solid rgba(47, 180, 255, 0.26);

  font-size: 16px;
  font-weight: 950;

  box-shadow: 0 14px 34px rgba(47, 180, 255, 0.12);
}

.step-content h3 {
  margin: 0;

  color: #ffffff;
  font-size: 20px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  font-weight: 800;
}

.step-content p {
  margin: 14px 0 0;

  color: rgba(248, 251, 255, 0.70);
  font-size: 14px;
  line-height: 1.65;
}

.process-note {
  max-width: 820px;
  margin: 42px auto 0;
  padding: 20px 24px;

  border-radius: 18px;
  border: 1px solid rgba(47, 180, 255, 0.18);

  background: rgba(255, 255, 255, 0.055);
  color: rgba(248, 251, 255, 0.76);

  text-align: center;
  font-size: 15px;
  line-height: 1.6;
  backdrop-filter: blur(12px);
}

.process-note strong {
  color: #ffffff;
}

@media (max-width: 1100px) {
  .process-layout {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .process-layout::before {
    display: none;
  }
}

@media (max-width: 640px) {
  .process-section {
    padding: 76px 0;
  }

  .process-wrap {
    width: min(100% - 32px, 1180px);
  }

  .section-heading {
    text-align: left;
  }

  .section-heading p {
    margin-left: 0;
    margin-right: 0;
  }

  .process-layout {
    grid-template-columns: 1fr;
    margin-top: 36px;
  }

  .process-card {
    min-height: auto;
  }

  .process-note {
    text-align: left;
  }
}
</style>