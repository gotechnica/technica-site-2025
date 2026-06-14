<template>
  <div class="toggle">
    <button
      :class="{ active: !modelValue }"
      @click="emit('update:modelValue', false)"
    >
      {{ leftLabel }}
    </button>

    <button
      :class="{ active: modelValue }"
      @click="emit('update:modelValue', true)"
    >
      {{ rightLabel }}
    </button>
  </div>
</template>

<script setup lang="ts">

defineProps<{
  modelValue: boolean
  leftLabel?: string
  rightLabel?: string
}>()

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void
}>()

</script>

<style scoped>

.toggle {
  display: flex;
  border-radius: 8px;
  overflow: hidden;
}

button {
  padding: 8px 16px;
  border: none;
  cursor: pointer;
}

.active {
  font-weight: bold;
}

</style>