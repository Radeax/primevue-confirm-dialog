<template>
  <Toast />
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useToast } from 'primevue/usetoast';

defineProps({
  showToast: {
    type: Function,
    default: () => {},
  },
});

const toast = useToast();
const showToast = (message = 'Your updates has been saved') =>
  toast.add({
    severity: 'success',
    summary: '',
    detail: message,
    life: 3000,
  });

defineExpose({ showToast });
</script>
