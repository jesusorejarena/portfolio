export interface ImagesItemProps {
	info: {
		images: string;
		title: string;
		badges: string[];
		link: string;
		code: string;
		ariaLabelLink: string;
		ariaLabelCode: string;
		company: string;
	};
	col: string[];
	index: number;
}

export interface IColorCompany {
	[key: string]: string;
}
