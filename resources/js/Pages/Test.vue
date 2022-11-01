<script setup>
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>

   <div class="
  max-w-[15rem]
   mx-auto
   p-10
   flex
   flex-grow
   bg-slate-200
   dark:bg-slate-700
   dark:text-slate-100
   ">
   <span>Dark Mode</span>

   <button @click="toggleDark()">
      <font-awesome-icon :icon="'fa-solid '+ (isDark ? 'fa-sun' : 'fa-moon') " />
   </button>
      
   </div>

</template>

