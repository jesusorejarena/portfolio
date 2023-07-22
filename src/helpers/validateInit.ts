import { LanguageCode } from '../types/language';

export const validateTheme = () => {
	let type;

	if (localStorage.getItem('theme') === 'dark') {
		document.documentElement.classList.add('dark');
		type = true;
	} else {
		localStorage.removeItem('theme');
		document.documentElement.classList.remove('dark');
		type = false;
	}

	return type;
};
export const validateLanguage = () => {
	const currentLanguage = navigator.language.substring(0, 2);
	const language = localStorage.getItem('language');
	let type: LanguageCode;

	if (language) type = language;
	else {
		if (currentLanguage === 'en' || currentLanguage === 'es') {
			type = currentLanguage;
		} else type = 'es';
	}

	return type;
};
