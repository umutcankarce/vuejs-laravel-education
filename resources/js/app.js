import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';

// Font Awesome Components
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome';
import "./sources/icons";

// i18n

import { createI18n } from "vue-i18n";

import Langs from "./Langs/langs";

const i18n = createI18n({
    locale: "tr",
    legacy: false,
    fallbackLocale: "en",
    datetimeFormats: {
        en: Langs().translates.en.datetimeFormats,
        tr: Langs().translates.tr.datetimeFormats
    },
    numberFormats: {
        en: Langs().translates.en.numberFormats,
        tr: Langs().translates.tr.numberFormats
    },
    messages: {
        ...Langs().translates,
    },
});


const appName = window.document.getElementsByTagName('title')[0].innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`,
        import.meta.glob('./Pages/**/*.vue')),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(i18n)
            .component('font-awesome-icon', FontAwesomeIcon)
            .component('font-awesome-layers', FontAwesomeLayers)
            .component('font-awesome-layers-text', FontAwesomeLayersText)
            .use(plugin)
            .use(ZiggyVue, Ziggy)
            .mount(el);
    },
});

InertiaProgress.init({ color: '#4B5563' });