import { IColorCompany } from '../../../types/projects';

// VantageIO
import TourTrackMobile from '../../../assets/images/gallery/tourtrack/mobile/1.png';
import TourTrackWeb from '../../../assets/images/gallery/tourtrack/web/1.png';
import MyHealthWeb from '../../../assets/images/gallery/myhealth/1.png';

// Accento
import IqMobile from '../../../assets/images/gallery/iq/1.png';
import DtisMobile from '../../../assets/images/gallery/dtis/1.png';

// Upwork
import WhatacartWeb from '../../../assets/images/gallery/whatacart/1.png';

// My Projects
import RosedalWeb from '../../../assets/images/gallery/my-projects/rosedal/1.png';
import FacebookWeb from '../../../assets/images/gallery/my-projects/facebook/1.png';
import TeslaWeb from '../../../assets/images/gallery/my-projects/tesla/1.png';
import FastyWeb from '../../../assets/images/gallery/my-projects/fasty/1.png';
import UberMobile from '../../../assets/images/gallery/my-projects/uber/1.jpeg';
import MediumWeb from '../../../assets/images/gallery/my-projects/medium/1.png';

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
			images: TourTrackMobile,
			title: 'TourTrack App',
			badges: ['React Native', 'Python', 'ReactJS'],
			link: 'https://apps.apple.com/us/app/tourtrack-app/id1616688973',
			code: '',
			ariaLabelLink: 'Tourtrack App Store',
			ariaLabelCode: '',
			company: 'VantageIO',
		},
		{
			images: TourTrackWeb,
			title: 'TourTrack Web',
			badges: ['ReactJS', 'React Native'],
			link: 'https://portal.tourtrackapp.com/',
			code: '',
			ariaLabelLink: 'Tourtrack Web',
			ariaLabelCode: '',
			company: 'VantageIO',
		},
		{
			images: MyHealthWeb,
			title: 'My Health Web',
			badges: ['ReactJS', 'React Native'],
			link: 'https://myhealth.rocks/',
			code: '',
			ariaLabelLink: 'My Health Web',
			ariaLabelCode: '',
			company: 'VantageIO',
		},
	],
	col2: [
		{
			images: RosedalWeb,
			title: 'Rosedal Dry Cleaning Web',
			badges: ['ReactJS', 'React Native'],
			link: 'https://jesusorejarena.github.io/landing-page/',
			code: 'https://github.com/jesusorejarena/landing-page',
			ariaLabelLink: 'Rosedal Dry Cleaning Web',
			ariaLabelCode: 'Rosedal Dry Cleaning Code',
			company: 'Freelance',
		},
		{
			images: IqMobile,
			title: 'IqSystem App',
			badges: ['ReactJS', 'React Native'],
			link: '',
			code: '',
			ariaLabelLink: '',
			ariaLabelCode: '',
			company: 'Accento',
		},
		{
			images: FacebookWeb,
			title: 'Facebook Clone Web',
			badges: ['ReactJS', 'React Native'],
			link: '',
			code: 'https://github.com/jesusorejarena/face-clone',
			ariaLabelLink: '',
			ariaLabelCode: 'Facebook Clone Code',
			company: 'Personal',
		},
	],
	col3: [
		{
			images: DtisMobile,
			title: 'Dtis Inventory App',
			badges: ['ReactJS', 'React Native'],
			link: '',
			code: '',
			ariaLabelLink: '',
			ariaLabelCode: '',
			company: 'Accento',
		},
		{
			images: TeslaWeb,
			title: 'Tesla Clone Web',
			badges: ['ReactJS', 'React Native'],
			link: 'https://649c9ef96c11b41fde48234c--comfy-youtiao-c0b23d.netlify.app/',
			code: 'https://github.com/jesusorejarena/landing-tesla',
			ariaLabelLink: 'Landing Tesla Clone Web',
			ariaLabelCode: 'Landing Tesla Clone Code',
			company: 'Personal',
		},
		{
			images: FastyWeb,
			title: 'Fasty WebApp',
			badges: ['ReactJS', 'React Native'],
			link: '',
			code: '',
			ariaLabelLink: '',
			ariaLabelCode: '',
			company: 'Personal',
		},
	],
	col4: [
		{
			images: WhatacartWeb,
			title: 'Whatacart Web',
			badges: ['ReactJS', 'React Native'],
			link: 'https://whatacart.ai/',
			code: '',
			ariaLabelLink: 'Whatacart Web',
			ariaLabelCode: '',
			company: 'WhataCart',
		},
		{
			images: MediumWeb,
			title: 'Medium Clone Web',
			badges: ['ReactJS', 'React Native'],
			link: '',
			code: 'https://github.com/jesusorejarena/medium-clone',
			ariaLabelLink: '',
			ariaLabelCode: 'Medium Clone Code',
			company: 'Personal',
		},
		{
			images: UberMobile,
			title: 'Uber Clone App',
			badges: ['ReactJS', 'React Native'],
			link: '',
			code: 'https://github.com/jesusorejarena/uber-clone',
			ariaLabelLink: '',
			ariaLabelCode: 'Uber Clone Code',
			company: 'Personal',
		},
	],
};
