<template>
  <h1 :class="{ green: isGreen, red: isRed }">Green or Red</h1>

  <Button @click="confirmGreen">Change to Green</Button>
  <Button @click="confirmRed">Change to Red</Button>
  
  <ConfirmDialog ref="confirmation" />
</template>

<script setup lang="ts">
import ConfirmDialog from './components/ConfirmDialog.vue';

import { ref } from 'vue';
const confirmation = ref<InstanceType<typeof ConfirmDialog>>();

const greenDialog = {
  message: 'Are you sure you want to change color to Green?',
  acceptLabel: 'Yes',
  rejectLabel: 'No',
  reject: () => { // buttons are reversed so this acts like 'accept'
    isGreen.value = true;
    isRed.value = false;
  }
};

const redDialog = {
  message: 'Are you sure you want to change color to Red?',
  acceptLabel: 'Proceed',
  rejectLabel: 'Cancel',
  reject: () => {
    isRed.value = true;
    isGreen.value = false;
  },
};

const isGreen = ref(false);
const isRed = ref(false);

const confirmGreen = () => confirmation.value?.openDialog(greenDialog);
const confirmRed = () => confirmation.value?.openDialog(redDialog);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
