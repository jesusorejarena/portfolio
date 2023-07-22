import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SwitchLanguage from './SwitchLanguage';
import SwitchTheme from './SwitchTheme';
import Logo from '../../assets/images/svg/logo.svg';
import Text from '../Common/Text';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navigation: FunctionComponent = () => {
	const listItemRef = useRef<NodeListOf<HTMLLIElement> | null>(null);
	const menuBackDropRef = useRef<HTMLElement | null>(null);

	const [sidebar, setSidebar] = useState(false);

	const { t } = useTranslation();

	useEffect(() => {
		listItemRef.current = document.querySelectorAll('#landing-header li');
		menuBackDropRef.current = document.querySelector('#menu-backdrop') as HTMLElement;

		listItemRef.current.forEach((item) => {
			item.addEventListener('mouseenter', () => {
				const { left, top, width, height } = item.getBoundingClientRect();
				if (menuBackDropRef.current) {
					menuBackDropRef.current.style.setProperty('--left', `${left}px`);
					menuBackDropRef.current.style.setProperty('--top', `${top}px`);
					menuBackDropRef.current.style.setProperty('--width', `${width}px`);
					menuBackDropRef.current.style.setProperty('--height', `${height}px`);
					menuBackDropRef.current.style.opacity = '1';
					menuBackDropRef.current.style.visibility = 'visible';
				}
			});

			item.addEventListener('mouseleave', () => {
				if (menuBackDropRef.current) {
					menuBackDropRef.current.style.opacity = '0';
					menuBackDropRef.current.style.visibility = 'hidden';
				}
			});
		});
	}, []);

	return (
		<header
			className={`py-4 px-5 lg:flex items-center fixed top-0 w-full ${
				sidebar ? 'h-[100%]' : ''
			} lg:h-auto z-40 text-black bg-white dark:bg-gray-800 space-y-5 lg:space-y-0`}
		>
			<div
				className="flex flex-row lg:hidden justify-between items-center text-dark-800 dark:text-white text-3xl"
				onClick={() => setSidebar(!sidebar)}
			>
				<img className="h-14 w-52" src={Logo} alt="Logo" loading="lazy" />

				{sidebar ? <FaTimes /> : <FaBars />}
			</div>

			<div className={`${sidebar ? '' : 'hidden lg:flex'} justify-between w-full`}>
				<nav className="mb-4 lg:mb-0 flex flex-col lg:flex-row justify-between w-full">
					<div className="hidden lg:flex items-center justify-center">
						<img className="h-14 w-52" src={Logo} alt="Logo" loading="lazy" />
					</div>
					<ul
						id="landing-header"
						className="flex flex-col space-y-9 lg:space-y-0 lg:flex-row items-center justify-center text-sm [&>li>a]:transition-colors [&>li>a]:duration-500 [&>li>a]:text-current [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2"
					>
						<li>
							<a onClick={() => setSidebar(false)} href="#home">
								<Text className="text-base font-semibold">{t('navigation.home')}</Text>
							</a>
						</li>
						<li>
							<a onClick={() => setSidebar(false)} href="#experience">
								<Text className="text-base font-semibold">{t('navigation.experience')}</Text>
							</a>
						</li>
						<li>
							<a onClick={() => setSidebar(false)} href="#projects">
								<Text className="text-base font-semibold">{t('navigation.projects')}</Text>
							</a>
						</li>
						<li>
							<a onClick={() => setSidebar(false)} href="#aboutme">
								<Text className="text-base font-semibold">{t('navigation.aboutme')}</Text>
							</a>
						</li>
						<li>
							<a onClick={() => setSidebar(false)} href="#education">
								<Text className="text-base font-semibold">{t('navigation.education')}</Text>
							</a>
						</li>
						<li>
							<a onClick={() => setSidebar(false)} href="#contact-me">
								<Text className="text-base font-semibold">{t('navigation.contact_me')}</Text>
							</a>
						</li>
					</ul>
					<nav className="flex flex-col lg:flex-row gap-y-12 lg:gap-y-0 items-center justify-end gap-x-5 pt-8 lg:pt-0">
						<SwitchLanguage />
						<SwitchTheme />
					</nav>
				</nav>

				<div
					id="menu-backdrop"
					className="absolute bg-black/5 dark:bg-white/5 backdrop-blur-lg rounded translate-x-[var(--left)] translate-y-[var(--top)] left-0 top-0 w-[var(--width)] h-[var(--height)] transition-all duration-500 ease-in-out opacity-0 -z-10"
				></div>
			</div>
		</header>
	);
};

export default Navigation;
