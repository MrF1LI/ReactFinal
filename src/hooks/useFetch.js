import { useState, useEffect } from 'react';

const useFetch = (fetchFunction, params = []) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchFunction(...params).then((res) => {
			console.log("res.data")
			console.log(res.data)
			setData(res.data);
			setLoading(false);
		});
	}, []);

	return { data, loading };
};

export default useFetch;
