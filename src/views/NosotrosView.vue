<template>
  <AppHeader />

  <main class="about-page">
    <section class="about-hero">
      <div class="about-orb about-orb-one"></div>
      <div class="about-orb about-orb-two"></div>

      <div class="about-wrap about-hero-grid">
        <div class="about-hero-copy">
          <span class="about-eyebrow">Nosotros</span>

          <h1>
            Tecnología que
            <span>devuelve tiempo.</span>
          </h1>

          <p class="about-lead">
            PrismaKore Solutions ayuda a microempresas, PyMEs, emprendedores y
            profesionistas a simplificar su operación mediante soluciones digitales
            y automatizaciones prácticas.
          </p>

          <p class="about-hero-note">
            No buscamos implementar tecnología porque esté de moda. Primero entendemos
            el problema y después elegimos la herramienta que realmente aporta valor.
          </p>
        </div>

        <div class="about-principle-card">
          <span class="principle-label">Nuestra idea central</span>

          <blockquote>
            “Automatizamos lo repetitivo para que puedas enfocarte en lo importante.”
          </blockquote>

          <p>
            Menos tiempo capturando, copiando, buscando y repitiendo. Más tiempo para
            atender, decidir, vender, crear y hacer crecer el negocio.
          </p>
        </div>
      </div>
    </section>

    <section class="about-philosophy">
      <div class="about-wrap">
        <div class="section-heading">
          <span class="about-eyebrow light">Nuestra filosofía</span>

          <h2>Simple de entender. Útil en la operación. Medible en resultados.</h2>

          <p>
            Creemos que la tecnología debe resolver problemas reales, reducir trabajo
            manual y liberar tiempo.
          </p>
        </div>

        <div class="philosophy-grid">
          <article class="philosophy-card">
            <span class="philosophy-number">01</span>
            <h3>Simplifica</h3>
            <p>
              Entendemos el proceso antes de proponer tecnología. Buscamos eliminar pasos
              innecesarios y hacer más clara la forma de trabajar.
            </p>
          </article>

          <article class="philosophy-card">
            <span class="philosophy-number">02</span>
            <h3>Automatiza</h3>
            <p>
              Convertimos tareas repetitivas en procesos más eficientes mediante desarrollo
              web, integraciones, datos, automatización e inteligencia artificial aplicada.
            </p>
          </article>

          <article class="philosophy-card">
            <span class="philosophy-number">03</span>
            <h3>Avanza</h3>
            <p>
              El objetivo es devolver tiempo al cliente para que pueda dedicarlo a actividades
              de mayor valor: atender, vender, decidir, crear o crecer.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="about-purpose">
      <div class="about-wrap purpose-grid">
        <article class="purpose-card mission-card">
          <span class="purpose-kicker">Misión</span>
          <h2>Liberar tiempo con tecnología.</h2>
          <p>
            Ayudar a microempresas, PyMEs y profesionistas a simplificar su operación mediante 
            soluciones digitales y automatizaciones prácticas que reduzcan tareas repetitivas, 
            optimicen el tiempo y mejoren la forma en que trabajan.
          </p>
        </article>

        <article class="purpose-card vision-card">
          <span class="purpose-kicker">Visión</span>
          <h2>Simplificar procesos, mejorar resultados.</h2>
          <p>
            Convertir a PrismaKore Solutions en un aliado tecnológico confiable para pequeños 
            negocios y profesionistas que buscan trabajar mejor mediante procesos más simples, 
            automatizados y eficientes.
          </p>
        </article>
      </div>
    </section>

    <section class="about-principles">
      <div class="about-wrap">
        <div class="section-heading dark-heading">
          <span class="about-eyebrow">Cómo trabajamos</span>
          <h2>Principios que guían nuestro trabajo.</h2>
        </div>

        <div class="principles-list">
          <article v-for="principle in principles" :key="principle.title" class="principle-item">
            <div class="principle-icon">{{ principle.number }}</div>
            <div>
              <h3>{{ principle.title }}</h3>
              <p>{{ principle.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="about-result">
      <div class="about-wrap result-panel">
        <div>
          <span class="result-kicker">Soluciones útiles desde el primer día.</span>
          <h2>QUÉ BUSCAMOS EN CADA PROYECTO.</h2>
        </div>

        <div class="result-copy">
          <p>
            Trabajamos por proyecto, partiendo de una necesidad concreta y 
            buscando que cada solución sea clara, funcional y adecuada al contexto del cliente.
          </p>

          <div class="result-tags" aria-label="Indicadores de resultado">
            <span>Alcance claro</span>
            <span>Implementación práctica</span>
            <span>Comunicación directa</span>
            <span>Evolución gradual</span>
          </div>
        </div>
      </div>
    </section>

   
  </main>

  <AppFooter />
</template>

<script setup>
import AppHeader from '../components/layout/AppHeader.vue'
import AppFooter from '../components/layout/AppFooter.vue'

const principles = [
  {
    number: '01',
    title: 'Resolver necesidades reales',
    description:
      'Partimos del problema y del proceso actual antes de proponer una solución tecnológica.'
  },
  {
    number: '02',
    title: 'Mantener las soluciones simples',
    description:
      'Buscamos implementar lo necesario, evitando complejidad innecesaria y permitiendo que la solución pueda crecer cuando el negocio lo requiera.'
  },
  {
    number: '03',
    title: 'Automatizar con propósito',
    description:
      'Automatizamos tareas repetitivas cuando esto permite reducir trabajo manual, ahorrar tiempo y mejorar la operación.'
  },
  {
    number: '04',
    title: 'Medir resultados',
    description:
      'Evaluamos cada proyecto con base en mejoras concretas, como tiempo ahorrado, reducción de errores, mayor control de la información y satisfacción del cliente.'
  }
]
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  color: #0d1530;
  background: #ffffff;
}

.about-wrap {
  width: min(1180px, calc(100% - 42px));
  margin: 0 auto;
}

.about-hero {
  position: relative;
  overflow: hidden;
  padding: 176px 0 104px;
  color: #f8fbff;
  background:
    radial-gradient(circle at 16% 20%, rgba(47, 180, 255, 0.16), transparent 30%),
    radial-gradient(circle at 84% 22%, rgba(109, 53, 255, 0.22), transparent 34%),
    linear-gradient(135deg, #050816 0%, #071225 48%, #15062f 100%);
}

.about-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.04), transparent 30%, transparent 72%, rgba(47, 180, 255, 0.06));
  pointer-events: none;
}

