<template>
  <div class="pk-brand">
    <img
      class="pk-brand__mark"
      :src="prismaMark"
      alt=""
      aria-hidden="true"
    />

    <div class="pk-brand__copy">
      <div class="pk-brand__name">
        Prisma<span>Kore Solutions</span>
      </div>

      <div
        v-if="showTagline"
        class="pk-brand__tagline"
      >
        Simplifica. Automatiza. Avanza.
      </div>
    </div>
  </div>
</template>

<script setup>
import prismaMark from '@/assets/images/pk-transparente.png'

defineProps({
  showTagline: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.pk-brand {
  display: flex;
  align-items: center;
  gap: 16px;
}

.pk-brand__mark {
  width: 72px;
  height: 72px;
  object-fit: contain;
  flex-shrink: 0;
}

.pk-brand__copy {
  display: flex;
  flex-direction: column;
}

.pk-brand__name {
  color: #0d1b4c;
  font-size: 34px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.03em;
  white-space: nowrap;
}

.pk-brand__name span {
  color: #18aeea;
}

.pk-brand__tagline {
  margin-top: 8px;
  color: #1a3f8f;
  font-size: 15px;
  line-height: 1.2;
}

@media (max-width: 600px) {
  .pk-brand {
    gap: 10px;
  }

  .pk-brand__mark {
    width: 52px;
    height: 52px;
  }

  .pk-brand__name {
    font-size: 24px;
  }

  .pk-brand__tagline {
    margin-top: 5px;
    font-size: 12px;
  }
}
</style>