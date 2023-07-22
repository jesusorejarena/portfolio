import { FunctionComponent } from 'react';
import { ImagesItemProps } from '../../../../types/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ImagesItem: FunctionComponent<ImagesItemProps> = ({ info, col, index }) => {
	const { images, title, link, code } = info;

	const iconZoom = 'transition-transform duration-500 hover:scale-125 ease-in-out';

	return (
		<div className={`group relative overflow-hidden rounded-lg h-full`}>
			<div className={`aspect-[${col[index]}]w-full h-full`}>
				<div className="absolute inset-0 z-10" />
				<img
					src={images}
					alt="Images"
					loading="lazy"
					className="object-cover w-auto h-full transition-transform group-hover:scale-105"
				/>
			</div>

			<div className="flex flex-col absolute inset-0 items-start justify-between opacity-0 group-hover:opacity-100 group-hover:bg-black/70 transition-opacity  p-3">
				<div className="w-[90%] space-y-2">
					<p className="text-white text-lg truncate font-bold">{title}</p>
				</div>

				<div className="flex flex-row items-center justify-between w-full text-white text-2xl">
					{code && (
						<a href={link} target="_blank" rel="noopener noreferrer">
							<FaGithub className={`${iconZoom} z-20 hover:cursor-pointer`} />
						</a>
					)}
					{link && (
						<a href={code} target="_blank" rel="noopener noreferrer">
							<FaExternalLinkAlt className={`${iconZoom} z-20 hover:cursor-pointer`} />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ImagesItem;
