import React from 'react';
import { getMeals } from '../services/api';
import useFetch from '../hooks/useFetch';
import MealCard from '../components/MealCard';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
	const { data, loading } = useFetch(getMeals);

	if (loading) return (
		<div className="spinner-border text-primary" role="status">
			<span className="visually-hidden">Loading...</span>
		</div>
	);

	return (
		<AnimatedPage>
			<div className="container mt-4">
				<div className="row">
					{data.meals.map((meal) => (
						<div key={meal.idMeal} className="col mb-4">
							<MealCard meal={meal} />
						</div>
					))}
				</div>
			</div>
		</AnimatedPage>
	);
};

export default Home;
