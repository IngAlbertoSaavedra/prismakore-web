<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="contact-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      @click.self="closeModal"
    >
      <div class="contact-modal__card">
        <button
          type="button"
          class="contact-modal__close"
          aria-label="Cerrar formulario de contacto"
          @click="closeModal"
        >
          ×
        </button>

        <div class="contact-modal__heading">
          <div class="contact-modal__icon">
            <v-icon icon="mdi-message-text-outline" size="28" />
          </div>

          <div>
            <span class="contact-modal__eyebrow">CONTACTO</span>
            <h2 id="contact-modal-title">Cuéntanos qué necesitas</h2>
            <p>
              Déjanos tus datos y una referencia de lo que te interesa. Nos pondremos en contacto contigo.
            </p>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="submitForm">
          <div class="field-group">
            <label for="contact-nombre">Nombre <span>*</span></label>
            <div class="field-control">
              <v-icon icon="mdi-account-outline" size="21" />
              <input
                id="contact-nombre"
                v-model="form.nombre"
                type="text"
                placeholder="Tu nombre completo"
                autocomplete="name"
                required
              />
            </div>
          </div>

          <div class="field-group">
            <label for="contact-correo">Correo <span>*</span></label>
            <div class="field-control">
              <v-icon icon="mdi-email-outline" size="21" />
              <input
                id="contact-correo"
                v-model="form.correo"
                type="email"
                placeholder="tu@correo.com"
                autocomplete="email"
                required
              />
            </div>
          </div>

          <div class="field-group">
            <label for="contact-whatsapp">WhatsApp <span>*</span></label>
            <div class="field-control">
              <v-icon icon="mdi-whatsapp" size="21" />
              <input
                id="contact-whatsapp"
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
              <label for="contact-perfil">Perfil <span>*</span></label>
              <div class="field-control field-control--select">
                <v-icon icon="mdi-account-outline" size="21" />
                <select id="contact-perfil" v-model="form.perfil" required>
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
              <label for="contact-interes">Interés principal <span>*</span></label>
              <div class="field-control field-control--select">
                <v-icon icon="mdi-bullseye-arrow" size="21" />
                <select id="contact-interes" v-model="form.interes" required>
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
              <button type="button" class="privacy-link" @click="privacyOpen = true">
                Aviso de Privacidad
              </button>.
            </span>
          </label>

          <button type="submit" class="form-submit" :disabled="isSubmitting">
            <v-icon icon="mdi-send" size="20" />
            <span>{{ isSubmitting ? 'Enviando...' : 'Enviar mis datos' }}</span>
            <v-icon icon="mdi-arrow-right" size="20" />
          </button>

          <div v-if="submitStatus === 'success'" class="form-message form-message--success">
            <v-icon icon="mdi-check-circle-outline" size="21" />
            <span>Gracias por tus datos. Pronto nos pondremos en contacto contigo.</span>
          </div>

          <div v-else-if="submitStatus === 'error'" class="form-message form-message--error">
            <v-icon icon="mdi-alert-circle-outline" size="21" />
            <span>No pudimos enviar tus datos. Inténtalo nuevamente en unos segundos.</span>
          </div>
        </form>
      </div>

      <div
        v-if="privacyOpen"
        class="privacy-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-privacy-title"
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

          <h2 id="contact-privacy-title">Aviso de Privacidad</h2>

          <p>
            PrismaKore Solutions utilizará los datos que proporciones para dar seguimiento a tu solicitud,
            conocer tu interés principal y contactarte respecto de servicios relacionados con automatización,
            análisis de datos, desarrollo y soluciones digitales.
          </p>

          <p>
            Los datos recabados pueden incluir nombre, correo electrónico, WhatsApp, perfil profesional e
            interés principal. La información podrá registrarse en herramientas de seguimiento comercial y
            plataformas tecnológicas necesarias para prestar estos servicios.
          </p>

          <p>
            PrismaKore Solutions no comercializará tus datos personales. Podrás solicitar posteriormente la
            actualización o eliminación de tus datos utilizando los medios de contacto publicados por
            PrismaKore Solutions.
          </p>

          <p class="privacy-modal__note">
            Aviso simplificado. El aviso integral podrá complementarse con los datos legales definitivos de
            PrismaKore Solutions.
          </p>

          <button type="button" class="privacy-modal__accept" @click="privacyOpen = false">
            Entendido
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { onBeforeUnmount, reactive, ref, watch } from 'vue'

