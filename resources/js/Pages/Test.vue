<script setup>
import {ref} from "vue";
import { onClickOutside} from "@vueuse/core";

 const showModal = ref(false);

 const target = ref(null);
 onClickOutside(target, (event) => showModal.value = false)
</script>


<template>
   <div class="w-screen h-screen bg-slate-100">
    <!-- Button -->
    <button @click="showModal = true">Modal Aç</button>


    <!-- Modal -->
    <div v-if="showModal" class="w-screen h-screen fixed left-0 top-0 flex justify-center items-center bg-slate-500/25">
    <div ref="target" class="relative bg-white border p-6 rounded-lg">
       <!-- Close Button -->
        <div @click="showModal = false" class="absolute -top-2 -right-2 bg-red-500 p-2 rounded-full w-8 h-8 flex justify-center items-center text-white">
         X
        </div>
        modal
    </div>
    </div>
   </div>
</template>

