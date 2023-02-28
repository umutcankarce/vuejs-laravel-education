<script setup>
    import {ref} from "vue";
    import VisitorLayout from "../Layouts/VisitorLayout.vue";
    // Components
    import TButton from "@/Components/TButton.vue";
    import TForm from "@/Components/TForm.vue";
    import TTextInput from "@/Components/TTextInput.vue";
    import TCheckboxInput from "@/Components/TCheckboxInput.vue";
    import TRadioInput from "@/Components/TRadioInput.vue";
    import TSelectInput from "@/Components/TSelectInput.vue";


    const options = [
        {
            id: "adana",
            name : "Adana"
        },
        {
            id: "istanbul",
            name : "İstanbul"
        },
        {
            id: "ankara",
            name : "Ankara"
        },
        {
            id: "izmir",
            name : "İzmir"
        }
    ]

    const SoftwareTools = [
        {
            id: "html",
            label : "HTML5"
        },
        {
            id: "css",
            label : "CSS3"
        },
        {
            id: "laravel",
            label : "Laravel"
        },
        {
            id: "vue",
            label : "Vue"
        }
    ];

    const jobType = [
        {
            id: "full-time",
            label : "Tam Zamanlı"
        },
        {
            id: "part-time",
            label : "Yarı Zamanlı"
        },
        {
            id: "intern",
            label : "Stajyer"
        },
        {
            id: "freelance",
            label : "Freelance"
        }
    ]

    const form = ref({
        name : "",
        email : "",
        city : null,
        softwareTools : []
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
        {{  form }}
        <t-form @submitted="handleSubmit" @reset="handleReset" title="Personel Ekle" subTitle="Personel İşlemleri için Kullanabilirsiniz.">
            <!-- Full Name -->
          <t-text-input label="Ad Soyad" class="col-span-3" icon="fa-solid fa-home" v-model="form.name" clearable />
          <!-- Email  -->
          <t-text-input label="E-Mail Adresi" class="col-span-3" v-model="form.email" :errors="['Bu Alan Zorunludur.']" clearable />
         
          <!-- City -->
          <t-select-input placeholder="Lütfen Seçim Yapınız." label="Şehir" class="col-span-3" clearable v-model="form.city" :options="options" labelKey="name" />
          <!-- Space -->
          <div class="col-span-3"></div>
          <!-- Checkbox -->
          <t-checkbox-input v-model="form.softwareTools" label="Yazılım Teknolojileri" class="col-span-6" :options="SoftwareTools" />
          <!-- Radio -->
          <t-radio-input :options="jobType" />
        </t-form>
    </VisitorLayout>
</template>
