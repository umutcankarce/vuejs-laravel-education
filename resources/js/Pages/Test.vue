<script setup>
import { provide } from 'vue';

provide('message','Merhaba')

 const alertInfo = (message) => {
   alert(message)
 }
</script>

<template>

<t-card @tiklama="alertInfo($event)" title="PHP">


</t-card>

<t-card @tiklama="alertInfo($event)" title="Laravel">


</t-card>

<t-card @tiklama="alertInfo($event)" title="Vuejs">


</t-card>


</template>

