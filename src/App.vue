<template>
  <div>
    <tButton type="success">hi!</tButton>
    <tButton type="warning">hi!</tButton>
    <tInput v-model="val"></tInput>
    <p>{{ val }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const val = ref()
</script>

<style lang="scss"></style>
