<script setup>
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-vue3';
import { ref } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const form = useForm({
    name : '',
    email : ''
})

// Validation Rules 

const rules = ref({
    name: { required }, // Matches state.name
    email: { email }, // Matches state.email
});

const v$ = useVuelidate(rules, form)

const handleSubmit = async () => {
    const isFormCorrect = await v$.value.$validate()
    if (!isFormCorrect) return
    Inertia.any(route('test'),{
        name : form.name,
        email: form.email
    })

    form.reset();

}
</script>


<template>
    <div class="bg-slate-200 max-w-lg m-auto p-10">
    <form @submit.prevent="handleSubmit">
       <div class="flex flex-col space-y-4">
        <label for="">Ad</label>
        <input type="text" name="" id="username" v-model="form.name" />

        <span class="text-red-500">
        <template v-for="error in v$.name.$errors">
            {{ error.$message }}
        </template>
        </span>


        <label for="">Email</label>
        <input type="text" name="" id="email" v-model="form.email" />

        <span class="text-red-500">
        <template v-for="error in v$.email.$errors">
            {{ error.$message }}
        </template>
        </span>
       <button type="submit">Gönder</button>
       </div>
    </form>
    </div>
</template>

