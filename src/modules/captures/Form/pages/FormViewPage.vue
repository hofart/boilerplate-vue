<script setup lang="ts">
import { onMounted, ref, onActivated } from 'vue';

const teste = ref('teste')

onMounted(() => {
  console.log(teste.value)
})
</script>
<template>
  <h1 class="text-3xl font-bold underline">
    Form View Component!!
  </h1>

  <Button>Click</Button>
</template>
