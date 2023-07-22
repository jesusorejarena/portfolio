import Vantageio from '../../assets/images/companies/vantageio.svg';
import Accento from '../../assets/images/companies/accento.png';
import Kunaisoft from '../../assets/images/companies/kunaisoft.jpeg';
import { CompanyItemProps } from '../../types/experience';

export const companies: CompanyItemProps['company'][] = [
	{
		stack: 'Semi-Senior',
		company: 'VantageIO',
		date: {
			start: {
				month: 'february',
				year: '2022',
			},
			end: {
				month: 'june',
				year: '2023',
			},
		},
		description: {
			es: 'Como desarrollador semisenior en VantageIO, una destacada empresa de desarrollo tecnológico, utilicé mis habilidades en React.js, React Native, Tailwind CSS, Python, MongoDB, Stripe y NativeBase para diseñar, desarrollar y mantener aplicaciones web y móviles de alta calidad. Implementé soluciones innovadoras, creando interfaces interactivas y atractivas para estilos modernos y escalables. Manejé la lógica del servidor y la base de datos con Python y MongoDB, integré servicios de pago con Stripe y aseguré un rendimiento óptimo. En VantageIO, participé en proyectos exitosos, demostrando mi capacidad para utilizar tecnologías modernas y contribuir al éxito de los proyectos tecnológicos.',
			en: 'As a semi-senior developer at VantageIO, a prominent technology development company, I utilized my skills in React.js, React Native, Tailwind CSS, Python, MongoDB, Stripe, and NativeBase to design, develop, and maintain high-quality web and mobile applications. I implemented innovative solutions, creating interactive and engaging interfaces with modern and scalable styles. Handling server logic and database management with Python and MongoDB, I integrated payment services using Stripe and ensured optimal performance. At VantageIO, I actively participated in successful projects, demonstrating my ability to leverage modern technologies and contribute to the success of technological initiatives.',
		},
		logo: Vantageio,
		logoAlt: 'vantageio',
		skills: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'TypeScript',
			'Tailwind CSS',
			'Bootstrap',
			'NativeBase',
			'ReactJS',
			'React Native',
			'NodeJS',
			'Python',
			'MongoDB',
			'Stripe',
			'FastApi',
			'Firebase',
			'Git',
			'Bitbucket',
		],
	},
	{
		stack: 'Semi-Senior',
		company: 'KunaiSoft',
		date: {
			start: {
				month: 'january',
				year: '2022',
			},
			end: {
				month: 'june',
				year: '2022',
			},
		},
		description: {
			es: 'Durante mi tiempo como programador freelance en una agencia, tuve la oportunidad de trabajar en varios proyectos, incluyendo el desarrollo de diversas aplicaciones móviles utilizando React Native, la creación de páginas web con ReactJS y el manejo de tareas de backend con Python y otras tecnologías. Mi experiencia diversa me permitió contribuir de manera efectiva al éxito de estos proyectos, proporcionando soluciones innovadoras y de alta calidad para satisfacer las necesidades de nuestros clientes.',
			en: 'During my time as a freelance programmer at an agency, I had the opportunity to work on multiple projects, including developing various mobile applications using React Native, creating web pages with ReactJS, and handling backend tasks using Python and other technologies. My diverse experience allowed me to contribute effectively to the success of these projects, providing innovative and high-quality solutions to meet our clients needs.',
		},
		logo: Kunaisoft,
		logoAlt: 'kunaisoft',
		skills: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'TypeScript',
			'Tailwind CSS',
			'Bootstrap',
			'NativeBase',
			'ReactJS',
			'React Native',
			'NodeJS',
			'Python',
			'MongoDB',
			'FastApi',
			'Firebase',
			'Git',
			'Bitbucket',
			'GitLab',
		],
	},
	{
		stack: 'Junior',
		company: 'Accento',
		date: {
			start: {
				month: 'october',
				year: '2020',
			},
			end: {
				month: 'october',
				year: '2022',
			},
		},
		description: {
			es: 'Como programador junior en esta prestigiosa empresa, experimenté un significativo crecimiento profesional al liderar un equipo en el desarrollo de una destacada aplicación en React Native para una universidad. Aplicando prácticas de código limpio y fomentando la escalabilidad, logré el éxito del proyecto y brindé apoyo y guía a mi equipo en su desarrollo profesional, consolidando mi compromiso con la excelencia en la ingeniería informática.',
			en: 'As a junior programmer at this prestigious company, I experienced significant professional growth while leading a team in developing a standout React Native application for a renowned university. By implementing clean code practices and fostering scalability, I achieved project success and provided support and guidance to my team in their professional development, solidifying my commitment to excellence in computer engineering. ',
		},
		logo: Accento,
		logoAlt: 'accento',
		skills: [
			'HTML5',
			'CSS3',
			'JavaScript',
			'TypeScript',
			'Tailwind CSS',
			'Bootstrap',
			'NativeBase',
			'ReactJS',
			'React Native',
			'NodeJS',
			'Git',
			'GitHub',
		],
	},
	{
		stack: 'Junior',
		company: 'Freelance',
		date: {
			start: {
				month: 'april',
				year: '2019',
			},
			end: {
				month: 'september',
				year: '2020',
			},
		},
		description: {
			es: '',
			en: '',
		},
		logo: '',
		logoAlt: '',
		skills: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'WordPress'],
	},
];
