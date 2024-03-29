<script setup>
    import { ref, onUpdated, onMounted } from "vue";
    import { Head, Link, usePage } from "@inertiajs/inertia-vue3";
    import { useI18n } from "vue-i18n";
    import Langs from "../Langs/langs";
    import { Inertia } from "@inertiajs/inertia";
    import TDarkModeChanger from "@/Components/TDarkModeChanger.vue";

    const { t, locale } = useI18n();
    const { langs } = Langs();

    defineProps({
        canLogin: Boolean,
        canRegister: Boolean,
        laravelVersion: String,
        phpVersion: String,
        icon: String,
        header:String,
    });

    const showLangs = ref(false);

    const updateLang = () => {
       if(usePage().props.value.lang){
            locale.value = usePage().props.value.lang;
       }
    }

    onMounted(() => {
        updateLang();
    })
    onUpdated(() => {
        updateLang();
    })
    const changeLang = (lang) => {
        locale.value = lang;
        showLangs.value = false;
        Inertia.post(route('update-lang'), {
            lang: lang
        })
    };
</script>

<template>

    <Head title="Welcome" />

    <!-- Container -->
    <div class="flex w-screen h-screen bg-slate-200 dark:bg-slate-600">
        <!-- SideBar -->
        <div
            class="flex flex-col flex-shrink-0 bg-slate-800 w-[12rem] text-slate-100 border-r dark:border-slate-400/50">
            <!-- Logo -->
            <div class="flex justify-center items-center h-16">
                <span class="text-xl">
                    Jetstream Eğitimi
                </span>
            </div>

            <!-- Menu -->
            <div class="mt-10">
                <!-- Menu Item -->
                <div
                    class="text-sm px-4 py-2 hover:bg-slate-600 cursor-pointer space-x-4 hover:pl-6 active:pl-8 transition-all select-none">
                    <!-- Icon -->
                    <font-awesome-icon icon="home" />
                    <!-- Label -->
                    <span>Anasayfa</span>
                </div>
            </div>

        </div>
        <!-- Content Wrapper -->
        <div class="flex flex-col w-full text-slate-700 dark:text-slate-100">
            <!-- Top Bar -->
            <div
                class="flex justify-between bg-white dark:bg-slate-800 w-full h-16 items-center p-4 dark:text-slate-100">
                <!-- Search -->
                <div>
                    <input type="text"
                           class="hidden md:block border dark:border-transparent border-slate-300 bg-slate-100 rounded-lg dark:bg-slate-500" />
                </div>
                <div class="flex items-center space-x-4">
                    <!-- Auth Links -->
                    <div v-if="!$page.props.user">
                        <Link :href="route('login')" class="underline">
                            {{ $t("auth.login") }}
                        </Link>

                        <Link v-if="canRegister" :href="route('register')" class="ml-4 underline">
                            {{ $t("auth.register") }}
                        </Link>
                    </div>

                    <!-- Dil değiştirme -->
                    <div class="relative">
                        <span @click="showLangs = true" v-text="$t('langs.' + locale)"></span>
                        <div v-if="showLangs" class="absolute flex flex-col">
                            <template v-for="i in langs">
                                <span class="p-2 border cursor-pointer" @click="changeLang(i.id)" v-if="locale !== i.id"
                                      v-text="$t('langs.' + i.id)"></span>
                            </template>
                        </div>
                    </div>

                    <!-- Dark Mode Changer -->
                    <t-dark-mode-changer />
                </div>
            </div>
            <!-- Header -->
            <div class="p-4 dark:bg-white/10">
                <span class="text-xl font-semibold">
                    <slot v-if="$slots.hasOwnProperty('header')" name="header"/>
                  <span v-else v-text="header"></span>
                </span>
            </div>
            <!-- Content -->
            <div class="p-4 bg-white dark:bg-slate-600">
                <slot/>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .bg-gray-100 {
        background-color: #f7fafc;
        background-color: rgba(247, 250, 252, var(--tw-bg-opacity));
    }

    .border-gray-200 {
        border-color: #edf2f7;
        border-color: rgba(237, 242, 247, var(--tw-border-opacity));
    }

    .text-gray-400 {
        color: #cbd5e0;
        color: rgba(203, 213, 224, var(--tw-text-opacity));
    }

    .text-gray-500 {
        color: #a0aec0;
        color: rgba(160, 174, 192, var(--tw-text-opacity));
    }

    .text-gray-600 {
        color: #718096;
        color: rgba(113, 128, 150, var(--tw-text-opacity));
    }

    .text-gray-700 {
        color: #4a5568;
        color: rgba(74, 85, 104, var(--tw-text-opacity));
    }

    .text-gray-900 {
        color: #1a202c;
        color: rgba(26, 32, 44, var(--tw-text-opacity));
    }

    @media (prefers-color-scheme: dark) {
        .dark\:bg-gray-800 {
            background-color: #2d3748;
            background-color: rgba(45, 55, 72, var(--tw-bg-opacity));
        }

        .dark\:bg-gray-900 {
            background-color: #1a202c;
            background-color: rgba(26, 32, 44, var(--tw-bg-opacity));
        }

        .dark\:border-gray-700 {
            border-color: #4a5568;
            border-color: rgba(74, 85, 104, var(--tw-border-opacity));
        }

        .dark\:text-white {
            color: #fff;
            color: rgba(255, 255, 255, var(--tw-text-opacity));
        }

        .dark\:text-gray-400 {
            color: #cbd5e0;
            color: rgba(203, 213, 224, var(--tw-text-opacity));
        }
    }
</style>
