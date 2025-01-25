<script setup lang="ts">
import myUser from '@/composables/myUser';
const { getCurrentUser } = myUser();
const res = await getCurrentUser();
</script>

<template>
  <main>{{ res }}</main>
</template>

<style scoped></style>
