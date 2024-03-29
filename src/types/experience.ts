export interface CompanyItemProps {
	company: {
		stack: string;
		company: string;
		date: {
			start: {
				month: string;
				year: string;
			};
			end: {
				month: string;
				year: string;
			};
		};
		description: {
			es: string;
			en: string;
		};
		image: string;
		logoAlt: string;
		skills: string[];
	};
}
