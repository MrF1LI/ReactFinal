import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const getMeals = async () => {
	return await axios.get(`${BASE_URL}/search.php?s=`);
};

export const getCategories = async () => {
	return await axios.get(`${BASE_URL}/categories.php`);
};

export const getMealById = async (id) => {
	return await axios.get(`${BASE_URL}/lookup.php?i=${id}`);
};
