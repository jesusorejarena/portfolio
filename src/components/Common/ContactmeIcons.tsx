import { FunctionComponent } from 'react';
import { Button } from 'flowbite-react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { BiLogoGmail, BiSolidCloudDownload } from 'react-icons/bi';
import { useTranslation } from 'react-i18next';
import { Fade } from 'react-awesome-reveal';

const ContactmeIcons: FunctionComponent = () => {
	const { t } = useTranslation('', { keyPrefix: 'global' });

	const iconZoom = 'transition-transform duration-500 hover:scale-125 hover:cursor-pointer ease-in-out';

	return (
		<div className="flex flex-wrap items-center justify-center md:justify-normal gap-x-7 gap-y-4 text-4xl">
			<Fade direction="up" duration={500} cascade triggerOnce>
				<a href="https://www.linkedin.com/in/jesusorejarena/" target="_blank" rel="noopener noreferrer">
					<FaLinkedin className={`${iconZoom} text-[#1E73B2]`} />
				</a>
				<a href="https://www.upwork.com/freelancers/~0186f09c7907b56b50" target="_blank" rel="noopener noreferrer">
					<SiUpwork className={`${iconZoom} text-[#2BA800]`} />
				</a>
				<a href="https://github.com/jesusorejarena" target="_blank" rel="noopener noreferrer">
					<FaGithubSquare className={`${iconZoom} dark:text-white`} />
				</a>
				<a href="mailto:jesusorejarena@gmail.com" target="_blank" rel="noopener noreferrer">
					<BiLogoGmail className={`${iconZoom} text-[#CE3D31]`} />
				</a>

				<a href="../../assets/files/CV-JesusOrejarena.pdf" download="CV-JesusOrejarena.pdf">
					<Button size="xs" color="primary">
						{t('download_cv')}
						<BiSolidCloudDownload className="ml-2 text-2xl text-white" />
					</Button>
				</a>
			</Fade>
		</div>
	);
};

export default ContactmeIcons;
