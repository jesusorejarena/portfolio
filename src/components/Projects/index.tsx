import { FunctionComponent } from 'react';

import { useTranslation } from 'react-i18next';
import Text from '../Common/Text';
import Gallery from './Gallery';
import { Fade } from 'react-awesome-reveal';

const Projects: FunctionComponent = () => {
	const { t } = useTranslation('', { keyPrefix: 'projects' });

	return (
		<div id="projects" className="flex flex-col items-center">
			<div className="md:flex md:flex-col justify-center h-[50%] space-y-16 max-w-[1200px]">
				<div className="z-10 flex flex-col gap-y-2 items-start justify-start">
					<Text className="bg-blue-600 text-white text-4xl md:text-5xl font-normal px-2 py-1">{t('title')}</Text>
					<Text className="px-2 text-4xl md:text-5xl font-black">
						<Fade
							className="underline underline-offset-4 decoration-blue-500"
							direction="up"
							duration={150}
							cascade
							triggerOnce
						>
							{t('subtitle')}
						</Fade>
					</Text>
				</div>
				<div className="flex justify-center items-end">
					<div className="z-10 md:mb-16">
						<Gallery />

						
					</div>

					<div className="z-0 hidden md:flex absolute items-center justify-center">
						<div className="bg-gray-300/40 dark:bg-gray-600/40 rounded-3xl h-[150px] w-[700px] flex items-end justify-center pb-5">
							<div className="bg-blue-600 rounded-xl h-[15px] w-[50%] flex items-center justify-center"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;