const props = defineProps({
  open: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const WEBHOOK_URL = 'https://n8n-n8n.enoxgt.easypanel.host/webhook/connect2026'
// const WEBHOOK_URL = 'https://n8n-n8n.enoxgt.easypanel.host/webhook-test/connect2026'

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

const resetForm = () => {
  form.nombre = ''
  form.correo = ''
  form.whatsapp = ''
  form.perfil = ''
  form.interes = ''
  form.privacidad = false
}

const closeModal = () => {
  if (isSubmitting.value) return
  privacyOpen.value = false
  submitStatus.value = ''
  emit('close')
}

const handleKeydown = (event) => {
  if (event.key === 'Escape' && props.open) {
    if (privacyOpen.value) {
      privacyOpen.value = false
      return
    }

    closeModal()
  }
}

watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    if (isOpen) {
      window.addEventListener('keydown', handleKeydown)
    } else {
      window.removeEventListener('keydown', handleKeydown)
      privacyOpen.value = false
    }
  }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', handleKeydown)
})

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
    recursos: '',
    origen: 'PKS',
    fechaRegistro: new Date().toISOString()
  }

  try {
    const body = new URLSearchParams(payload)

    await fetch(WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      body
    })

    submitStatus.value = 'success'
    resetForm()

    setTimeout(() => {
      closeModal()
    }, 1200)
    
  } catch (error) {
    console.error('Error enviando formulario de contacto PKS:', error)
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-modal {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: grid;
  place-items: center;
  padding: 24px;
  overflow-y: auto;
  background: rgba(4, 8, 24, 0.72);
  backdrop-filter: blur(10px);
}

.contact-modal__card {
  position: relative;
  width: min(720px, 100%);
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 30px;
  border: 1px solid #e4e9f3;
  border-radius: 26px;
  background: #ffffff;
  box-shadow: 0 30px 90px rgba(8, 18, 51, 0.28);
}

.contact-modal__close,
.privacy-modal__close {
  position: absolute;
  top: 16px;
  right: 18px;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 50%;
  background: #f2f5fa;
  color: #132043;
  font-size: 26px;
  line-height: 1;
  cursor: pointer;
}

.contact-modal__heading {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding-right: 44px;
  margin-bottom: 24px;
}

.contact-modal__icon {
  width: 54px;
  height: 54px;
  flex: 0 0 54px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  color: #ffffff;
  background: linear-gradient(135deg, #268fe8 0%, #7048ff 100%);
}

.contact-modal__eyebrow {
  display: block;
  margin-bottom: 6px;
  color: #168bd8;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.contact-modal__heading h2 {
  margin: 0;
  color: #101a3c;
  font-size: clamp(1.8rem, 4vw, 2.4rem);
  line-height: 1.05;
}

.contact-modal__heading p {
  margin: 8px 0 0;
  color: #64708a;
  line-height: 1.55;
}

.contact-form {
  display: grid;
  gap: 16px;
}

.field-group {
  display: grid;
  gap: 7px;
}

.field-group label {
  color: #101945;
  font-size: 0.86rem;
  font-weight: 800;
}

.field-group label span {
  color: #e33c63;
}

.field-control {
  min-height: 52px;
  display: flex;
  align-items: center;
  gap: 11px;
  padding: 0 15px;
  border: 1px solid #cfd8e9;
  border-radius: 12px;
  color: #64708a;
  background: #ffffff;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.field-control:focus-within {
  border-color: #4b91ff;
  box-shadow: 0 0 0 3px rgba(75, 145, 255, 0.12);
}

.field-control input,
.field-control select {
  width: 100%;
  min-width: 0;
  border: 0;
  outline: 0;
  background: transparent;
  color: #142046;
  font: inherit;
}

.field-control input::placeholder {
  color: #9aa6bd;
}

.field-control select {
  cursor: pointer;
}

.field-help {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #64708a;
  font-size: 0.76rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.privacy-check {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  color: #56627d;
  font-size: 0.8rem;
  line-height: 1.45;
}

.privacy-check input {
  margin-top: 3px;
}

.privacy-link {
  padding: 0;
  border: 0;
  background: transparent;
  color: #126fd3;
  font: inherit;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
}

.form-submit {
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 0 20px;
  border: 0;
  border-radius: 14px;
  color: #ffffff;
  background: linear-gradient(90deg, #7d2eff 0%, #2e72ff 52%, #10b4e7 100%);
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(72, 92, 255, 0.24);
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

.privacy-modal {
  position: fixed;
  inset: 0;
  z-index: 1010;
  display: grid;
  place-items: center;
  padding: 24px;
  overflow-y: auto;
  background: rgba(4, 8, 24, 0.74);
}

.privacy-modal__card {
  position: relative;
  width: min(680px, 100%);
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 30px;
  border-radius: 24px;
  background: #ffffff;
  box-shadow: 0 30px 90px rgba(8, 18, 51, 0.3);
}

.privacy-modal__card h2 {
  margin: 0 44px 18px 0;
  color: #101a3c;
}

.privacy-modal__card p {
  color: #56627d;
  line-height: 1.65;
}

.privacy-modal__note {
  padding: 12px 14px;
  border-radius: 12px;
  background: #f4f7fb;
  font-size: 0.84rem;
}

.privacy-modal__accept {
  min-height: 44px;
  padding: 0 20px;
  border: 0;
  border-radius: 12px;
  color: #ffffff;
  background: #172449;
  font-weight: 800;
  cursor: pointer;
}

@media (max-width: 680px) {
  .contact-modal {
    padding: 12px;
    place-items: start center;
  }

  .contact-modal__card {
    max-height: none;
    padding: 24px 18px;
    border-radius: 20px;
  }

  .contact-modal__heading {
    gap: 12px;
  }

  .contact-modal__icon {
    width: 46px;
    height: 46px;
    flex-basis: 46px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .privacy-modal {
    padding: 12px;
  }

  .privacy-modal__card {
    padding: 24px 18px;
  }
}
</style>
