import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('error', () => {
  const errors = ref<Record<string, any>>({});

  const getError = (key: string) => errors.value[key];
  const hasError = () => Object.keys(errors.value).length > 0;

  function resetError() {
    errors.value = {};
  }

  function setErrors(error: Record<string, string[]>) {
    Object.entries(error).forEach(([key, value]) => {
      errors.value[key] = value[0];
    });
  }

  function clearError(key: string) {
    if (errors.value[key]) delete errors.value[key];
  }

  return { errors, getError, hasError, resetError, setErrors, clearError };
});
