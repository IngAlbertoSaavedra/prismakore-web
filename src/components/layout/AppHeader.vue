
<template>
  <header class="pk-header">
    <div class="pk-wrap pk-nav">
      <a class="pk-logo" href="#inicio" aria-label="PrismaKore Solutions">
        <span class="pk-logo-lockup">
          <img
            class="pk-logo-mark"
            :src="prismaMark"
            alt=""
            aria-hidden="true"
          />

          <span class="pk-logo-copy">
            <span class="pk-logo-name">
              Prisma<span>Kore Solutions</span>
            </span>
          </span>
        </span>
      </a>

      <nav class="pk-main-nav" aria-label="Navegación principal">
        <a class="active" href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#demos">Demos</a>
        <a href="#planes">Planes</a>
        <a href="#contacto">Contacto</a>
      </nav>

      <a
        class="pk-nav-cta"
        href="https://ajsaavedra.com/diagnostico/"
        target="_blank"
        rel="noopener"
      >
        Solicitar diagnóstico
      </a>
    </div>
  </header>
</template>

<script setup>
  import prismaMark from '@/assets/images/pk-transparente.png'
</script>


<style scoped>
.pk-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background:
    radial-gradient(circle at 78% 34%, rgba(109, 53, 255, 0.16), transparent 28%),
    radial-gradient(circle at 15% 20%, rgba(16, 132, 255, 0.08), transparent 30%),
    linear-gradient(135deg, rgba(4, 7, 20, 0.92) 0%, rgba(6, 11, 31, 0.92) 48%, rgba(8, 8, 34, 0.92) 100%);

  backdrop-filter: blur(18px);
}

.pk-wrap {
  width: min(1180px, calc(100% - 42px));
  margin: 0 auto;
}

.pk-nav {
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 28px;
}

.pk-logo {
  display: flex;
  align-items: center;
  min-width: 350px;
  padding-right: 8px;
  color: inherit;
  text-decoration: none;
}

.pk-logo-lockup {
  display: inline-flex;
  align-items: center;
  gap: 14px;
}

.pk-logo-mark {
  width: 52px;
  height: 52px;
  flex: 0 0 52px;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 8px 18px rgba(109, 53, 255, 0.30));
}

.pk-logo-copy {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.pk-logo-name {
  font-size: 23px;
  font-weight: 500;
  letter-spacing: -0.03em;
  color: #edf2ff;
  white-space: nowrap;
}

.pk-logo-name span {
  color: #2fb4ff;
}

.pk-main-nav {
  display: flex;
  gap: 30px;
  align-items: center;

  font-size: 14px;
  font-weight: 700;
  color: #f3f4ff;
}

.pk-main-nav a {
  color: inherit;
  text-decoration: none;
  opacity: 0.92;
  padding: 33px 0 28px;
  border-bottom: 3px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
}

.pk-main-nav a:hover {
  opacity: 1;
  color: #ffffff;
}

.pk-main-nav a.active {
  color: #a678ff;
  border-color: #7c4dff;
}

.pk-nav-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(135deg, #6d35ff, #9a59ff);
  padding: 14px 22px;
  border-radius: 8px;

  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  white-space: nowrap;
  font-size: 14px;

  box-shadow: 0 16px 34px rgba(109, 53, 255, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.pk-nav-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 20px 42px rgba(109, 53, 255, 0.38);
}

@media (max-width: 980px) {
  .pk-nav {
    height: auto;
    padding: 14px 0;
  }

  .pk-logo {
    min-width: 0;
  }

  .pk-logo-name {
    font-size: 18px;
  }

  .pk-logo-mark {
    width: 42px;
    height: 42px;
    flex-basis: 42px;
  }

  .pk-main-nav,
  .pk-nav-cta {
    display: none;
  }
}
</style>
