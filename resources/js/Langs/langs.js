import translateEn from "./en.json";
import translateTr from "./tr.json";

export default function() {
    const langs = [{
        id: 'tr',

    }, {
        id: 'en'
    }];

    const translates = {
        en: translateEn,
        tr: translateTr
    }

    return {
        langs,
        translates
    };
}