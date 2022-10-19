<script setup>
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-vue3';
import { ref,computed } from 'vue';
import { useVuelidate } from '@vuelidate/core'
import { required,minValue,helpers } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n';

const { t } =  useI18n();

const form = useForm({
    name : '',
    email : '',
   // is_active : null
})

const formName = computed(()=>{
    return form.name;
});

const min = (params) =>(value) =>  !helpers.req(value) || value > params;

// Validation Rules 
const rules = ref({
    name: { min : helpers.withMessage(t('validationMessages.minValue',{ value:18 }),min(18)) }, // Matches state.name
    email: { minValue : helpers.withMessage(t('validationMessages.minValue',{ value:18 }),minValue(18))}, // Matches state.email

    //is_true : { isTrue : helpers.withMessage('Aktif Değil, Lütfen Aktif Yapın',isTrue)  }
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
          <!-- Name  -->
        <label for="">Name</label>
        <input type="text" name="" id="username" v-model="form.name" />

        <span class="text-red-500">
        <template v-for="error in v$.name.$errors">
            {{ error.$message }}
        </template>
        </span>

        <!-- Email  -->
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

    {{ form }}
    </div>
</template>

