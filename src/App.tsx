import { Flowbite } from 'flowbite-react';
import './styles/global.css';
import './translations/init';

import { ThemeProvider } from './context/Theme';
import WithoutAuth from './routes/WithoutAuth';
import { customTheme } from './styles/custom/customTheme';

const App: React.FC = () => {
	return (
		<ThemeProvider>
			<Flowbite theme={{ theme: customTheme }}>
				<WithoutAuth />
			</Flowbite>
		</ThemeProvider>
	);
};

export default App;
