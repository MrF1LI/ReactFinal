import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';
import axios from 'axios';

const MealDetails = () => {
	const { id } = useParams();
	const [meal, setMeal] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchMeal = async () => {
			try {
				const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
				setMeal(response.data.meals[0]);
			} catch (error) {
				console.error('Error fetching meal:', error);
			} finally {
				setLoading(false);
			}
		};

		fetchMeal();
	}, [id]);

	if (loading) return <p>Loading...</p>;
	if (!meal) return <p>Meal not found.</p>;

	return (
		<AnimatedPage>
			<div className="container mt-4">
				<h2 className="mb-3">{meal.strMeal}</h2>
				<img src={meal.strMealThumb} alt={meal.strMeal} className="img-fluid rounded mb-4" style={{ maxWidth: '400px' }} />

				<p><strong>Category:</strong> {meal.strCategory}</p>
				<p><strong>Area:</strong> {meal.strArea}</p>
				<p><strong>Tags:</strong> {meal.strTags || 'None'}</p>

				<h4 className="mt-4">Instructions</h4>
				<p style={{ whiteSpace: 'pre-line' }}>{meal.strInstructions}</p>

				{meal.strYoutube && (
					<div className="mt-4">
						<h5>Video Tutorial</h5>
						<a href={meal.strYoutube} target="_blank" rel="noopener noreferrer" className="btn btn-danger">
							Watch on YouTube
						</a>
					</div>
				)}

				<h4 className="mt-4">Ingredients</h4>
				<ul>
					{Array.from({ length: 20 }).map((_, i) => {
						const ingredient = meal[`strIngredient${i + 1}`];
						const measure = meal[`strMeasure${i + 1}`];
						return ingredient && ingredient.trim() ? (
							<li key={i}>
								{ingredient} - {measure}
							</li>
						) : null;
					})}
				</ul>
			</div>
		</AnimatedPage>
	);
};

export default MealDetails;
