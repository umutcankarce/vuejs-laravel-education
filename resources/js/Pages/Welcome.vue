<script setup>
    import {ref} from "vue";
    import VisitorLayout from "../Layouts/VisitorLayout.vue";
    // Components
    import TButton from "@/Components/TButton.vue";
    import TForm from "@/Components/TForm.vue";
    import TTextInput from "@/Components/TTextInput.vue";

    const form = ref({
        name : "",
        email : ""
    });

    const handleSubmit = () => {
        alert("Form Gönderildi.");
    }

    const handleReset = () => {
        alert("Form Sıfırlandı.");
    }

</script>
<template>
    <VisitorLayout header="Form Component">
        <t-form @submitted="handleSubmit" @reset="handleReset" title="Personel Ekle" subTitle="Personel İşlemleri için Kullanabilirsiniz.">
            <!-- Full Name -->
          <t-text-input label="Ad Soyad" class="col-span-3" icon="fa-solid fa-home" v-model="form.name" clearable />
          <!-- Email  -->
          <t-text-input label="E-Mail Adresi" class="col-span-3" v-model="form.email" :errors="['Bu Alan Zorunludur.']" clearable />
        </t-form>
    </VisitorLayout>
</template>
