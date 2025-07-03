import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import AnimatedPage from '../components/AnimatedPage';

const Settings = () => {
	const { theme, toggleTheme } = useTheme();
	const { language, switchLanguage } = useLanguage();

	return (
		<AnimatedPage>
			<div className="container mt-4 width-100 height-100" style={{
				width: '100vw',
				height: '100vh',
				overflowY: 'auto',
				backgroundColor: 'var(--bs-body-bg)', // optional: keeps background consistent
			}}>
				<h2>{language === 'ka' ? 'პარამეტრები' : 'Settings'}</h2>

				<div className="form-check form-switch mt-4">
					<input
						className="form-check-input"
						type="checkbox"
						id="themeSwitch"
						checked={theme === 'dark'}
						onChange={toggleTheme}
					/>
					<label className="form-check-label" htmlFor="themeSwitch">
						{language === 'ka' ? 'ბნელი თემა' : 'Dark Theme'}
					</label>
				</div>

				<div className="mt-4">
					<label className="form-label">
						{language === 'ka' ? 'აირჩიეთ ენა' : 'Choose language'}:
					</label>
					<select
						className="form-select"
						value={language}
						onChange={(e) => switchLanguage(e.target.value)}
					>
						<option value="en">English</option>
						<option value="ka">ქართული</option>
					</select>
				</div>
			</div>
		</AnimatedPage>
	);
};

export default Settings;
