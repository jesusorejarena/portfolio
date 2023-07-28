import { FunctionComponent } from 'react';
import Text from '../../Common/Text';
import { useTranslation } from 'react-i18next';
import { CompanyItemProps } from '../../../types/experience';
import { Fade, Slide } from 'react-awesome-reveal';
import { icons } from '../../About/SkillsIcons/icons';

const CompanyItem: FunctionComponent<CompanyItemProps> = ({ company }) => {
	const { t: tGlobal, i18n } = useTranslation('', { keyPrefix: 'global' });

	const currentLanguage: 'es' | 'en' = i18n.language !== 'es' && i18n.language !== 'en' ? 'es' : i18n.language;

	return (
		<div className="flex flex-col lg:flex-row flex-wrap space-y-10">
			<div className="lg:w-[60%] space-y-5">
				<div className="flex flex-wrap gap-2 items-end">
					<Text className="text-3xl font-bold underline underline-offset-4 decoration-blue-500">
						{currentLanguage === 'es' ? tGlobal('developer') : company.stack}
					</Text>
					<Text className="bg-blue-600 text-white text-3xl px-2 py-1">
						{currentLanguage === 'es' ? company.stack : tGlobal('developer')}
					</Text>
				</div>
				<div className="flex flex-wrap items-end space-y-2 pb-2">
					<Text className="text-2xl font-medium underline underline-offset-4 decoration-blue-500">
						{company.company}
					</Text>
					<Text className="text-2xl font-medium px-2">/</Text>
					<Text className="text-2xl font-medium">
						{company.date.start.year} ({tGlobal(`months.${company.date.start.month}`)}) - {company.date.end.year} (
						{tGlobal(`months.${company.date.end.month}`)})
					</Text>
				</div>

				<Text className="text-xl text-gray-500 font-normal max-w-[1000px]">
					{company.description?.[currentLanguage]}
				</Text>
				<div className="flex flex-wrap gap-2">
					<Fade direction="up" duration={150} cascade triggerOnce>
						{company.skills.map((skill, index) => {
							const iconColor = icons.find((icon) => skill === icon.name);

							return (
								<span
									key={index}
									className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded"
									style={{ backgroundColor: iconColor?.color, color: iconColor?.textColor }}
								>
									{skill}
								</span>
							);
						})}
					</Fade>
				</div>
			</div>

			{company.image && (
				<div className="flex items-center justify-center lg:w-[40%]">
					<Slide direction="right" triggerOnce>
						<img className="max-w-[300px]" src={company.image} alt={company.logoAlt} loading="lazy" />
					</Slide>
				</div>
			)}
		</div>
	);
};

export default CompanyItem;
