import { FunctionComponent } from 'react';

import Text from '../Common/Text';
import ContactmeIcons from '../Common/ContactmeIcons';
import ProgrammingAnimation from '../../assets/images/animations/programming.json';

import { useTranslation } from 'react-i18next';
import { Player } from '@lottiefiles/react-lottie-player';
import Typewriter from 'typewriter-effect';

const Home: FunctionComponent = () => {
	const { t, i18n } = useTranslation('', { keyPrefix: 'home' });
	const { t: tGlobal } = useTranslation('', { keyPrefix: 'global' });

	const currentLanguage = i18n.language;

	const words = [t('stack.stack1'), t('stack.stack2')];

	return (
		<div id="home" className="mt-24 md:mt-0 lg:flex lg:flex-col bg-local overflow-visible md:mx-10 md:px-10">
			<div className="min-h-screen flex items-center justify-center gap-x-5">
				<div className="flex flex-col lg:w-[60%] gap-y-4 justify-start">
					<div className="flex flex-col font-semibold">
						<Text className="text-3xl font-bold">{t('greeting.hi')}</Text>
						<div className="flex flex-col md:flex-row flex-wrap gap-2 items-start lg:items-end">
							<Text className="text-3xl">{t('greeting.my_name')}</Text>
							<Text className="bg-blue-600 text-white text-3xl px-2 py-1">{tGlobal('name')}</Text>
						</div>
					</div>

					<Text className="text-5xl font-bold underline underline-offset-4 decoration-blue-500">
						{currentLanguage === 'es' ? (
							<div className="flex flex-col md:flex-row gap-x-3">
								{t('stack.name')}
								<Typewriter
									options={{
										strings: words,
										autoStart: true,
										loop: true,
									}}
								/>
							</div>
						) : (
							<div className="flex flex-col md:flex-row gap-x-3">
								<Typewriter
									options={{
										strings: words,
										autoStart: true,
										loop: true,
									}}
								/>
								{t('stack.name')}
							</div>
						)}
					</Text>

					<Text className="text-2xl lg:max-w-[800px]">{t('description')}</Text>

					<ContactmeIcons />
				</div>

				<div className="hidden lg:flex lg:flex-col lg:w-[40%] items-center justify-center">
					<div className="z-10">
						<Player autoplay loop src={ProgrammingAnimation} className="w-[100%] max-w-[800px]" />
					</div>

					<div className="hidden lg:flex lg:flex-col items-end justify-end max-w-screen-xl z-0 absolute">
						<div className="w-[30rem] h-[30rem] rounded-full opacity-20 bg-blue-600 blur-2xl left-0 -mb-36 -mr-10" />

						<div className="w-[30rem] h-[30rem] rounded-full opacity-20 bg-blue-600 blur-2xl right-0 -mt-36 -ml-10" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
