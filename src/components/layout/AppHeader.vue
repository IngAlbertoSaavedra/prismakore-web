<template>
  <header class="pk-header">
    <div class="pk-wrap pk-nav">
      <RouterLink
        class="pk-logo"
        to="/"
        aria-label="PrismaKore Solutions"
        @click="closeMobileMenu"
      >
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
      </RouterLink>

      <nav class="pk-main-nav" aria-label="Navegación principal">
        <template v-for="item in navItems" :key="item.label">
          <button
            v-if="item.action === 'contact'"
            type="button"
            class="pk-nav-button"
            @click="openContactModal"
          >
            {{ item.label }}
          </button>

          <RouterLink
            v-else
            :to="item.to"
            :class="{ active: isItemActive(item) }"
            @click="handleNavClick(item)"
          >
            {{ item.label }}
          </RouterLink>
        </template>
      </nav>

      <button
        class="pk-menu-toggle"
        type="button"
        :class="{ open: mobileOpen }"
        :aria-expanded="mobileOpen"
        aria-controls="pk-mobile-menu"
        :aria-label="mobileOpen ? 'Cerrar menú' : 'Abrir menú'"
        @click="mobileOpen = !mobileOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        id="pk-mobile-menu"
        class="pk-mobile-menu"
      >
        <nav class="pk-mobile-nav" aria-label="Navegación móvil">
          <template v-for="item in navItems" :key="`mobile-${item.label}`">
            <button
              v-if="item.action === 'contact'"
              type="button"
              class="pk-mobile-link"
              @click="openContactModal"
            >
              {{ item.label }}
            </button>

            <RouterLink
              v-else
              :to="item.to"
              class="pk-mobile-link"
              :class="{ active: isItemActive(item) }"
              @click="handleMobileNavClick(item)"
            >
              {{ item.label }}
            </RouterLink>
          </template>
        </nav>
      </div>
    </transition>

    <ContactModal :open="contactOpen" @close="contactOpen = false" />
  </header>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import prismaMark from '@/assets/images/pk-transparente.png'
import ContactModal from './ContactModal.vue'

const route = useRoute()
const activeSection = ref('inicio')
const contactOpen = ref(false)
const mobileOpen = ref(false)

const navItems = [
  { id: 'inicio', label: 'Inicio', to: { path: '/', hash: '#inicio' } },
  { id: 'nosotros', label: 'Nosotros', to: { path: '/nosotros' }, routeName: 'nosotros' },
  { id: 'servicios', label: 'Servicios', to: { path: '/', hash: '#servicios' } },
  { id: 'demos', label: 'Demos', to: { path: '/', hash: '#demos' } },
  { id: 'proceso', label: 'Proceso', to: { path: '/', hash: '#proceso' } },
  { id: 'contacto', label: 'Contacto', action: 'contact' }
]

const homeSectionItems = navItems.filter((item) => !item.routeName && !item.action)

const closeMobileMenu = () => {
  mobileOpen.value = false
}

const openContactModal = () => {
  closeMobileMenu()
  contactOpen.value = true
}

const isItemActive = (item) => {
  if (item.action) return false

  if (item.routeName) {
    return route.name === item.routeName
  }

  return route.name === 'home' && activeSection.value === item.id
}

const handleNavClick = (item) => {
  if (!item.routeName && !item.action) {
    activeSection.value = item.id
  }
}

const handleMobileNavClick = (item) => {
  handleNavClick(item)
  closeMobileMenu()
}

const updateActiveSection = () => {
  if (route.name !== 'home') return

  const scrollPosition = window.scrollY + 180
  const documentHeight = document.documentElement.scrollHeight
  const windowHeight = window.innerHeight
  const isNearBottom = window.scrollY + windowHeight >= documentHeight - 80

  let currentSection = homeSectionItems[0].id

  for (const item of homeSectionItems) {
    const section = document.getElementById(item.id)

    if (!section) continue

    if (scrollPosition >= section.offsetTop) {
      currentSection = item.id
    }
  }

  if (isNearBottom && document.getElementById('proceso')) {
    currentSection = 'proceso'
  }

  activeSection.value = currentSection
}

const handleResize = () => {
  if (window.innerWidth > 980) {
    closeMobileMenu()
  }
}

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeMobileMenu()
  }
}

watch(
  () => route.fullPath,
  () => {
    closeMobileMenu()
  }
)

onMounted(() => {
  updateActiveSection()
  window.addEventListener('scroll', updateActiveSection)
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateActiveSection)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
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
  gap: 25px;
  align-items: center;
  font-size: 14px;
  font-weight: 700;
  color: #f3f4ff;
}

.pk-main-nav a,
.pk-nav-button {
  color: inherit;
  text-decoration: none;
  opacity: 0.92;
  padding: 33px 0 28px;
  border: 0;
  border-bottom: 3px solid transparent;
  background: transparent;
  font: inherit;
  cursor: pointer;
  transition: color 0.2s ease, border-color 0.2s ease, opacity 0.2s ease;
}

.pk-main-nav a:hover,
.pk-nav-button:hover {
  opacity: 1;
  color: #ffffff;
}

.pk-main-nav a.active {
  color: #a678ff;
  border-color: #7c4dff;
}

.pk-menu-toggle {
  display: none;
  width: 44px;
  height: 44px;
  padding: 10px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.04);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
}

.pk-menu-toggle span {
  width: 22px;
  height: 2px;
  border-radius: 999px;
  background: #f8fbff;
  transition: transform 0.22s ease, opacity 0.22s ease;
}

.pk-menu-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.pk-menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.pk-menu-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.pk-mobile-menu {
  display: none;
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

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 980px) {
  .pk-wrap {
    width: min(100% - 32px, 1180px);
  }

  .pk-nav {
    height: 72px;
    padding: 0;
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

  .pk-menu-toggle {
    display: inline-flex;
    flex: 0 0 44px;
  }

  .pk-mobile-menu {
    display: block;
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    background:
      radial-gradient(circle at 85% 10%, rgba(109, 53, 255, 0.16), transparent 30%),
      linear-gradient(135deg, rgba(5, 9, 26, 0.98), rgba(10, 12, 38, 0.98));
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.24);
  }

  .pk-mobile-nav {
    width: min(100% - 32px, 1180px);
    margin: 0 auto;
    padding: 12px 0 18px;
    display: flex;
    flex-direction: column;
  }

  .pk-mobile-link {
    width: 100%;
    padding: 14px 4px;
    border: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    background: transparent;
    color: rgba(248, 251, 255, 0.9);
    font: inherit;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    text-decoration: none;
    cursor: pointer;
  }

  .pk-mobile-link:last-child {
    border-bottom: 0;
  }

  .pk-mobile-link:hover,
  .pk-mobile-link.active {
    color: #a678ff;
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

@media (max-width: 520px) {
  .pk-logo-lockup {
    gap: 10px;
  }

  .pk-logo-name {
    font-size: 16px;
  }

  .pk-logo-mark {
    width: 38px;
    height: 38px;
    flex-basis: 38px;
  }
}
</style>
