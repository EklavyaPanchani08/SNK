import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import enTranslation from './public/locales/en.json';
import enTranslation from "./locales/en.json";
import deTranslation from './locales/de.json';
import arTranslation from './locales/ar.json';
import koTranslation from './locales/ko.json';

// i18n
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         resources: {
//             en: { translation: enTranslation },
//             de: { translation: deTranslation }
//         },
//         fallbackLng: 'en', // Default language
//         interpolation: {
//             escapeValue: false // React already escapes values
//         }
//     });
const resources = {
    en: {
        translation: enTranslation,
    },
    de: {
        translation: deTranslation,
    },
    ar: {
        translation: arTranslation,
    },
    ko: {
        translation: koTranslation
    }
};
const defaultLanguage = 'en';
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('language') || defaultLanguage,
    });

export default i18n;
