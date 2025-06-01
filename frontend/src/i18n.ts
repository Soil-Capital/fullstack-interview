import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '@assets/translations/en.json';
import fr from '@assets/translations/fr.json';
import nl from '@assets/translations/nl.json';

// the translations
const resources = {
    en: {
        translation: en,
    },
    fr: {
        translation: fr,
    },
    nl: {
        translation: nl,
    },
};

i18n.use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        keySeparator: '.',
        resources,
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        fallbackLng: 'en',
        supportedLngs: ['en', 'fr', 'nl'],
    });

export default i18n;
