
<script setup>
defineProps({
    label : String,
    errors : [Object,Array],
    modelValue : [String,Number,Date,Boolean],
    icon : String,
    options : [Array,Object],
    labelKey : {
        type: String,
        default : "label",
    },
    valueKey : {
        type: String,
        default : "id",
    },
    placeholder : {
        type : String,
        default : "Lütfen Seçim Yapınız."
    },
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
            
            <select @change="$emin('update:modelValue',$event.target.value)" class="rounded-lg min-h-[2.5rem] border-slate-300 dark:border-transparent dark:bg-slate-500/75 w-full">
           <option class="text-slate-400">{{ placeholder }}</option>
            <template v-for="city in options">
                <option :value="city[valueKey]" :selected="modelValue === city[valueKey] ? 'selected' : null">{{ city[labelKey] }}</option>
            </template>
            </select>

             <!-- Clear BTN -->
             <div v-if="modelValue && clearable" class="absolute right-8 top-2.5 cursor-pointer" @click="$emit('update:modelValue','')">
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
