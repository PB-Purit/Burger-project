import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitch: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'en'
            ? 'bg-primary-500 text-white'
            : 'text-gray-600 hover:text-primary-500'
        }`}
      >
        {t('language.en')}
      </button>
      <span className="text-gray-300">|</span>
      <button
        onClick={() => changeLanguage('th')}
        className={`px-2 py-1 rounded ${
          i18n.language === 'th'
            ? 'bg-primary-500 text-white'
            : 'text-gray-600 hover:text-primary-500'
        }`}
      >
        {t('language.th')}
      </button>
    </div>
  );
};

export default LanguageSwitch;