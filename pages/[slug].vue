<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const redirects: Record<string, string> = {
  preregister: 'https://docs.google.com/forms/u/3/d/1oCJ2MhqRBjZzEbIi9J5MErZohYT2DRdmPv3grKaO5Wc/viewform?usp=drivesdk&edit_requested=true'
}

const target = redirects[route.params.slug as string]

if (target) {
  window.location.href = target
} else {
  router.replace('/')
}
</script>

<template>
  <p>Redirecting!!!</p>
</template>

<style scoped>
    h1 {
        text-align: center;
        padding: 3rem;
        color: white;
    }
</style>