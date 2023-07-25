import { FunctionComponent } from 'react';
import { Flowbite } from 'flowbite-react';
import './styles/global.css';
import './translations/init';

import { customTheme } from './styles/custom/customTheme';
import { ThemeProvider } from './context/Theme';
import WithoutAuth from './routes/WithoutAuth';

const App: FunctionComponent = () => {
	return (
		<Flowbite theme={{ theme: customTheme }}>
			<ThemeProvider>
				<WithoutAuth />
			</ThemeProvider>
		</Flowbite>
	);
};

export default App;
