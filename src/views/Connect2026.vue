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
          <div class="form-card__heading">
            <div class="form-card__gift">
              <v-icon icon="mdi-gift-outline" size="30" />
            </div>

            <div>
              <h2>Solicita tus recursos</h2>
              <p>Completa el formulario y recibe tus 2 eBooks gratis.</p>
            </div>
          </div>

          <form @submit.prevent="submitForm">
            <div class="field-group">
              <label for="nombre">Nombre <span>*</span></label>
              <div class="field-control">
                <v-icon icon="mdi-account-outline" size="21" />
                <input
                  id="nombre"
                  v-model="form.nombre"
                  type="text"
                  placeholder="Tu nombre completo"
                  autocomplete="name"
                  required
                />
              </div>
            </div>

            <div class="field-group">
              <label for="correo">Correo <span>*</span></label>
              <div class="field-control">
                <v-icon icon="mdi-email-outline" size="21" />
                <input
                  id="correo"
                  v-model="form.correo"
                  type="email"
                  placeholder="tu@correo.com"
                  autocomplete="email"
                  required
                />
              </div>
            </div>

            <div class="field-group">
              <label for="whatsapp">WhatsApp <span>*</span></label>
              <div class="field-control">
                <v-icon icon="mdi-whatsapp" size="21" />
                <input
                  id="whatsapp"
                  v-model="form.whatsapp"
                  type="tel"
                  placeholder="+52 33 1234 5678"
                  autocomplete="tel"
                  required
                />
              </div>
              <small class="field-help">
                <v-icon icon="mdi-information-outline" size="16" />
                WhatsApp nos ayuda a darte seguimiento más rápido.
              </small>
            </div>

            <div class="form-row">
              <div class="field-group">
                <label for="perfil">Perfil <span>*</span></label>
                <div class="field-control field-control--select">
                  <v-icon icon="mdi-account-outline" size="21" />
                  <select id="perfil" v-model="form.perfil" required>
                    <option value="" disabled>Selecciona tu perfil</option>
                    <option>Emprendedor</option>
                    <option>Dueño de negocio</option>
                    <option>Docente</option>
                    <option>Estudiante universitario</option>
                    <option>Analista</option>
                    <option>Profesional independiente</option>
                    <option>Otro</option>
                  </select>
                </div>
              </div>

              <div class="field-group">
                <label for="interes">Interés principal <span>*</span></label>
                <div class="field-control field-control--select">
                  <v-icon icon="mdi-bullseye-arrow" size="21" />
                  <select id="interes" v-model="form.interes" required>
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
                </div>
              </div>
            </div>

            <label class="privacy-check">
              <input v-model="form.privacidad" type="checkbox" required />
              <span>
                He leído y acepto el
                <button
                  type="button"
                  class="privacy-link"
                  @click="privacyOpen = true"
                >
                  Aviso de Privacidad
                </button>.
              </span>
            </label>

            <button type="submit" class="form-submit" :disabled="isSubmitting">
              <v-icon icon="mdi-send" size="20" />
              <span>{{ isSubmitting ? 'Enviando...' : 'Quiero mis eBooks' }}</span>
              <v-icon icon="mdi-arrow-right" size="20" />
            </button>

            <div v-if="submitStatus === 'success'" class="form-message form-message--success">
              <v-icon icon="mdi-check-circle-outline" size="21" />
              <span>Listo. Revisa tu correo; ahí recibirás los enlaces para descargar tus eBooks.</span>
            </div>

            <div v-else-if="submitStatus === 'error'" class="form-message form-message--error">
              <v-icon icon="mdi-alert-circle-outline" size="21" />
              <span>No pudimos enviar tus datos. Inténtalo nuevamente en unos segundos.</span>
            </div>
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
      <div class="connect-footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 92" preserveAspectRatio="none">
          <path
            class="connect-footer__wave-fill"
            d="M0 0H1440V26C1180 22 954 42 720 56C474 71 251 71 0 52V0Z"
          />
          <path
            class="connect-footer__wave-line"
            d="M0 52C251 71 474 71 720 56C954 42 1180 22 1440 26"
          />
        </svg>
      </div>

      <div class="connect-footer__inner">
        <PrismaKoreBrand />

        <p class="connect-footer__copyright">
          © 2026 PrismaKore Solutions. Todos los derechos reservados.
        </p>
      </div>
    </footer>
    <div
      v-if="privacyOpen"
      class="privacy-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-title"
      @click.self="privacyOpen = false"
    >
      <div class="privacy-modal__card">
        <button
          type="button"
          class="privacy-modal__close"
          aria-label="Cerrar aviso de privacidad"
          @click="privacyOpen = false"
        >
          ×
        </button>

        <h2 id="privacy-title">Aviso de Privacidad</h2>

        <p>
          PrismaKore Solutions utilizará los datos que proporciones en este
          formulario para enviarte los recursos solicitados, dar seguimiento a
          tu solicitud, conocer tu interés principal y contactarte respecto de
          servicios relacionados con automatización, análisis de datos,
          desarrollo y soluciones digitales.
        </p>

        <p>
          Los datos recabados pueden incluir nombre, correo electrónico,
          WhatsApp, perfil profesional e interés principal. La información
          podrá registrarse en herramientas de seguimiento comercial y
          plataformas tecnológicas necesarias para prestar estos servicios.
        </p>

        <p>
          PrismaKore Solutions no comercializará tus datos personales. Podrás
          solicitar posteriormente la actualización o eliminación de tus datos
          utilizando los medios de contacto publicados por PrismaKore Solutions.
        </p>

        <p class="privacy-modal__note">
          Aviso simplificado para esta campaña. El aviso integral podrá
          complementarse con los datos legales definitivos de PrismaKore
          Solutions.
        </p>

        <button
          type="button"
          class="privacy-modal__accept"
          @click="privacyOpen = false"
        >
          Entendido
        </button>
      </div>
    </div>

  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import PrismaKoreBrand from '@/components/branding/PrismaKoreBrand.vue'

