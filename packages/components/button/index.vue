<script setup lang="ts">
const { msg } = defineProps<{
  msg: string
}>()
</script>

<template>
  <d-button>{{ msg }}</d-button>
</template>
