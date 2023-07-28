/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable react-hooks/exhaustive-deps */
import { FunctionComponent, useContext, useEffect } from 'react';
import ThemeContext from '../../context/Theme';
import { validateLanguage, validateTheme } from '../../helpers/validateInit';

import Navigation from '../Navigation';
import Home from '../Home';
import Experience from '../Experience';
import Projects from '../Projects';
import About from '../About';
import Education from '../Education';
import ContactMe from '../ContactMe';
import Footer from '../Footer';

const Layout: FunctionComponent = () => {
	const { isDarkTheme, toggleTheme, switchLanguage } = useContext(ThemeContext);

	useEffect(() => {
		const validateDarkMode = validateTheme();
		toggleTheme(validateDarkMode);

		const validateLanguageMode = validateLanguage();
		switchLanguage(validateLanguageMode);
	}, []);

	return (
		<div className={isDarkTheme ? 'dark' : ''}>
			<div className="bg-white dark:bg-gray-800 overflow-x-hidden">
				<Navigation />
				<div className="mx-3 mt-10 md:space-y-48 space-y-28">
					<Home />
					<Experience />
					<Projects />
					<About />
					<Education />
					<ContactMe />
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
