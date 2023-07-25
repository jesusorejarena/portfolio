import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Player } from '@lottiefiles/react-lottie-player';

import Text from '../Common/Text';
import { universities } from './universities';
import UniversityItem from './UniversityItem';
import GraduatedAnimation from '../../assets/images/animations/graduated.json';
import { Fade } from 'react-awesome-reveal';

const Education: FunctionComponent = () => {
	const { t } = useTranslation('', { keyPrefix: 'education' });

	return (
		<div id="education" className="flex justify-center">
			<div className="flex flex-col py-10 space-y-10">
				<div className="pt-10 flex flex-wrap gap-2 items-end z-10">
					<Text className="bg-blue-600 text-white font-normal text-4xl md:text-5xl px-2 py-1">{t('title')}</Text>
					<Text className="text-4xl md:text-5xl font-black">
						<Fade
							className="underline underline-offset-4 decoration-blue-500"
							direction="up"
							duration={160}
							cascade
							triggerOnce
						>
							{t('subtitle')}
						</Fade>
					</Text>
				</div>
				<div className="flex flex-col md:flex-row justify-between space-y-5 z-10">
					<div className="flex flex-col gap-8 items-start lg:w-[60%] lg:max-w-[600px]">
						{universities.map((university, index) => (
							<UniversityItem key={index} university={university} />
						))}
					</div>
					<div className="hidden lg:flex lg:w-[40%] items-start">
						<div id="playerAnimation" className="-mt-20">
							<Player autoplay keepLastFrame src={GraduatedAnimation} className="w-[100%] max-w-[800px]" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
