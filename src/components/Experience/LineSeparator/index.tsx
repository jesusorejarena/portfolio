import { FunctionComponent } from 'react';

const LineSeparator: FunctionComponent = () => {
	return (
		<div className="flex items-center justify-center md:justify-start">
			<div className="py-8 px-[2px] bg-gray-200 dark:bg-gray-700 rounded-xl" />
		</div>
	);
};

export default LineSeparator;
