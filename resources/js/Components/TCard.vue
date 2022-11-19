<script setup>

import { inject } from 'vue';

const message = inject('message');

defineProps({
    title : String,
    modelValue : String
});

</script>

<template>

<div class="flex flex-col p-2 rounded-lg ">
<!-- Header -->
<div class="mb-4" @click="$emit('update:modelValue','Yaz Geldi')">
    <h3 class="font-bold">
        <span v-text="modelValue"></span>
        <slot name="title"/>
    </h3>
</div>
    <!-- Content -->
    <div class="mb-4">
    <slot name="description" />
    </div>

<!-- Footer -->
    <div class="flex justify-end mr-4">
    <slot name="footer"/>
    </div>


</div>


</template>
