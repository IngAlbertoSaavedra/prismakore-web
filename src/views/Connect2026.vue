<template>
  <main class="connect2026">
    <div class="event-topbar">
      <div class="event-topbar__inner">
        <v-icon icon="mdi-calendar-month-outline" size="22" />

        <strong>CONNECT ZAPOPAN 2026</strong>

        <span class="event-topbar__separator">•</span>

        <span>Acceso a recursos exclusivos</span>
      </div>
    </div>
    
    <section class="hero-section">
      <div class="hero-content">
        <div class="brand-block">
            <PrismaKoreBrand />
        </div>

        <div class="hero-copy">
          <h1>
            Recibe <span>2 recursos gratis</span><br />
            para impulsar tu negocio
          </h1>

          <p>
            Déjanos tus datos y te enviaremos un
            <strong>eBook de Funciones DAX</strong> +
            un <strong>eBook de Excel moderno</strong>,
            además de una propuesta de diagnóstico inicial
            para detectar oportunidades de automatización.
          </p>

          <div class="benefits-row">
            <article class="benefit-item">
              <div class="benefit-icon">
                <v-icon icon="mdi-chart-bar" />
              </div>

              <div>
                <h3>Conocimiento práctico</h3>
                <p>Recursos aplicables desde el día uno.</p>
              </div>
            </article>

            <article class="benefit-item">
              <div class="benefit-icon">
                <v-icon icon="mdi-cog-outline" />
              </div>

              <div>
                <h3>Más eficiencia</h3>
                <p>Automatiza procesos y ahorra tiempo.</p>
              </div>
            </article>

            <article class="benefit-item">
              <div class="benefit-icon">
                <v-icon icon="mdi-rocket-launch-outline" />
              </div>

              <div>
                <h3>Haz crecer tu negocio</h3>
                <p>Convierte tus datos en oportunidades.</p>
              </div>
            </article>
          </div>

          <div class="ebooks-showcase">
            <div class="ebook ebook--dax">
                <span class="ebook__label">eBook</span>

                <strong class="ebook__title">
                    Funciones<br />
                    DAX
                </strong>

                <span class="ebook__subtitle">
                    De los datos<br />
                    a las decisiones
                </span>

                <div class="ebook__bars">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <small>PrismaKore Solutions</small>
            </div>

            <div class="ebook ebook--excel">
                <span class="ebook__label">eBook</span>

                <strong class="ebook__title">
                    Excel<br />
                    moderno
                </strong>

                <span class="ebook__subtitle">
                    Productividad<br />
                    en la era de la IA
                </span>

                <div class="ebook__excel-icon">X</div>

                <small>PrismaKore Solutions</small>
            </div>
          </div>

        <div class="ebooks-caption">
            Tu próxima versión<br />
            empieza con mejores herramientas
        </div>
        </div>

        <div class="form-card">
          <h2>Solicita tus recursos</h2>

          <form @submit.prevent="submitForm">
            <input
              v-model="form.nombre"
              type="text"
              placeholder="Nombre"
              required
            />

            <input
              v-model="form.correo"
              type="email"
              placeholder="Correo"
              required
            />

            <input
              v-model="form.whatsapp"
              type="tel"
              placeholder="WhatsApp"
              required
            />

            <select v-model="form.perfil" required>
              <option value="" disabled>Selecciona tu perfil</option>
              <option>Emprendedor</option>
              <option>Dueño de negocio</option>
              <option>Docente</option>
              <option>Estudiante universitario</option>
              <option>Analista</option>
              <option>Profesional independiente</option>
              <option>Otro</option>
            </select>

            <select v-model="form.interes" required>
              <option value="" disabled>Selecciona un interés</option>
              <option>Excel</option>
              <option>Power BI / DAX</option>
              <option>Automatización</option>
              <option>IA aplicada</option>
              <option>Sitio web</option>
              <option>Desarrollo de sistemas</option>
              <option>Diagnóstico</option>
              <option>Otro</option>
            </select>

            <button type="submit">
              Quiero mis eBooks
            </button>
          </form>
        </div>
      </div>
      <section class="services-mini">
        <h2>
          ¿Qué hace <span>PrismaKore Solutions?</span>
        </h2>

        <div class="services-mini__grid">

          <article class="service-mini">
            <div class="service-mini__icon">
              <v-icon icon="mdi-chart-bar" />
            </div>

            <div>
              <h3>Power BI</h3>
              <p>Visualiza. Decide. Avanza.</p>
            </div>
          </article>

          <article class="service-mini">
            <div class="service-mini__icon service-mini__icon--excel">
              X
            </div>

            <div>
              <h3>Excel</h3>
              <p>Trabaja más inteligente.</p>
            </div>
          </article>

          <article class="service-mini">
            <div class="service-mini__icon">
              <v-icon icon="mdi-cog-outline" />
            </div>

            <div>
              <h3>Automatización</h3>
              <p>Procesos que fluyen.</p>
            </div>
          </article>

          <article class="service-mini">
            <div class="service-mini__icon service-mini__icon--ia">
              ✦
            </div>

            <div>
              <h3>IA aplicada</h3>
              <p>Ideas que se convierten en resultados.</p>
            </div>
          </article>

        </div>
      </section>
    </section>
    <footer class="connect-footer">
      <div class="connect-footer__wave"></div>

      <div class="connect-footer__inner">
        <PrismaKoreBrand />

        <p class="connect-footer__copyright">
          © 2026 PrismaKore Solutions. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import PrismaKoreBrand from '@/components/branding/PrismaKoreBrand.vue'