.about-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(18px);
  pointer-events: none;
}

.about-orb-one {
  width: 340px;
  height: 340px;
  right: 5%;
  top: 18%;
  background: rgba(109, 53, 255, 0.12);
}

.about-orb-two {
  width: 240px;
  height: 240px;
  left: -60px;
  bottom: -80px;
  background: rgba(47, 180, 255, 0.09);
}

.about-hero-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(340px, 0.75fr);
  gap: 70px;
  align-items: center;
}

.about-eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 999px;
  color: #5bc7ff;
  background: rgba(47, 180, 255, 0.10);
  border: 1px solid rgba(47, 180, 255, 0.22);
  font-size: 13px;
  font-weight: 900;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.about-eyebrow.light {
  color: #2fb4ff;
}

.about-hero h1 {
  max-width: 760px;
  margin: 20px 0 0;
  color: #ffffff;
  font-size: clamp(44px, 5.6vw, 74px);
  line-height: 1.03;
  letter-spacing: -0.045em;
  font-weight: 850;
}

.about-hero h1 span {
  display: block;
  color: #2fb4ff;
}

.about-lead {
  max-width: 700px;
  margin: 26px 0 0;
  color: rgba(248, 251, 255, 0.82);
  font-size: 19px;
  line-height: 1.65;
}

