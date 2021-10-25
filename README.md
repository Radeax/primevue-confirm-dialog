# PrimeVue Confirmation Dialog

_Vue 3 (Composition API, SFC, `<script setup>`) + Typescript + Vite_

A customized [PrimeVue](https://primefaces.org/primevue/) confirmation dialog component.

Needed a reusable [ConfirmDialog](https://primefaces.org/primevue/showcase/#/confirmdialog) component with preset properties but customizable message and options.

Previously had separate instances of the ConfirmDialog component for each type of dialog which would be toggled using `v-if` or a toggle class using the `visible` property.

Example:

```
<template>
  <ConfirmationDialog
  :visible="editDialog"
  :message="Are you sure you want to Edit?"
/>
<ConfirmationDialog
  :visible="deleteDialog"
  :message="Are you sure you want to Delete?"
/>
</template>
```

This implementation made it easier to manage making `<template>` less crowded by only needing a single instance of `<ConfirmDialog>` and properties are moved from `<ConfirmDialog` to `<script setup>`.

- Includes optional confirmation toast message

---

At the time of this writing, there is no built-in functionality to change the initial focus of the PrimeVue component which puts the focus on the "accept" button. `accept` and `reject` methods are reversed so the user rejects/cancels when the _Enter_ key is pressed.
