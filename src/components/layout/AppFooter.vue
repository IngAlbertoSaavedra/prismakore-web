<template>
  <footer class="pk-footer">
    <div class="footer-wrap">
      <RouterLink class="footer-brand" to="/" aria-label="PrismaKore Solutions">
        <img
          class="footer-logo"
          :src="prismaMark"
          alt=""
          aria-hidden="true"
        />

        <span class="footer-brand-text">
          Prisma<span>Kore Solutions</span>
        </span>
      </RouterLink>

      <p class="footer-description">
        Sitios web, demos y automatización práctica para presentar mejor tu negocio,
        mostrar tus servicios y facilitar tareas concretas.
      </p>
    </div>

    <div class="footer-bottom">
      <div class="footer-bottom-wrap">
        <p>
          © {{ currentYear }} PrismaKore Solutions. Todos los derechos reservados.
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
    linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.04),
      transparent 34%,
      transparent 72%,
      rgba(47, 180, 255, 0.04)
    );
  pointer-events: none;
}

.footer-wrap {
  position: relative;
  z-index: 1;
  width: min(1180px, calc(100% - 42px));
  margin: 0 auto;
  padding: 42px 0 36px;
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
  transition: transform 0.24s ease, filter 0.24s ease;
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
  max-width: 560px;
  margin: 18px 0 0;
  color: rgba(248, 251, 255, 0.66);
  font-size: 14px;
  line-height: 1.7;
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
}

.footer-bottom p {
  margin: 0;
  color: rgba(248, 251, 255, 0.58);
  font-size: 13px;
  line-height: 1.5;
}

@media (max-width: 640px) {
  .footer-wrap,
  .footer-bottom-wrap {
    width: min(100% - 32px, 1180px);
  }

  .footer-wrap {
    padding: 34px 0 30px;
  }

  .footer-brand-text {
    font-size: 20px;
  }

  .footer-logo {
    width: 42px;
    height: 42px;
  }

  .footer-bottom-wrap {
    min-height: auto;
    padding: 16px 0;
  }
}
</style>
