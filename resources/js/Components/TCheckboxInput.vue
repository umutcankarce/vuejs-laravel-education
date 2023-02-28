
<script setup>
const props = defineProps({
    label : String,
    errors : [Object,Array],
    modelValue : [Array,Object],
    icon : String,
    valueKey : {
        type : String,
        default : "id", 
    },
    labelKey : {
        type : String,
        default : "label", 
    },
    options: [Array,Object],
    clearable : Boolean
});

const emit = defineEmits(['update:modelValue']);

const addValue = (value) => {
   
    let i = props.modelValue
    if(!i.includes(value)){
        
    i.push(value);
    }else{
       i.splice(i.findIndex(item => item === value));
    }
   emit('update:modelValue',i);
}
</script>

<template>
    <div class="flex flex-col flex-shrink-0 w-full">
    <!-- Label -->
     <span class="text-sm font-semibold">{{ label }}</span>
        <div class="relative items-center flex space-x-2 min-h-[2.5rem]">
        <!-- Icon -->
        <font-awesome-icon v-if="icon" :icon="icon" class="absolute left-3 top-3" />
            <!-- Input -->
            <template v-for="i in options">
                <input type="checkbox" 
                :value="modelValue"
             class="w-5 h-5 rounded-md" 
             :class="icon ? 'pl-10' : ''" @change="addValue(i[valueKey])" :name="i[valueKey]" :checked="modelValue.includes(i[valueKey])">
             <!-- Label -->
             <label>{{ i[labelKey] }}</label>
            </template>
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