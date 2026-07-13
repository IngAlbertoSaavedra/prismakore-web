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
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ active: activeSection === item.id }"
          @click="activeSection = item.id"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import prismaMark from '@/assets/images/pk-transparente.png'

const activeSection = ref('inicio')

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'demos', label: 'Demos' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'contacto', label: 'Contacto' }
]

const updateActiveSection = () => {
  const scrollPosition = window.scrollY + 180
  const documentHeight = document.documentElement.scrollHeight
  const windowHeight = window.innerHeight
  const isNearBottom = window.scrollY + windowHeight >= documentHeight - 80

  if (isNearBottom) {
    activeSection.value = 'contacto'
    return
  }

  let currentSection = navItems[0].id

  for (const item of navItems) {
    const section = document.getElementById(item.id)

    if (!section) continue

    if (scrollPosition >= section.offsetTop) {
      currentSection = item.id
    }
  }

  activeSection.value = currentSection
}

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
})
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
  animation: headerDrop 0.65s ease-out both;
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
  overflow: visible;
}

.pk-logo-lockup {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 14px;
  overflow: visible;
}

.pk-logo-mark {
  position: relative;
  z-index: 4;

  width: 52px;
  height: 52px;
  flex: 0 0 52px;

  display: block;
  object-fit: contain;

  opacity: 1;
  transform: translateX(0) scale(1);
  filter: drop-shadow(0 8px 18px rgba(109, 53, 255, 0.30));

  will-change: transform, opacity, filter;
}

.pk-logo-copy {
  position: relative;
  z-index: 2;

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

.pk-logo:hover .pk-logo-mark {
  animation: prismaSweep 1.65s linear both;
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

@keyframes headerDrop {
  from {
    opacity: 0;
    transform: translateY(-18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes prismaSweep {
  0% {
    transform: translateX(0) scale(1);
    opacity: 1;
    filter: drop-shadow(0 8px 18px rgba(109, 53, 255, 0.30));
  }

  52% {
    transform: translateX(285px) scale(0.94);
    opacity: 0.02;
    filter: drop-shadow(0 4px 12px rgba(47, 180, 255, 0.06));
  }

  52.01% {
    transform: translateX(-26px) scale(0.94);
    opacity: 0;
    filter: drop-shadow(0 4px 12px rgba(47, 180, 255, 0.06));
  }

  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
    filter: drop-shadow(0 8px 18px rgba(109, 53, 255, 0.30));
  }
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

  .pk-main-nav {
    display: none;
  }

  @keyframes prismaSweep {
    0% {
      transform: translateX(0) scale(1);
      opacity: 1;
      filter: drop-shadow(0 8px 18px rgba(109, 53, 255, 0.30));
    }

    38% {
      transform: translateX(112px) scale(0.98);
      opacity: 0.48;
      filter: drop-shadow(0 8px 20px rgba(47, 180, 255, 0.22));
    }

    54% {
      transform: translateX(205px) scale(0.94);
      opacity: 0.03;
      filter: drop-shadow(0 4px 12px rgba(47, 180, 255, 0.06));
    }

    55% {
      transform: translateX(-18px) scale(0.94);
      opacity: 0;
      filter: drop-shadow(0 4px 12px rgba(47, 180, 255, 0.06));
    }

    75% {
      transform: translateX(-8px) scale(0.98);
      opacity: 0.44;
      filter: drop-shadow(0 8px 18px rgba(47, 180, 255, 0.20));
    }

    100% {
      transform: translateX(0) scale(1);
      opacity: 1;
      filter: drop-shadow(0 8px 18px rgba(109, 53, 255, 0.30));
    }
  }
}
</style>