.about-hero-note {
  max-width: 650px;
  margin: 20px 0 0;
  color: rgba(248, 251, 255, 0.60);
  font-size: 15px;
  line-height: 1.65;
}

.about-principle-card {
  padding: 32px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.11);
  background:
    radial-gradient(circle at 18% 12%, rgba(47, 180, 255, 0.12), transparent 36%),
    rgba(255, 255, 255, 0.055);
  box-shadow: 0 26px 70px rgba(0, 0, 0, 0.24);
  backdrop-filter: blur(14px);
}

.principle-label {
  color: #a678ff;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.about-principle-card blockquote {
  margin: 18px 0 0;
  color: #ffffff;
  font-size: clamp(24px, 2.5vw, 36px);
  line-height: 1.2;
  letter-spacing: -0.03em;
  font-weight: 800;
}

.about-principle-card p {
  margin: 22px 0 0;
  color: rgba(248, 251, 255, 0.67);
  font-size: 15px;
  line-height: 1.65;
}

.about-philosophy {
  padding: 96px 0;
  color: #f8fbff;
  background:
    radial-gradient(circle at 14% 10%, rgba(47, 180, 255, 0.10), transparent 30%),
    radial-gradient(circle at 86% 18%, rgba(109, 53, 255, 0.12), transparent 32%),
    linear-gradient(135deg, #071022 0%, #10182f 54%, #151236 100%);
}

.section-heading {
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}

.section-heading h2 {
  margin: 18px 0 0;
  color: #ffffff;
  font-size: clamp(32px, 3.6vw, 50px);
  line-height: 1.12;
  letter-spacing: -0.035em;
  font-weight: 800;
}

.section-heading p {
  max-width: 720px;
  margin: 20px auto 0;
  color: rgba(248, 251, 255, 0.68);
  font-size: 17px;
  line-height: 1.7;
}

.philosophy-grid {
  margin-top: 54px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.philosophy-card {
  min-height: 290px;
  padding: 28px;
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.10);
  background: rgba(255, 255, 255, 0.055);
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.16);
}

.philosophy-number {
  display: inline-grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 15px;
  color: #2fb4ff;
  background: rgba(47, 180, 255, 0.10);
  border: 1px solid rgba(47, 180, 255, 0.24);
  font-size: 13px;
  font-weight: 950;
}

.philosophy-card h3 {
  margin: 24px 0 0;
  color: #ffffff;
  font-size: 24px;
  font-weight: 800;
}

.philosophy-card p {
  margin: 14px 0 0;
  color: rgba(248, 251, 255, 0.66);
  font-size: 14px;
  line-height: 1.7;
}

.about-purpose {
  padding: 96px 0;
  background:
    radial-gradient(circle at 16% 20%, rgba(109, 53, 255, 0.07), transparent 28%),
    linear-gradient(180deg, #ffffff 0%, #f7f9ff 100%);
}

.purpose-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 26px;
}

.purpose-card {
  padding: 36px;
  min-height: 360px;
  border-radius: 24px;
  border: 1px solid #e4e9f5;
  background: #ffffff;
  box-shadow: 0 22px 60px rgba(14, 30, 62, 0.08);
}

.mission-card {
  border-top: 4px solid #2fb4ff;
}

.vision-card {
  border-top: 4px solid #7c4dff;
}

