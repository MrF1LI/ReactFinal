import { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(() => localStorage.getItem('lang') || 'en');

	const switchLanguage = (lang) => {
		setLanguage(lang);
		localStorage.setItem('lang', lang);
	};

	return (
		<LanguageContext.Provider value={{ language, switchLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
