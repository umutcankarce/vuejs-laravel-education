<script setup>
    import VisitorLayout from "../Layouts/VisitorLayout.vue";
    // Components
    import TButton from "../Components/TButton.vue";
</script>
<template>
    <VisitorLayout header="Button Component">
        <t-button  :link="route('dashboard')" color="green">
            <template #icon>
                <font-awesome-icon icon="fa-solid fa-plus"></font-awesome-icon>
            </template>
            <template #label>
                Yeni Ekle
            </template>
        </t-button>
    </VisitorLayout>
</template>
