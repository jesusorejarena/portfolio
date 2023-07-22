/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FunctionComponent, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Text from '../Common/Text';
import Arrow from '../../assets/images/svg/arrow.svg';
import arrowWhite from '../../assets/images/svg/arrowWhite.svg';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { HiMail, HiUser } from 'react-icons/hi';
import ThemeContext from '../../context/Theme';

const ContactMe: FunctionComponent = () => {
	const { isDarkTheme } = useContext(ThemeContext);

	const { t } = useTranslation('', { keyPrefix: 'contact_me' });

	return (
		<div id="contact-me" className="flex flex-col items-center justify-center">
			<div className="flex flex-col lg:flex-row justify-center space-y-10 lg:space-y-0 w-full">
				<div className="flex flex-col gap-5 items-start lg:w-[50%] lg:max-w-[500px]">
					<div className="flex flex-col gap-5 items-start lg:max-w-[450px]">
						<Text className="text-blue-500 text-5xl font-bold">{t('title')}</Text>
						<Text className="text-4xl font-semibold underline underline-offset-4 decoration-blue-500">
							{t('subtitle')}
						</Text>
					</div>

					<div className="hidden lg:w-full lg:flex items-end justify-end lg:max-w-[520px]">
						<img
							className="w-[50%] mr-10 rotate-12"
							src={isDarkTheme ? arrowWhite : Arrow}
							alt="Flecha"
							loading="lazy"
						/>
					</div>
				</div>
				<div className="flex lg:w-[50%] lg:max-w-[500px] items-start justify-start">
					<div className="w-full space-y-5">
						<div>
							<div className="mb-2 block">
								<Label htmlFor="name" value={t('form.name')} />
							</div>
							<TextInput disabled icon={HiUser} id="name" placeholder="Alonzo Soto" required type="email" />
						</div>
						<div>
							<div className="mb-2 block">
								<Label htmlFor="email" value={t('form.email')} />
							</div>
							<TextInput disabled icon={HiMail} id="email" placeholder="alonzo@example.com" required type="email" />
						</div>
						<div id="textarea">
							<div className="mb-2 block">
								<Label htmlFor="comment" value={t('form.message.label')} />
							</div>
							<Textarea disabled id="comment" placeholder={t('form.message.placeholder')} required rows={4} />
						</div>

						<div className="flex justify-end">
							<Button size="lg" color="primary">
								{t('form.button')}
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
