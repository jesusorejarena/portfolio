import { Fragment, FunctionComponent } from 'react';

import { useTranslation } from 'react-i18next';
import Text from '../Common/Text';
import CompanyItem from './CompanyItem';
import LineSeparator from './LineSeparator';
import { companies } from './companies';
import { Fade } from 'react-awesome-reveal';

const Experience: FunctionComponent = () => {
	const { t } = useTranslation('', { keyPrefix: 'experience' });

	return (
		<div id="experience" className="md:flex md:flex-col justify-center items-center">
			<div className="h-[50%] space-y-16 w-full max-w-[1200px] z-10">
				<div className="flex flex-col gap-y-2 items-start justify-start">
					<Text className="bg-blue-500 text-white text-4xl md:text-5xl font-normal px-2 py-1">{t('title')}</Text>
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

				<div className="hidden md:flex absolute items-center justify-center right-0 -z-10">
					<div className="bg-gray-300/40 dark:bg-gray-600/40 rounded-l-3xl w-[250px] h-[1700px] flex items-center justify-end pr-10">
						<div className="bg-blue-500 rounded-xl w-[15px] h-[50%] flex items-center justify-center"></div>
					</div>
				</div>

				<div className="space-y-5 z-10">
					{companies.map((company, index) => {
						return (
							<Fragment key={index}>
								{index !== 0 && <LineSeparator />}

								<CompanyItem company={company} />
							</Fragment>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Experience;
