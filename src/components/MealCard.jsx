import React from 'react';
import { Link, Route } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const MealCard = ({ meal }) => {
	const { language } = useLanguage();

	return(
		<div className="card h-100" style={{width: '18rem'}}>
			<img
				src={meal.strMealThumb}
				className="card-img-top"
				alt={meal.strMeal}
			/>
			<div className="card-body">
				<h5 className="card-title">{meal.strMeal}</h5>
				{/* You can add a short description if you want */}
				<p className="card-text">{meal.strInstructions?.substring(0, 100)}...</p>
				<Link to={`/meal/${meal.idMeal}`} className="btn btn-primary">
					{language === 'ka' ? 'დეტალურად' : 'Details'}
				</Link>
			</div>
		</div>
	)
};

export default MealCard;
