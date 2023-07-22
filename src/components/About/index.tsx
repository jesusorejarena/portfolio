import { FunctionComponent } from 'react';
import ContactmeIcons from '../Common/ContactmeIcons';
import { useTranslation } from 'react-i18next';
import Text from '../Common/Text';
import { Badge } from 'flowbite-react';
import Profile from '../../assets/images/profile.jpeg';
import SkillsIcons from './SkillsIcons';
import { Fade, Slide } from 'react-awesome-reveal';

const About: FunctionComponent = () => {
	const { t } = useTranslation('', { keyPrefix: 'about' });
	const { t: tGlobal } = useTranslation('', { keyPrefix: 'global' });

	return (
		<div id="aboutme" className="flex flex-col lg:flex-row justify-center items-center w-full space-y-10">
			<div className="lg:py-10 md:flex md:flex-col justify-center items-center h-[30%] lg:w-1/2 space-y-16">
				<div className="flex justify-start items-start">
					<div className="mt-10 z-10 flex flex-wrap md:flex-col gap-y-4 justify-start">
						<div className="flex flex-col gap-y-2 items-start">
							<Text className="bg-blue-500 text-white text-4xl md:text-5xl font-normal px-2 py-1">{t('title')}</Text>
							<Text className="px-2 text-4xl md:text-5xl font-black underline underline-offset-4 decoration-blue-500">
								<Fade
									className="underline underline-offset-4 decoration-blue-500"
									direction="up"
									duration={150}
									cascade
									triggerOnce
								>
									{tGlobal('name')}
								</Fade>
							</Text>
							<div className="flex flex-wrap gap-2 mt-4">
								<Fade
									className="underline underline-offset-4 decoration-blue-500"
									direction="up"
									duration={300}
									cascade
									triggerOnce
								>
									<Badge color="primary">{t('stack.fullstack')}</Badge>
									<Badge color="primary">{t('stack.mobile')}</Badge>
								</Fade>
							</div>
						</div>

						<Slide direction="left" triggerOnce className="flex items-center justify-end w-full">
							<div className="md:mt-4 pt-2 md:ml-24 max-w-[300px] h-[450px] relative overflow-hidden">
								<img
									className="h-full w-full rounded-3xl object-cover"
									src={Profile}
									alt={'Foto de Jesus Orejarena'}
									loading="lazy"
								/>
							</div>
						</Slide>
					</div>

					<div className="z-0 hidden md:flex absolute items-center justify-center left-0 h-[60%]">
						<div className="bg-gray-300/40 dark:bg-gray-600/40 rounded-r-3xl w-[500px] h-[100%]"></div>
					</div>
				</div>
			</div>
			<div className="md:flex md:flex-col justify-center h-[70%] lg:w-1/2 space-y-5 lg:max-w-[700px]">
				<div className="lg:mt-10 z-10 flex flex-col gap-y-5 items-center md:items-start">
					<Text className="text-xl text-gray-500 font-normal">{t('description')}</Text>
					<ContactmeIcons />
				</div>
				<div className="pt-10 pb-5 flex flex-row gap-2 items-end">
					<Text className="text-4xl font-black underline underline-offset-4 decoration-blue-500">
						{t('skill_title.my')}
					</Text>
					<Text className="bg-blue-500 text-white font-normal text-4xl px-2 py-1">SKILLS</Text>
				</div>
				<SkillsIcons />
			</div>
		</div>
	);
};

export default About;
