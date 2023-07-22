import type { CustomFlowbiteTheme } from 'flowbite-react';

export const customTheme: CustomFlowbiteTheme = {
	button: {
		color: {
			primary: 'text-white bg-blue-500 hover:bg-blue-600 transition-colors',
		},
	},
	toggleSwitch: {
		toggle: {
			checked: {
				color: {
					primary: 'bg-blue-500',
				},
			},
		},
	},
	dropdown: {
		arrowIcon: 'text-black dark:text-white ml-2 h-4 w-4',
		inlineWrapper: 'text-black dark:text-white flex items-center',
	},
	badge: {
		root: {
			color: {
				primary: 'bg-blue-500 text-white dark:bg-blue-500',
			},
		},
	},
};
