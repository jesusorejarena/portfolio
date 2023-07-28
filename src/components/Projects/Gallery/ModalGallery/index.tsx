import { FunctionComponent, useContext, useLayoutEffect, useRef, useState } from 'react';
import { Modal } from 'flowbite-react';
import { ModalGalleryProps } from '../../../../types/projects';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

import SwiperCore from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { Zoom, FreeMode, Navigation, Thumbs, Controller } from 'swiper/modules';
import Text from '../../../Common/Text';
import ThemeContext from '../../../../context/Theme';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ModalGallery: FunctionComponent<ModalGalleryProps> = ({ openModal, setOpenModal, info }) => {
	const { isDarkTheme } = useContext(ThemeContext);

	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
	const swiper1Ref = useRef<SwiperClass | null>(null);
	const swiper2Ref = useRef();

	useLayoutEffect(() => {
		if (swiper1Ref.current !== null) {
			swiper1Ref.current.controller.control = swiper2Ref.current;
		}
	}, []);

	const iconZoom = `transition-transform duration-500 hover:scale-125 ease-in-out text ${
		!isDarkTheme ? 'text-black' : 'text-white'
	}`;

	return (
		<>
			<Modal dismissible show={openModal} size="5xl" onClose={() => setOpenModal(false)} popup>
				<Modal.Header className={!isDarkTheme ? 'bg-white' : 'bg-gray-800'} />
				<Modal.Body className={`non-selectable ${!isDarkTheme ? 'bg-white' : 'bg-gray-800'}`}>
					<div className="flex flex-row items-center justify-start gap-x-4 w-full text-2xl">
						<Text className={`${!isDarkTheme ? 'text-black' : 'text-white'}`}>{info.title}</Text>
						<div className="flex flex-row gap-x-4">
							{info.code && (
								<a href={info.code} aria-label={info.ariaLabelCode} target="_blank" rel="noopener noreferrer">
									<FaGithub className={iconZoom} />
								</a>
							)}
							{info.link && (
								<a href={info.link} aria-label={info.ariaLabelLink} target="_blank" rel="noopener noreferrer">
									<FaExternalLinkAlt className={iconZoom} />
								</a>
							)}
						</div>
					</div>
					<div className="mt-5">
						<Swiper
							onSwiper={(swiper) => {
								if (swiper1Ref.current !== null) {
									swiper1Ref.current = swiper;
								}
							}}
							loop={true}
							zoom={true}
							spaceBetween={50}
							slidesPerView={1}
							grabCursor={true}
							navigation={true}
							thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
							modules={[Zoom, FreeMode, Navigation, Thumbs, Controller]}
							className="rounded-md"
						>
							{info.imagesChildren.map((images, index) => (
								<SwiperSlide key={index} className="rounded-md bg-black">
									<div className="flex items-center justify-center h-[600px]">
										<div className="swiper-zoom-container">
											<img src={images} className="object-cover max-w-full h-auto max-h-[600px]" />
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
						<Swiper
							loop={true}
							spaceBetween={10}
							slidesPerView={5}
							watchSlidesProgress
							touchRatio={0.2}
							slideToClickedSlide={true}
							onSwiper={setThumbsSwiper}
							modules={[Navigation, Thumbs, Controller]}
							className="mt-3 mySwiper"
						>
							{info.imagesChildren.map((images, index) => (
								<SwiperSlide key={index} className="rounded-md bg-black flex items-center justify-center">
									<div className="flex items-center justify-center h-[100px]">
										<img src={images} className="object-cover max-w-full h-auto max-h-[100px]" />
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ModalGallery;
