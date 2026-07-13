<template>
  <section id="contacto" class="contact-section">
    <div class="contact-wrap">
      <div class="contact-card">
        <div class="contact-content">
          <span class="eyebrow">Contacto</span>

          <h2>Cuéntame qué quieres mejorar de tu negocio</h2>

            <p>
            Puede ser una página nueva, renovar un sitio existente o automatizar una tarea repetitiva.
            Llena el diagnóstico o escríbeme por WhatsApp para revisar tu caso con calma y aterrizar una propuesta clara.
            </p>

          <div class="contact-actions">
            <a
                class="contact-btn contact-btn-outline"
                href="https://wa.me/523317183421?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20PrismaKore%20Solutions.%20Me%20interesa%20revisar%20una%20p%C3%A1gina%2C%20demo%20o%20automatizaci%C3%B3n."
                target="_blank"
                rel="noopener"
                >
                Contactar por WhatsApp
            </a>
          </div>
        </div>

        <div class="contact-side">
          <div class="contact-mini-card">
            <span class="mini-label">Respuesta inicial</span>
            <strong>Revisión del caso</strong>
            <p>
              Primero entendemos qué necesitas y después definimos alcance, tiempos y costo.
            </p>
          </div>

          <div class="contact-mini-card">
            <span class="mini-label">Servicios</span>
            <strong>Web + Automatización</strong>
            <p>
              Sitios, demos, renovación, mantenimiento y procesos digitales según el proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.contact-section {
  position: relative;
  padding: 96px 0;
  color: #ffffff;
  background:
    radial-gradient(circle at 18% 24%, rgba(47, 180, 255, 0.14), transparent 30%),
    radial-gradient(circle at 82% 18%, rgba(109, 53, 255, 0.15), transparent 32%),
    linear-gradient(135deg, #050816 0%, #071225 48%, #10182f 100%);
  overflow: hidden;
}

.contact-section::before {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.045), transparent 28%, transparent 72%, rgba(47, 180, 255, 0.05)),
    radial-gradient(circle at 50% 100%, rgba(47, 180, 255, 0.08), transparent 38%);

  pointer-events: none;
}

.contact-wrap {
  width: min(1180px, calc(100% - 42px));
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.contact-card {
  padding: 42px;

  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 34px;
  align-items: stretch;

  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.10);

  background:
    radial-gradient(circle at 15% 15%, rgba(47, 180, 255, 0.10), transparent 32%),
    rgba(255, 255, 255, 0.055);

  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
}

.contact-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.eyebrow {
  display: inline-flex;
  width: fit-content;
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

.contact-content h2 {
  max-width: 760px;
  margin: 20px 0 0;

  color: #f8fbff;
  font-size: clamp(32px, 4vw, 54px);
  line-height: 1.16;
  letter-spacing: -0.03em;
  font-weight: 750;
}

.contact-content p {
  max-width: 680px;
  margin: 20px 0 0;

  color: rgba(248, 251, 255, 0.72);
  font-size: 17px;
  line-height: 1.7;
}

.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 34px;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-height: 48px;
  padding: 0 22px;
  border-radius: 10px;

  font-size: 15px;
  font-weight: 850;
  text-decoration: none;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;
}

.contact-btn-primary {
  color: #ffffff;
  background: linear-gradient(135deg, #137ec8, #2fb4ff);
  box-shadow: 0 18px 38px rgba(47, 180, 255, 0.24);
}

.contact-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 46px rgba(47, 180, 255, 0.34);
}

.contact-btn-outline {
  color: #2fb4ff;
  border: 1.5px solid rgba(47, 180, 255, 0.58);
  background: rgba(255, 255, 255, 0.035);
}

.contact-btn-outline:hover {
  transform: translateY(-2px);
  border-color: #2fb4ff;
  background: rgba(47, 180, 255, 0.08);
}

.contact-side {
  display: grid;
  gap: 18px;
}

.contact-mini-card {
  padding: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.10);

  background:
    radial-gradient(circle at 18% 18%, rgba(47, 180, 255, 0.10), transparent 38%),
    rgba(255, 255, 255, 0.06);

  box-shadow: 0 18px 46px rgba(0, 0, 0, 0.16);
}

.mini-label {
  color: #2fb4ff;
  font-size: 12px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.contact-mini-card strong {
  margin-top: 14px;

  color: #ffffff;
  font-size: 22px;
  line-height: 1.12;
  letter-spacing: -0.03em;
  font-weight: 850;
}

.contact-mini-card p {
  margin: 12px 0 0;

  color: rgba(248, 251, 255, 0.68);
  font-size: 14px;
  line-height: 1.65;
}

@media (max-width: 900px) {
  .contact-card {
    grid-template-columns: 1fr;
    padding: 34px;
  }
}

@media (max-width: 640px) {
  .contact-section {
    padding: 76px 0;
  }

  .contact-wrap {
    width: min(100% - 32px, 1180px);
  }

  .contact-card {
    padding: 26px;
    border-radius: 22px;
  }

  .contact-actions {
    flex-direction: column;
  }

  .contact-btn {
    width: 100%;
  }
}
</style>