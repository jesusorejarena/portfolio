import { FunctionComponent, useContext } from 'react';
import { ToggleSwitch } from 'flowbite-react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import ThemeContext from '../../../context/Theme';

const SwitchTheme: FunctionComponent = () => {
	const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

	return (
		<div className="flex max-w-md flex-row items-center justify-between gap-x-2 text-xl">
			<BiSolidSun className={`${isDarkTheme ? 'text-gray-600' : 'text-gray-700'}`} />
			<ToggleSwitch aria-label="Switch theme" color="primary" checked={isDarkTheme} label="" onChange={toggleTheme} />
			<BiSolidMoon className={`-ml-3.5 ${!isDarkTheme ? 'text-gray-400' : 'text-gray-400'}`} />
		</div>
	);
};

export default SwitchTheme;
