<script setup>
import { provide , ref } from 'vue';

const message = ref('Selam');

provide('message',message)

 const alertInfo = (message) => {
     alert(message)
 }
</script>

<template>

<t-card @tiklama="alertInfo($event)" v-model="message">

</t-card>



</template>

