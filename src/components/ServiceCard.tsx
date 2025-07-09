import React from 'react';

type SolutionType = 'technology' | 'business' | 'operational';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  solutionType: SolutionType;
  solutionIcon: React.ReactNode;
  solutionTitle: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  solutionType,
  solutionIcon,
  solutionTitle,
}) => {
  const getSolutionStyles = () => {
    switch (solutionType) {
      case 'technology':
        return {
          bg: 'bg-primary-custom',
          textColor: 'text-white-custom',
          iconBg: 'bg-primary-custom',
        };
      case 'business':
        return {
          bg: 'bg-highlight-custom',
          textColor: 'text-primary-custom',
          iconBg: 'bg-highlight-custom',
        };
      case 'operational':
        return {
          bg: 'bg-secondary-custom',
          textColor: 'text-white-custom',
          iconBg: 'bg-secondary-custom',
        };
      default:
        return {
          bg: 'bg-gray-500',
          textColor: 'text-white',
          iconBg: 'bg-gray-500',
        };
    }
  };

  const solutionStyles = getSolutionStyles();

  return (
    <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white relative">
      {/* Solution Tag */}
      <div 
        className={`absolute top-2 right-2 ${solutionStyles.bg} rounded-lg p-1 flex items-center justify-center`} 
        title={solutionTitle}
      >
        <div className={`${solutionStyles.textColor} flex items-center justify-center overflow-hidden`} style={{ width: '16px', height: '16px' }}>
          {solutionIcon}
        </div>
      </div>
      
      <div className={`rounded-full w-14 h-14 flex items-center justify-center mb-6 ${solutionStyles.iconBg}`}>
        <div className={`${solutionType === 'business' ? 'text-primary-custom' : 'text-white-custom'} w-8 h-8`}>
          {icon}
        </div>
      </div>
      <h4 className="text-xl font-bold mb-3">{title}</h4>
      <p>{description}</p>
    </div>
  );
};
