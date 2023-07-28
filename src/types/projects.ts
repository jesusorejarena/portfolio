export interface ImagesItemProps {
	info: InfoProps;
	col: string[];
	index: number;
}

export interface ImagesCloudinaryProps {
	[key: number]: string;
}

interface InfoProps {
	images: ImagesCloudinaryProps[1];
	title: string;
	link: string;
	code: string;
	ariaLabelLink: string;
	ariaLabelCode: string;
	company: string;
	imagesChildren: string[];
}

export interface IColorCompany {
	[key: string]: string;
}

export interface ModalGalleryProps {
	info: InfoProps;
	openModal: boolean;
	setOpenModal: (value: boolean) => void;
}
