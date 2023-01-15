
<script setup>
defineProps({
    label : String,
    errors : [Object,Array],
    modelValue : [String,Number,Date],
    icon : String,
    clearable : Boolean
})
</script>

<template>
    <div class="flex flex-col flex-shrink-0 w-full">
    <!-- Label -->
     <label class="text-sm font-semibold">{{  label  }}</label>
        <div class="relative">
        <!-- Icon -->
        <font-awesome-icon v-if="icon" :icon="icon" class="absolute left-3 top-3" />
            <!-- Input -->
            <input type="text" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)"
             class="rounded-lg min-h-[2.5rem] border-slate-300 dark:border-transparent dark:bg-slate-500/75 w-full"
             :class="icon ? 'pl-10' : ''">
             <!-- Clear BTN -->
             <div v-if="modelValue && clearable" class="absolute right-3 top-2.5 cursor-pointer" @click="$emit('update:modelValue','')">
                x
             </div>
        </div>
        <!-- Error -->
        <div v-if="errors">
            <template v-for="i in errors">
                <span class="text-xs text-rose-600 dark:text-rose-400">{{ i }}</span>
            </template>
        </div>
    </div>
</template>
