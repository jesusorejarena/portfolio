/* eslint-disable @typescript-eslint/no-misused-promises */
import { FunctionComponent, useContext } from 'react';

import { Dropdown } from 'flowbite-react';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import ThemeContext from '../../../context/Theme';

const SwitchLanguage: FunctionComponent = () => {
	const { language, switchLanguage } = useContext(ThemeContext);

	const labelFlag = language === 'es' ? 'VE' : 'US';

	return (
		<Dropdown
			inline
			color="primary"
			size="xs"
			label={
				<>
					{getUnicodeFlagIcon(labelFlag)} &nbsp; {language.toUpperCase()}
				</>
			}
		>
			<Dropdown.Item onClick={() => switchLanguage('es')}>{getUnicodeFlagIcon('VE')} Español</Dropdown.Item>
			<Dropdown.Item onClick={() => switchLanguage('en')}>{getUnicodeFlagIcon('US')} English</Dropdown.Item>
		</Dropdown>
	);
};

export default SwitchLanguage;
