import { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../Common/Text';

const Footer: FunctionComponent = () => {
	const { t } = useTranslation('', { keyPrefix: 'footer' });

	return (
		<div className="mt-20 flex flex-wrap bg-gray-300/40 dark:bg-gray-600/40 h-[150px] md:h-[100px] items-center justify-center">
			<div className="flex flex-wrap justify-center md:justify-between gap-x-10 gap-y-5 px-5">
				<a href="https://www.linkedin.com/in/jesusorejarena/" target="_blank" rel="noopener noreferrer">
					<Text className="font-light">{t('linkedin')}</Text>
				</a>
				<a href="https://www.upwork.com/freelancers/~0186f09c7907b56b50" target="_blank" rel="noopener noreferrer">
					<Text className="font-light">{t('upwork')}</Text>
				</a>
				<a href="https://github.com/jesusorejarena" target="_blank" rel="noopener noreferrer">
					<Text className="font-light">{t('github')}</Text>
				</a>
				<a href="mailto:jesusorejarena@gmail.com" target="_blank" rel="noopener noreferrer">
					<Text className="font-light">{t('email')}</Text>
				</a>
			</div>
		</div>
	);
};

export default Footer;
