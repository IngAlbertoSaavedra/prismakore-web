<template>
  <footer class="pk-footer">
    <div class="footer-wrap">
      <div class="footer-main">
        <a class="footer-brand" href="#inicio" aria-label="PrismaKore Solutions">
          <img
            class="footer-logo"
            :src="prismaMark"
            alt=""
            aria-hidden="true"
          />

          <span class="footer-brand-text">
            Prisma<span>Kore Solutions</span>
          </span>
        </a>

        <p class="footer-description">
          Sitios web, demos y automatización práctica para presentar mejor tu negocio,
          mostrar tus servicios y facilitar tareas concretas.
        </p>
      </div>

      <nav class="footer-nav" aria-label="Navegación inferior">
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#demos">Demos</a>
        <a href="#proceso">Proceso</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <div class="footer-contact">
        <span class="footer-label">Primer paso</span>

        <a
          class="footer-cta"
          href="https://ajsaavedra.com/diagnostico/"
          target="_blank"
          rel="noopener"
        >
          Iniciar diagnóstico
        </a>
      </div>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-wrap">
        <p>
          © {{ currentYear }} PrismaKore Solutions. Todos los derechos reservados.
        </p>

        <p class="footer-note">
          Hecho con enfoque práctico, café y una cantidad poco saludable de ajustes visuales.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import prismaMark from '@/assets/images/pk-transparente.png'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.pk-footer {
  position: relative;
  color: #f8fbff;
  background:
    radial-gradient(circle at 16% 10%, rgba(47, 180, 255, 0.12), transparent 28%),
    radial-gradient(circle at 86% 18%, rgba(109, 53, 255, 0.14), transparent 30%),
    linear-gradient(135deg, #050816 0%, #071225 52%, #10182f 100%);
  overflow: hidden;
}

.pk-footer::before {
  content: "";
  position: absolute;
  inset: 0;

  background:
    linear-gradient(120deg, rgba(255, 255, 255, 0.04), transparent 34%, transparent 72%, rgba(47, 180, 255, 0.04));

  pointer-events: none;
}

.footer-wrap {
  position: relative;
  z-index: 1;

  width: min(1180px, calc(100% - 42px));
  margin: 0 auto;
  padding: 46px 0;

  display: grid;
  grid-template-columns: minmax(0, 1.2fr) auto minmax(220px, 0.55fr);
  gap: 42px;
  align-items: center;
}

.footer-main {
  max-width: 520px;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 14px;

  color: inherit;
  text-decoration: none;
}

.footer-logo {
  width: 46px;
  height: 46px;
  display: block;
  object-fit: contain;

  filter: drop-shadow(0 8px 18px rgba(47, 180, 255, 0.18));
  transition:
    transform 0.24s ease,
    filter 0.24s ease;
}

.footer-brand:hover .footer-logo {
  transform: translateY(-2px) rotate(-4deg);
  filter: drop-shadow(0 10px 24px rgba(47, 180, 255, 0.26));
}

.footer-brand-text {
  color: #edf2ff;
  font-size: 22px;
  line-height: 1;
  font-weight: 650;
  letter-spacing: -0.035em;
  white-space: nowrap;
}

.footer-brand-text span {
  color: #2fb4ff;
}

.footer-description {
  max-width: 500px;
  margin: 18px 0 0;

  color: rgba(248, 251, 255, 0.66);
  font-size: 14px;
  line-height: 1.7;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-nav a {
  width: fit-content;

  color: rgba(248, 251, 255, 0.72);
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;

  transition:
    color 0.2s ease,
    transform 0.2s ease;
}

.footer-nav a:hover {
  color: #2fb4ff;
  transform: translateX(3px);
}

.footer-contact {
  justify-self: end;

  padding: 22px;
  width: 100%;
  max-width: 260px;

  border-radius: 18px;
  border: 1px solid rgba(47, 180, 255, 0.18);

  background:
    radial-gradient(circle at 18% 14%, rgba(47, 180, 255, 0.12), transparent 36%),
    rgba(255, 255, 255, 0.055);

  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.16);
}

.footer-label {
  display: block;

  color: #2fb4ff;
  font-size: 12px;
  line-height: 1;
  font-weight: 950;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.footer-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  min-height: 44px;
  margin-top: 16px;
  padding: 0 18px;

  color: #ffffff;
  background: linear-gradient(135deg, #137ec8, #2fb4ff);
  border-radius: 10px;

  font-size: 14px;
  font-weight: 900;
  text-decoration: none;

  box-shadow: 0 16px 32px rgba(47, 180, 255, 0.20);

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.footer-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 42px rgba(47, 180, 255, 0.30);
}

.footer-bottom {
  position: relative;
  z-index: 1;

  border-top: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(0, 0, 0, 0.16);
}

.footer-bottom-wrap {
  width: min(1180px, calc(100% - 42px));
  min-height: 58px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

.footer-bottom p {
  margin: 0;

  color: rgba(248, 251, 255, 0.58);
  font-size: 13px;
  line-height: 1.5;
}

.footer-note {
  text-align: right;
}

@media (max-width: 900px) {
  .footer-wrap {
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: flex-start;
  }

  .footer-nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 14px 22px;
  }

  .footer-contact {
    justify-self: start;
    max-width: 320px;
  }

  .footer-bottom-wrap {
    padding: 18px 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .footer-note {
    text-align: left;
  }
}

@media (max-width: 640px) {
  .footer-wrap,
  .footer-bottom-wrap {
    width: min(100% - 32px, 1180px);
  }

  .footer-wrap {
    padding: 40px 0;
  }

  .footer-brand-text {
    font-size: 20px;
  }

  .footer-logo {
    width: 42px;
    height: 42px;
  }

  .footer-nav {
    flex-direction: column;
    gap: 12px;
  }

  .footer-contact {
    max-width: 100%;
  }
}
</style>