const form = reactive({
  nombre: '',
  correo: '',
  whatsapp: '',
  perfil: '',
  interes: ''
})

const submitForm = () => {
  console.log(form)
}
</script>

<style scoped>
.connect2026 {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fbff 0%, #ffffff 55%, #eef6ff 100%);
  padding: 32px 16px;
}

.hero-content {
  max-width: 1100px;
  margin: 0 auto;
}

.hero-copy {
  margin-top: 24px;
}

.hero-copy h1 {
  margin: 18px 0 12px;
  color: #0d1b4c;
  font-size: clamp(2.2rem, 7vw, 4.8rem);
  line-height: 1.05;
}

.hero-copy h1 span {
  background: linear-gradient(90deg, #1d8cff, #7d3cff, #b329ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-copy p {
  max-width: 650px;
  color: #44506a;
  font-size: 1.1rem;
  line-height: 1.6;
}

.form-card {
  margin-top: 32px;
  background: #ffffff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 18px 50px rgba(25, 52, 100, 0.12);
}

.form-card h2 {
  margin-bottom: 18px;
  color: #111a46;
}

form {
  display: grid;
  gap: 14px;
}

input,
select {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #d8e1ef;
  border-radius: 12px;
  font-size: 1rem;
  background: white;
}

button {
  margin-top: 6px;
  padding: 15px 18px;
  border: none;
  border-radius: 14px;
  background: linear-gradient(90deg, #6b35ff, #009dff);
  color: white;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
}

.event-topbar {
  margin: -32px -16px 32px;
  background: linear-gradient(90deg, #6d28d9 0%, #2563eb 55%, #06b6d4 100%);
  color: #ffffff;
}

.event-topbar__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
}

.event-topbar__icon {
  font-size: 1.15rem;
}

.event-topbar__separator {
  opacity: 0.75;
}

.ebooks-showcase {
  margin-top: 30px;
  display: flex;
  align-items: flex-end;
  gap: 22px;
  padding-left: 20px;
}

.ebook {
  position: relative;
  width: 205px;
  min-height: 285px;
  padding: 26px 22px 20px;
  border-radius: 5px 16px 16px 5px;
  color: #ffffff;
  box-shadow:
    -10px 12px 20px rgba(18, 28, 70, 0.18),
    0 18px 40px rgba(18, 28, 70, 0.15);
  transform: perspective(700px) rotateY(-4deg);
  overflow: hidden;
}

.ebook::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(
      140deg,
      rgba(255,255,255,0.15),
      transparent 35%,
      rgba(255,255,255,0.04)
    );
  pointer-events: none;
}

.ebook--dax {
  background: linear-gradient(145deg, #1f31a8 0%, #121963 60%, #07123e 100%);
}

.ebook--excel {
  min-height: 270px;
  background: linear-gradient(145deg, #005d55 0%, #003d38 55%, #022826 100%);
}

.ebook__label {
  display: inline-block;
  margin-bottom: 14px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #43e5ff;
  color: #07224a;
  font-size: 0.75rem;
  font-weight: 700;
}

.ebook__title {
  display: block;
  font-size: 2rem;
  line-height: 0.95;
}

.ebook__subtitle {
  display: block;
  margin-top: 12px;
  font-size: 0.9rem;
  line-height: 1.25;
  opacity: 0.9;
}

.ebook small {
  position: absolute;
  left: 22px;
  bottom: 18px;
  font-size: 0.67rem;
  opacity: 0.8;
}

.ebook__bars {
  position: absolute;
  right: 22px;
  bottom: 60px;
  height: 90px;
  display: flex;
  align-items: flex-end;
  gap: 5px;
}

.ebook__bars span {
  display: block;
  width: 22px;
  border-radius: 5px 5px 0 0;
  background: linear-gradient(#ffd34d, #f59e0b);
}

.ebook__bars span:nth-child(1) {
  height: 45px;
}

.ebook__bars span:nth-child(2) {
  height: 68px;
}

.ebook__bars span:nth-child(3) {
  height: 90px;
}

.ebook__excel-icon {
  position: absolute;
  right: 24px;
  bottom: 70px;
  width: 72px;
  height: 72px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #21a366, #107c41);
  color: #ffffff;
  font-size: 2.7rem;
  font-weight: 800;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}

.ebooks-caption {
  margin: 16px 0 0 100px;
  width: fit-content;
  color: #173a91;
  font-size: 1.15rem;
  font-style: italic;
  line-height: 1.25;
  transform: rotate(-3deg);
}

@media (max-width: 600px) {
  .ebooks-showcase {
    justify-content: center;
    gap: 12px;
    padding-left: 0;
  }

  .ebook {
    width: 145px;
    min-height: 215px;
    padding: 18px 15px;
  }

  .ebook--excel {
    min-height: 205px;
  }

  .ebook__title {
    font-size: 1.45rem;
  }

  .ebook__subtitle {
    font-size: 0.72rem;
  }

  .ebook__bars {
    transform: scale(0.7);
    transform-origin: bottom right;
  }

  .ebook__excel-icon {
    width: 50px;
    height: 50px;
    font-size: 1.8rem;
  }

  .ebook small {
    left: 15px;
    font-size: 0.52rem;
  }

  .ebooks-caption {
    margin: 14px auto 0;
    text-align: center;
    font-size: 0.95rem;
  }
}

.benefits-row {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  min-width: 0;
}

.benefit-icon {
  width: 48px;
  height: 48px;
  flex-shrink: 0;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background: linear-gradient(
    135deg,
    #eef3ff,
    #efe8ff
  );

  color: #2447c8;

  font-size: 1.45rem;
  font-weight: 700;
}

.benefit-item h3 {
  margin: 2px 0 5px;

  color: #102157;

  font-size: 0.98rem;
  line-height: 1.15;
}

.benefit-item p {
  margin: 0;

  color: #52617a;

  font-size: 0.82rem;
  line-height: 1.35;
}

.services-mini {
  max-width: 1100px;
  margin: 55px auto 0;
  padding: 0 10px 36px;
}

.services-mini h2 {
  margin: 0 0 24px;
  color: #0d1b4c;
  font-size: clamp(1.7rem, 4vw, 2.3rem);
  font-weight: 800;
}

.services-mini h2 span {
  background: linear-gradient(
    90deg,
    #163dbe,
    #00a7e9
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services-mini__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.service-mini {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 10px 24px;

  border-right: 1px solid #dce5f1;
}

.service-mini:first-child {
  padding-left: 0;
}

.service-mini:last-child {
  border-right: none;
}

.service-mini__icon {
  width: 48px;
  height: 48px;

  flex-shrink: 0;

  display: grid;
  place-items: center;

  color: #1748c9;

  font-size: 1.8rem;
  font-weight: 800;
}

.service-mini__icon--excel {
  width: 42px;
  height: 42px;

  border-radius: 4px;

  background: linear-gradient(
    135deg,
    #21a366,
    #107c41
  );

  color: white;
}

.service-mini__icon--ia {
  color: #bd24e9;
  font-size: 2.3rem;
}

.service-mini h3 {
  margin: 0 0 4px;

  color: #102157;

  font-size: 1rem;
  font-weight: 800;
}

.service-mini p {
  margin: 0;

  color: #52617a;

  font-size: 0.82rem;
  line-height: 1.3;
}

.connect-footer {
  position: relative;
  margin: 35px -16px -32px;
  min-height: 150px;
  padding-top: 42px;

  background: linear-gradient(
    105deg,
    #06244c 0%,
    #07549a 62%,
    #0075c9 100%
  );

  color: #fff;
  overflow: hidden;
}

/* franja celeste de transición */
.connect-footer::before {
  content: "";
  position: absolute;
  top: 19px;
  left: -3%;
  width: 106%;
  height: 14px;

  background: linear-gradient(
    90deg,
    #45d1ff,
    #278eff,
    #13c7ee
  );

  border-radius: 50% 50% 0 0;
  transform: rotate(-1.2deg);
}

/* onda blanca */
.connect-footer__wave {
  position: absolute;
  top: -27px;
  left: -3%;

  width: 106%;
  height: 58px;

  background: #fff;

  border-radius: 0 0 50% 50%;
  transform: rotate(-1.2deg);
}

.connect-footer__inner {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;

  padding: 16px 32px 25px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

/* branding más parecido a la referencia */
.connect-footer :deep(.pk-brand) {
  gap: 12px;
}

.connect-footer :deep(.pk-brand__mark) {
  width: 58px;
  height: 58px;
}

.connect-footer :deep(.pk-brand__name) {
  color: #fff;
  font-size: 28px;
}

.connect-footer :deep(.pk-brand__name span) {
  color: #35c7ff;
}

.connect-footer :deep(.pk-brand__tagline) {
  color: #fff;
  font-size: 12px;
  margin-top: 3px;
}

.connect-footer__copyright {
  margin: 10px 0 0 70px;

  color: rgba(255,255,255,.85);
  font-size: 0.7rem;
}

@media (max-width: 700px) {
  .connect-footer {
    min-height: 140px;
  }

  .connect-footer__inner {
    padding-left: 24px;
    padding-right: 24px;
  }

  .connect-footer__copyright {
    margin-left: 0;
  }
}

@media (max-width: 800px) {
  .services-mini__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px 0;
  }

  .service-mini {
    padding: 10px 15px;
  }

  .service-mini:nth-child(2) {
    border-right: none;
  }

  .service-mini:nth-child(3) {
    padding-left: 0;
  }
}

@media (max-width: 500px) {
  .services-mini {
    margin-top: 38px;
  }

  .services-mini__grid {
    grid-template-columns: 1fr;
  }

  .service-mini {
    padding: 12px 0;
    border-right: none;
    border-bottom: 1px solid #e5ecf5;
  }

  .service-mini:last-child {
    border-bottom: none;
  }
}

@media (max-width: 700px) {
  .benefits-row {
    grid-template-columns: 1fr;
    gap: 14px;
  }

  .benefit-item {
    align-items: center;
  }
}

@media (max-width: 600px) {
  .event-topbar__inner {
    font-size: 0.78rem;
    gap: 7px;
  }
}

@media (min-width: 900px) {
  .hero-content {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 40px;
    align-items: start;
  }

  .brand-block,
  .hero-copy {
    grid-column: 1;
  }

  .form-card {
    grid-column: 2;
    grid-row: 1 / span 2;
    margin-top: 0;
  }
}
</style>