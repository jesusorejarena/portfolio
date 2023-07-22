import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';
import translationES from './es.json';

export const resources = {
	en: {
		translation: translationEN,
	},
	es: {
		translation: translationES,
	},
};

let currentLanguage = navigator.language.substring(0, 2);

if (currentLanguage !== 'en' && currentLanguage !== 'es') {
	currentLanguage = 'es';
}

void i18n.use(initReactI18next).init({
	compatibilityJSON: 'v3',
	resources,
	lng: currentLanguage,
	fallbackLng: currentLanguage,
	interpolation: {
		escapeValue: false,
	},
});
