<script setup>
    import VisitorLayout from "../Layouts/VisitorLayout.vue";
    // Components
    import TButton from "@/Components/TButton.vue";
    import TForm from "@/Components/TForm.vue";

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
        <div  class="flex flex-col col-span-3 bg-red-200">
        <!-- Full Name -->
        <label for="">Ad Soyad</label>
        <input type="text" />
        </div>
        <div class="flex flex-col col-span-3 bg-red-200">
          <!--  Email -->
          <label for="">E-Mail</label>
        <input type="text" />
        </div>
        <div  class="flex flex-col col-span-3 bg-red-200">
        <!-- Full Name -->
        <label for="">Kullanıcı Adı</label>
        <input type="text" />
        </div>
        <div class="flex flex-col col-span-3 bg-red-200">
          <!--  Email -->
          <label for="">Şifre</label>
        <input type="text" />
        </div>
        </t-form>
    </VisitorLayout>
</template>
