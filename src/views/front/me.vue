<script setup lang="ts">
import myUser from '@/composables/myUser';
const route = useRoute();
const u_id = route.params?.u_id;
const { getOneUser, user } = myUser();
await getOneUser(u_id);
</script>

<template>
  <main>{{ user }}</main>
</template>

<style scoped></style>
