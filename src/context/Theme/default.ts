/* eslint-disable @typescript-eslint/no-empty-function */
import { LanguageCode } from '../../types/language';

export interface ThemeContextData {
	isDarkTheme: boolean;
	language: string;
	toggleTheme: (theme?: boolean) => void;
	switchLanguage: (language: LanguageCode) => Promise<void>;
}

export const defaultThemeContextData: ThemeContextData = {
	isDarkTheme: false,
	language: 'es',
	toggleTheme: () => {},
	switchLanguage: async () => {},
};
