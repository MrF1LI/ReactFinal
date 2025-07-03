// components/Header.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
	const { language } = useLanguage();

	const labels = {
		en: {
			home: 'Home',
			categories: 'Categories',
			settings: 'Settings',
			search: 'Search...',
			brand: 'FoodApp',
		},
		ka: {
			home: 'მთავარი',
			categories: 'კატეგორიები',
			settings: 'პარამეტრები',
			search: 'ძებნა...',
			brand: 'საკვები',
		},
	};

	const t = labels[language] || labels.en;

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">{t.brand}</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarMain"
					aria-controls="navbarMain"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarMain">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink to="/" className="nav-link">{t.home}</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/categories" className="nav-link">{t.categories}</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/settings" className="nav-link">{t.settings}</NavLink>
						</li>
					</ul>

					<form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
						<input
							className="form-control me-2"
							type="search"
							placeholder={t.search}
							aria-label="Search"
						/>
						<button className="btn btn-outline-success" type="submit">{t.search}</button>
					</form>
				</div>
			</div>
		</nav>
	);
};

export default Header;
