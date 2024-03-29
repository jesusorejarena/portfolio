import {
	DtisMobile,
	FacebookCloneWeb,
	FastyPWA,
	IqSystemMobile,
	MediumCloneWeb,
	MyHealthWeb,
	RosedalWeb,
	TeslaClonWeb,
	TourtrackMobile,
	TourtrackWeb,
	UberCloneMobile,
	WhataCartWeb,
} from '../../../assets/imagesCloudinary';
import { IColorCompany } from '../../../types/projects';

export const colorCompany: IColorCompany = {
	vantageio: '#1247BD',
	accento: '#E31313',
	kunaisoft: '#253557',
	whatacart: '#0B0F15',
	freelance: '#F5C700',
	personal: '#1C64F2',
};

export const ratios = {
	col1: ['4/5', '5/4', '5/4'],
	col2: ['5/4', '4/5', '5/4'],
	col3: ['4/5', '5/4', '5/4'],
	col4: ['5/4', '5/4', '4/5'],
};

export const infoImages = {
	col1: [
		{
			images: TourtrackMobile[1],
			title: 'TourTrack App',
			link: 'https://apps.apple.com/us/app/tourtrack-app/id1616688973',
			code: '',
			ariaLabelLink: 'Tourtrack App Store',
			ariaLabelCode: '',
			company: 'VantageIO',
			imagesChildren: Object.values(TourtrackMobile),
		},
		{
			images: TourtrackWeb[1],
			title: 'TourTrack Web',
			link: 'https://portal.tourtrackapp.com/',
			code: '',
			ariaLabelLink: 'Tourtrack Web',
			ariaLabelCode: '',
			company: 'VantageIO',
			imagesChildren: Object.values(TourtrackWeb),
		},
		{
			images: MyHealthWeb[1],
			title: 'My Health Web',
			link: 'https://myhealth.rocks/',
			code: '',
			ariaLabelLink: 'My Health Web',
			ariaLabelCode: '',
			company: 'VantageIO',
			imagesChildren: Object.values(MyHealthWeb),
		},
	],
	col2: [
		{
			images: RosedalWeb[1],
			title: 'Rosedal Dry Cleaning Web',
			link: 'https://jesusorejarena.github.io/landing-page/',
			code: 'https://github.com/jesusorejarena/landing-page',
			ariaLabelLink: 'Rosedal Dry Cleaning Web',
			ariaLabelCode: 'Rosedal Dry Cleaning Code',
			company: 'Freelance',
			imagesChildren: Object.values(RosedalWeb),
		},
		{
			images: IqSystemMobile[1],
			title: 'IqSystem App',
			link: '',
			code: '',
			ariaLabelLink: '',
			ariaLabelCode: '',
			company: 'Accento',
			imagesChildren: Object.values(IqSystemMobile),
		},
		{
			images: FacebookCloneWeb[1],
			title: 'Facebook Clone Web',
			link: '',
			code: 'https://github.com/jesusorejarena/face-clone',
			ariaLabelLink: '',
			ariaLabelCode: 'Facebook Clone Code',
			company: 'Personal',
			imagesChildren: Object.values(FacebookCloneWeb),
		},
	],
	col3: [
		{
			images: DtisMobile[1],
			title: 'Dtis Inventory App',
			link: '',
			code: '',
			ariaLabelLink: '',
			ariaLabelCode: '',
			company: 'Accento',
			imagesChildren: Object.values(DtisMobile),
		},
		{
			images: TeslaClonWeb[1],
			title: 'Tesla Clone Web',
			link: 'https://649c9ef96c11b41fde48234c--comfy-youtiao-c0b23d.netlify.app/',
			code: 'https://github.com/jesusorejarena/landing-tesla',
			ariaLabelLink: 'Landing Tesla Clone Web',
			ariaLabelCode: 'Landing Tesla Clone Code',
			company: 'Personal',
			imagesChildren: Object.values(TeslaClonWeb),
		},
		{
			images: FastyPWA[1],
			title: 'Fasty PWA',
			link: '',
			code: '',
			ariaLabelLink: '',
			ariaLabelCode: '',
			company: 'Personal',
			imagesChildren: Object.values(FastyPWA),
		},
	],
	col4: [
		{
			images: WhataCartWeb[1],
			title: 'Whatacart Web',
			link: 'https://whatacart.ai/',
			code: '',
			ariaLabelLink: 'Whatacart Web',
			ariaLabelCode: '',
			company: 'WhataCart',
			imagesChildren: Object.values(WhataCartWeb),
		},
		{
			images: MediumCloneWeb[1],
			title: 'Medium Clone Web',
			link: '',
			code: 'https://github.com/jesusorejarena/medium-clone',
			ariaLabelLink: '',
			ariaLabelCode: 'Medium Clone Code',
			company: 'Personal',
			imagesChildren: Object.values(MediumCloneWeb),
		},
		{
			images: UberCloneMobile[1],
			title: 'Uber Clone App',
			link: '',
			code: 'https://github.com/jesusorejarena/uber-clone',
			ariaLabelLink: '',
			ariaLabelCode: 'Uber Clone Code',
			company: 'Personal',
			imagesChildren: Object.values(UberCloneMobile),
		},
	],
};
