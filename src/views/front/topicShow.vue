<script setup lang="ts">
import myTopic from '@/composables/myTopic';
import { useRoute } from 'vue-router';
const route = useRoute();
const t_id = route.params?.t_id;
const { topicDetail, getTopicDetail } = myTopic();
await getTopicDetail(t_id);
</script>

<template>
  <main>
    {{ topicDetail }}
  </main>
</template>

<style scoped></style>
