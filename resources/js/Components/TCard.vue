<script setup>

import { inject } from 'vue';

const message = inject('message');

defineProps({
    title : String
});

</script>

<template>
    {{ message }}

<div class="flex flex-col p-2 rounded-lg ">
<!-- Header -->
<div class="mb-4" @click="$emit('tiklama',message)">
    <h3 class="font-bold">
        <span v-if="title" v-text="title"></span>
        <slot v-else name="title"/>
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