import { FunctionComponent, useState } from 'react';
import { ImagesItemProps } from '../../../../types/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { colorCompany } from '../infoImages';
import ModalGallery from '../ModalGallery';
import { Button } from 'flowbite-react';
import { useTranslation } from 'react-i18next';
import { createPortal } from 'react-dom';

const ImagesItem: FunctionComponent<ImagesItemProps> = ({ info, col, index }) => {
	const { t } = useTranslation('', { keyPrefix: 'global' });

	const [openModal, setOpenModal] = useState<boolean>(false);

	const iconZoom = 'transition-transform duration-500 hover:scale-125 ease-in-out';

	return (
		<>
			<div className="group relative overflow-hidden rounded-lg h-full">
				<div className={`aspect-[${col[index]}] w-full h-full`}>
					<div className="flex w-full h-full ">
						<img
							src={info.images}
							alt="Images"
							loading="lazy"
							className="object-cover transition-transform group-hover:scale-105"
						/>
					</div>
				</div>

				<div className="flex flex-col absolute inset-0 items-start justify-between opacity-0 group-hover:opacity-100 group-hover:bg-black/70 transition-opacity  p-3">
					<div className="w-[90%] space-y-2">
						<p className="text-white text-lg truncate font-bold">{info.title}</p>
						<span
							key={index}
							className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded text-white"
							style={{ backgroundColor: colorCompany[info.company.toLowerCase()] }}
						>
							{info.company}
						</span>
					</div>

					<div className={`z-40 flex flex-row items-center justify-center w-full`}>
						<Button size="sm" color="primary" onClick={() => setOpenModal(true)}>
							{t('view_all')}
						</Button>
					</div>

					<div
						className={`z-40 flex flex-row items-center ${
							info.code ? 'justify-between' : 'justify-end'
						} w-full text-white text-2xl`}
					>
						{info.code && (
							<a href={info.code} aria-label={info.ariaLabelCode} target="_blank" rel="noopener noreferrer">
								<FaGithub className={`${iconZoom} z-20 hover:cursor-pointer`} />
							</a>
						)}
						{info.link && (
							<a href={info.link} aria-label={info.ariaLabelLink} target="_blank" rel="noopener noreferrer">
								<FaExternalLinkAlt className={iconZoom} />
							</a>
						)}
					</div>
				</div>
			</div>

			{createPortal(
				<ModalGallery openModal={openModal} setOpenModal={(value: boolean) => setOpenModal(value)} info={info} />,
				document.body
			)}
		</>
	);
};

export default ImagesItem;
