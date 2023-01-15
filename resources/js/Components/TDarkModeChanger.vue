<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleDark = useToggle(isDark)

</script>

<template>

<font-awesome-icon @click="toggleDark()" :icon="'fa-solid '+(isDark ? 'fa-sun' : 'fa-moon')" />

</template>