.purpose-kicker {
  color: #137ec8;
  font-size: 12px;
  font-weight: 950;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.vision-card .purpose-kicker {
  color: #6d35ff;
}

.purpose-card h2 {
  margin: 18px 0 0;
  color: #10182f;
  font-size: clamp(28px, 3vw, 40px);
  line-height: 1.14;
  letter-spacing: -0.03em;
  font-weight: 800;
}

.purpose-card p {
  margin: 22px 0 0;
  color: #5d6679;
  font-size: 16px;
  line-height: 1.75;
}

.about-principles {
  padding: 96px 0;
  background: #ffffff;
}

.dark-heading h2 {
  color: #10182f;
}

.principles-list {
  max-width: 920px;
  margin: 52px auto 0;
  display: grid;
  gap: 16px;
}

.principle-item {
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 22px;
  padding: 24px 26px;
  border-radius: 18px;
  border: 1px solid #e6eaf3;
  background: #fbfcff;
}

.principle-icon {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  color: #ffffff;
  background: linear-gradient(135deg, #137ec8, #7c4dff);
  font-size: 13px;
  font-weight: 950;
}

.principle-item h3 {
  margin: 2px 0 0;
  color: #111b37;
  font-size: 19px;
  font-weight: 850;
}

.principle-item p {
  margin: 8px 0 0;
  color: #667084;
  font-size: 14px;
  line-height: 1.65;
}

.about-result {
  padding: 0 0 96px;
  background: #ffffff;
}

.result-panel {
  padding: 42px;
  border-radius: 24px;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 54px;
  color: #f8fbff;
  background:
    radial-gradient(circle at 18% 18%, rgba(47, 180, 255, 0.14), transparent 36%),
    linear-gradient(135deg, #071225 0%, #10182f 58%, #17103d 100%);
}

.result-kicker,
.cta-kicker {
  color: #5bc7ff;
  font-size: 12px;
  font-weight: 950;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.result-panel h2 {
  margin: 14px 0 0;
  color: #ffffff;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.result-copy p {
  margin: 0;
  color: rgba(248, 251, 255, 0.72);
  font-size: 16px;
  line-height: 1.7;
}

.result-tags {
  margin-top: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.result-tags span {
  padding: 9px 12px;
  border-radius: 999px;
  color: #dfeaff;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.10);
  font-size: 12px;
  font-weight: 800;
}

.about-cta {
  padding: 0 0 96px;
  background: #ffffff;
}

.cta-panel {
  padding: 38px 42px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 34px;
  background:
    radial-gradient(circle at 14% 14%, rgba(47, 180, 255, 0.12), transparent 34%),
    #f4f7ff;
  border: 1px solid #dfe6f4;
}

.cta-panel h2 {
  max-width: 760px;
  margin: 12px 0 0;
  color: #10182f;
  font-size: clamp(26px, 2.8vw, 38px);
  line-height: 1.18;
  letter-spacing: -0.03em;
}

.about-cta-button {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 24px;
  border-radius: 11px;
  color: #ffffff;
  background: linear-gradient(135deg, #6d35ff, #2fb4ff);
  box-shadow: 0 18px 40px rgba(77, 94, 255, 0.24);
  text-decoration: none;
  font-size: 14px;
  font-weight: 900;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.about-cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 48px rgba(77, 94, 255, 0.32);
}

@media (max-width: 960px) {
  .about-hero {
    padding-top: 150px;
  }

  .about-hero-grid,
  .purpose-grid,
  .result-panel {
    grid-template-columns: 1fr;
  }

  .about-hero-grid {
    gap: 42px;
  }

  .philosophy-grid {
    grid-template-columns: 1fr;
  }

  .purpose-card {
    min-height: 0;
  }

  .cta-panel {
    align-items: flex-start;
    flex-direction: column;
  }
}

@media (max-width: 640px) {
  .about-wrap {
    width: min(100% - 32px, 1180px);
  }

  .about-hero {
    padding: 126px 0 72px;
  }

  .about-hero h1 {
    font-size: clamp(40px, 13vw, 58px);
  }

  .about-lead {
    font-size: 17px;
  }

  .about-principle-card,
  .purpose-card,
  .result-panel,
  .cta-panel {
    padding: 26px 22px;
  }

  .about-philosophy,
  .about-purpose,
  .about-principles {
    padding: 72px 0;
  }

  .about-result,
  .about-cta {
    padding-bottom: 72px;
  }

  .principle-item {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .principle-icon {
    width: 46px;
    height: 46px;
  }

  .about-cta-button {
    width: 100%;
  }
}
</style>
