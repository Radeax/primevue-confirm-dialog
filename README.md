# PrimeVue Confirmation Dialog

_Vue 3 (Composition API, SFC, `<script setup>`) + Typescript + Vite_

A customized [PrimeVue](https://primefaces.org/primevue/) confirmation dialog component.

I needed a reusable [ConfirmDialog](https://primefaces.org/primevue/showcase/#/confirmdialog) component with preset properties but customizable message and options.

I previously had separate instances of the ConfirmDialog component for each type of dialog which would be toggled using `v-if` or a toggle class using the `visible` property.

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

---

At the time of this writing, the PrimeVue component puts initial focus on the "accept" button. I wanted "reject" to be the default so a user can't accidentally press _Enter_ to confirm a delete so I reversed "accept" and "reject".