const WEBHOOK_URL = 'https://n8n-n8n.enoxgt.easypanel.host/webhook/connect2026'
//const WEBHOOK_URL = 'https://n8n-n8n.enoxgt.easypanel.host/webhook-test/connect2026'

const form = reactive({
  nombre: '',
  correo: '',
  whatsapp: '',
  perfil: '',
  interes: '',
  privacidad: false
})

const isSubmitting = ref(false)
const submitStatus = ref('')
const privacyOpen = ref(false)

const submitForm = async () => {
  if (isSubmitting.value) return

  isSubmitting.value = true
  submitStatus.value = ''

  const payload = {
    nombre: form.nombre.trim(),
    correo: form.correo.trim(),
    whatsapp: form.whatsapp.trim(),
    perfil: form.perfil,
    interes: form.interes,
    privacidad: form.privacidad ? 'true' : 'false',
    recursos: 'ebook-dax,ebook-excel',
    origen: 'connect-zapopan-2026',
    fechaRegistro: new Date().toISOString()
  }

  try {
    /*
      Enviamos como application/x-www-form-urlencoded y no-cors.
      Esto evita el preflight OPTIONS que suele bloquear n8n
      cuando el formulario está en otro dominio.
    */
    const body = new URLSearchParams(payload)

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      body
    })

    submitStatus.value = 'success'

    form.nombre = ''
    form.correo = ''
    form.whatsapp = ''
    form.perfil = ''
    form.interes = ''
    form.privacidad = false
  } catch (error) {
    console.error('Error enviando formulario Connect2026:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.connect2026 {
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fbff 0%, #ffffff 55%, #eef6ff 100%);
  padding: 32px 16px 0;
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
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid #edf1f7;
  border-radius: 28px;
  padding: 28px;
  box-shadow: 0 22px 60px rgba(25, 52, 100, 0.14);
}

.form-card__heading {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.form-card__gift {
  width: 58px;
  height: 58px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(135deg, #eef0ff 0%, #f6eaff 100%);
  color: #7b35f4;
}

.form-card h2 {
  margin: 0;
  color: #101945;
  font-size: clamp(1.8rem, 3vw, 2.35rem);
  line-height: 1.05;
}

.form-card__heading p {
  margin: 6px 0 0;
  color: #69748d;
  font-size: 0.9rem;
  line-height: 1.35;
}

.form-card form {
  display: grid;
  gap: 16px;
}

.form-submit:disabled {
  opacity: 0.7;
  cursor: wait;
}

.form-message {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 12px 14px;
  border-radius: 12px;
  font-size: 0.86rem;
  line-height: 1.4;
}

.form-message--success {
  color: #17643a;
  background: #edf9f2;
  border: 1px solid #ccebd9;
}

.form-message--error {
  color: #9f2c2c;
  background: #fff2f2;
  border: 1px solid #f2cccc;
}

.field-group {
  min-width: 0;
}

.field-group label {
  display: block;
  margin: 0 0 7px;
  color: #111a46;
  font-size: 0.86rem;
  font-weight: 800;
}

.field-group label span {
  color: #ef3b5d;
}

.field-control {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 48px;
  padding: 0 14px;
  border: 1px solid #cfd9e8;
  border-radius: 12px;
  background: #fff;
  color: #64748b;
  transition: border-color .2s ease, box-shadow .2s ease;
}

.field-control:focus-within {
  border-color: #6d5dfc;
  box-shadow: 0 0 0 3px rgba(109, 93, 252, 0.10);
}

.field-control input,
.field-control select {
  width: 100%;
  min-width: 0;
  padding: 12px 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #1b2a4e;
  font: inherit;
}

.field-control input::placeholder {
  color: #9aa7ba;
}

.field-control select {
  appearance: auto;
  cursor: pointer;
}

.field-help {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 7px;
  color: #65728b;
  font-size: 0.74rem;
  line-height: 1.3;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.privacy-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #69748d;
  font-size: 0.78rem;
  line-height: 1.4;
  cursor: pointer;
}

.privacy-check input {
  width: 16px;
  height: 16px;
  margin-top: 2px;
  accent-color: #6b35ff;
}

.privacy-check a {
  color: #3156d9;
  font-weight: 700;
  text-decoration: none;
}

.privacy-check a:hover {
  text-decoration: underline;
}

.form-submit {
  width: 100%;
  min-height: 56px;
  margin-top: 2px;
  padding: 0 18px;
  border: 0;
  border-radius: 16px;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  align-items: center;
  gap: 10px;
  background: linear-gradient(90deg, #b126f0 0%, #6b35ff 44%, #00b8f4 100%);
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  box-shadow: 0 12px 26px rgba(88, 72, 225, 0.24);
  cursor: pointer;
  transition: transform .18s ease, box-shadow .18s ease;
}

.form-submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 16px 30px rgba(88, 72, 225, 0.30);
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
  margin: 42px -16px 0;
  min-height: 178px;
  padding-top: 58px;
  overflow: hidden;
  color: #fff;
  background: linear-gradient(105deg, #06244c 0%, #07549a 62%, #0075c9 100%);
}

.connect-footer__wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 68px;
  pointer-events: none;
}

.connect-footer__wave svg {
  display: block;
  width: 100%;
  height: 100%;
}

.connect-footer__wave-fill {
  fill: #f8fbff;
}

.connect-footer__wave-line {
  fill: none;
  stroke: #25c7ff;
  stroke-width: 7;
  vector-effect: non-scaling-stroke;
}

.connect-footer__inner {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 8px 18px 26px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

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
  margin-top: 3px;
  color: #fff;
  font-size: 12px;
}

.connect-footer__copyright {
  margin: 10px 0 0 70px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.7rem;
}

@media (max-width: 700px) {
  .connect-footer {
    min-height: 160px;
    padding-top: 54px;
  }

  .connect-footer__wave {
    height: 62px;
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

@media (max-width: 620px) {
  .form-card {
    padding: 22px 18px;
    border-radius: 22px;
  }

  .form-card__heading {
    align-items: flex-start;
  }

  .form-card__gift {
    width: 50px;
    height: 50px;
  }

  .form-row {
    grid-template-columns: 1fr;
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

/* =========================
   AVISO DE PRIVACIDAD
========================= */

.privacy-link {
  padding: 0;

  border: 0;
  background: transparent;

  color: #2457d6;

  font: inherit;
  font-weight: 700;
  text-decoration: underline;

  cursor: pointer;
}

.privacy-modal {
  position: fixed;
  z-index: 9999;
  inset: 0;

  display: grid;
  place-items: center;

  padding: 20px;

  background: rgba(7, 17, 42, 0.68);
}

.privacy-modal__card {
  position: relative;

  width: min(620px, 100%);
  max-height: min(720px, calc(100vh - 40px));
  overflow-y: auto;

  padding: 30px;

  border-radius: 22px;

  background: #ffffff;
  box-shadow: 0 24px 70px rgba(9, 30, 70, 0.28);
}

.privacy-modal__card h2 {
  margin: 0 42px 18px 0;

  color: #101945;

  font-size: 1.8rem;
}

.privacy-modal__card p {
  margin: 0 0 14px;

  color: #4f5d73;

  font-size: 0.95rem;
  line-height: 1.55;
}

.privacy-modal__note {
  padding: 12px 14px;

  border-radius: 12px;

  background: #f5f7fb;

  font-size: 0.85rem !important;
}

.privacy-modal__close {
  position: absolute;
  top: 14px;
  right: 16px;

  width: 36px;
  height: 36px;

  display: grid;
  place-items: center;

  border: 0;
  border-radius: 50%;

  background: #f1f4f8;
  color: #17254d;

  font-size: 1.5rem;

  cursor: pointer;
}

.privacy-modal__accept {
  min-height: 44px;

  padding: 0 20px;

  border: 0;
  border-radius: 12px;

  background: linear-gradient(90deg, #7c2cff, #12b7e8);
  color: #ffffff;

  font-weight: 800;

  cursor: pointer;
}

@media (max-width: 600px) {
  .privacy-modal {
    padding: 12px;
  }

  .privacy-modal__card {
    padding: 24px 20px;
    border-radius: 18px;
  }

  .privacy-modal__card h2 {
    font-size: 1.5rem;
  }
}

</style>