import { FunctionComponent, useLayoutEffect, useRef, useState } from 'react';
import { Modal } from 'flowbite-react';
import { ModalGalleryProps } from '../../../../types/projects';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css';

import SwiperCore from 'swiper';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Controller } from 'swiper/modules';

const ModalGallery: FunctionComponent<ModalGalleryProps> = ({ openModal, setOpenModal, info }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
	const swiper1Ref = useRef<SwiperClass | null>(null);
	const swiper2Ref = useRef();

	useLayoutEffect(() => {
		if (swiper1Ref.current !== null) {
			swiper1Ref.current.controller.control = swiper2Ref.current;
		}
	}, []);

	return (
		<>
			<Modal dismissible show={openModal} size="5xl" onClose={() => setOpenModal(false)}>
				<Modal.Header>{info.title}</Modal.Header>
				<Modal.Body className="non-selectable">
					<Swiper
						onSwiper={(swiper) => {
							if (swiper1Ref.current !== null) {
								swiper1Ref.current = swiper;
							}
						}}
						loop
						spaceBetween={50}
						slidesPerView={1}
						grabCursor={true}
						navigation={true}
						thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
						modules={[FreeMode, Navigation, Thumbs, Controller]}
						className="rounded-md max-h-[500px] w-full"
					>
						{info.imagesChildren.map((images, index) => (
							<SwiperSlide key={index} className="rounded">
								<img src={images} className="object-cover max-h-[500px] w-full" />
							</SwiperSlide>
						))}
					</Swiper>
					<Swiper
						loop
						spaceBetween={10}
						slidesPerView={8}
						watchSlidesProgress
						touchRatio={0.2}
						slideToClickedSlide={true}
						onSwiper={setThumbsSwiper}
						modules={[Navigation, Thumbs, Controller]}
						className="mt-3 mySwiper"
					>
						{info.imagesChildren.map((images, index) => (
							<SwiperSlide key={index}>
								<img src={images} className="rounded-md max-h-[120px] w-full" />
							</SwiperSlide>
						))}
					</Swiper>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default ModalGallery;
