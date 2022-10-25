<script setup>

</script>


<template>
   <!-- Main Container -->
   <div class="w-screen h-screen flex bg-slate-200">
      <!-- Sidebar -->
      <div class="-ml-[10rem] md:ml-0 md:w-[10rem] md:flex bg-red-300  shrink-0">Sidebar</div>
      <!-- Content  -->
      <div class="bg-green-300 w-full">
         <!-- Top Bar -->
         <div class="bg-yellow-300 p-2">Top Bar</div>
         <!-- Content Wrapper -->
         <div class="p-0 md:p-2">
            <!-- Header -->
            <div class="bg-zinc-300 mb-4">
               Header 
            </div>
            <!-- Content -->
            <div class="bg-white">
               <button class="bg-red-500 hover:bg-rose-600 active:bg-emerald-500 text-white px-4 py-2 rounded-lg">Buton</button>
            </div>

         </div>
      </div>

   </div>

</template>

