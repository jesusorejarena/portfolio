import { FunctionComponent } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { infoImages, ratios } from './infoImages';
import ImagesItem from './ImagesItem.ts';

const Gallery: FunctionComponent = () => {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
			<div className="grid gap-4">
				<Slide direction="left" triggerOnce>
					{infoImages.col1.map((info, index) => (
						<ImagesItem key={index} info={info} col={ratios.col1} index={index} />
					))}
				</Slide>
			</div>
			<div className="grid gap-4">
				<Fade triggerOnce>
					{infoImages.col2.map((info, index) => (
						<ImagesItem key={index} info={info} col={ratios.col2} index={index} />
					))}
				</Fade>
			</div>
			<div className="grid gap-4">
				<Fade triggerOnce>
					{infoImages.col3.map((info, index) => (
						<ImagesItem key={index} info={info} col={ratios.col3} index={index} />
					))}
				</Fade>
			</div>
			<div className="grid gap-4">
				<Slide direction="right" triggerOnce>
					{infoImages.col4.map((info, index) => (
						<ImagesItem key={index} info={info} col={ratios.col4} index={index} />
					))}
				</Slide>
			</div>
		</div>
	);
};

export default Gallery;
