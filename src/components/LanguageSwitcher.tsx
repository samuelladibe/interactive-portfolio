// // src/components/LanguageSwitcher.tsx
// 'use client';

// import React, { useState } from 'react';
// import { IoLanguageOutline } from 'react-icons/io5'; // A clean translation icon

// const LanguageSwitcher: React.FC = () => {
//   const [lang, setLang] = useState<'FR' | 'EN'>('FR');

//   const toggleLanguage = () => {
//     const newLang = lang === 'FR' ? 'EN' : 'FR';
//     setLang(newLang);
//     // Logic to actually change the site language would go here (i18n)
//     console.log(`Language changed to: ${newLang}`);
//   };

//   return (
//     <button
//       onClick={toggleLanguage}
//       className="group flex items-center space-x-2 bg-gray-800/50 border border-gray-700 hover:border-teal-400/50 px-3 py-1.5 rounded-full transition-all duration-300"
//     >
//       <IoLanguageOutline className="text-teal-400 group-hover:rotate-12 transition-transform" />
      
//       <div className="flex items-center font-mono text-xs tracking-tighter">
//         <span className={`transition-colors ${lang === 'EN' ? 'text-teal-400 font-bold' : 'text-gray-500'}`}>
//           EN
//         </span>
//         <span className="mx-1 text-gray-600">|</span>
//         <span className={`transition-colors ${lang === 'FR' ? 'text-teal-400 font-bold' : 'text-gray-500'}`}>
//           FR
//         </span>
//       </div>
      
//       {/* Visual Indicator/Icon */}
//       <span className="text-sm">
//         {lang === 'FR' ? '🇫🇷' : '🇬🇧'}
//       </span>
//     </button>
//   );
// };

// export default LanguageSwitcher;

// src/components/LanguageSwitcher.tsx
'use client';

import React, { useState } from 'react';
import { IoLanguageOutline } from 'react-icons/io5';

const LanguageSwitcher: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'FR' | 'EN'>('FR');

  const handleTranslate = (langCode: string) => {
    // Logic to trigger the Google Translate engine
    const googleCombo = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (googleCombo) {
      googleCombo.value = langCode;
      googleCombo.dispatchEvent(new Event('change'));
      setCurrentLang(langCode === 'en' ? 'EN' : 'FR');
    }
  };

  return (
    <button
      onClick={() => handleTranslate(currentLang === 'FR' ? 'en' : 'fr')}
      className="group flex items-center space-x-2 bg-gray-800/40 border border-gray-700 hover:border-teal-400/50 px-4 py-2 rounded-full transition-all duration-300 shadow-xl"
    >
      <IoLanguageOutline className="text-teal-400 text-lg" />
      
      <div className="flex items-center font-mono text-xs font-bold uppercase tracking-widest">
        <span className={currentLang === 'EN' ? 'text-teal-400' : 'text-gray-500'}>EN</span>
        <span className="mx-2 text-gray-700">/</span>
        <span className={currentLang === 'FR' ? 'text-teal-400' : 'text-gray-500'}>FR</span>
      </div>
      
      <span>{currentLang === 'FR' ? '🇫🇷' : '🇬🇧'}</span>
    </button>
  );
};

export default LanguageSwitcher;