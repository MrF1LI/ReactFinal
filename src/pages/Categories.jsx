import React, { useEffect, useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import axios from 'axios';

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
				setCategories(res.data.categories);
			} catch (err) {
				console.error('Error fetching categories:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchCategories();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<AnimatedPage>
			<div className="container mt-4">
				<h2 className="mb-4 text-center">Meal Categories</h2>
				<div className="row">
					{categories.map((cat) => (
						<div key={cat.idCategory} className="col-md-4 mb-4">
							<div className="card h-100">
								<img
									src={cat.strCategoryThumb}
									className="card-img-top"
									alt={cat.strCategory}
								/>
								<div className="card-body d-flex flex-column">
									<h5 className="card-title">{cat.strCategory}</h5>
									<p className="card-text clamp-3-lines">{cat.strCategoryDescription}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</AnimatedPage>
	);
};

export default Categories;
