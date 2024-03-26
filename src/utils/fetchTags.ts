export const fetchTags = async () => {
	try {
		const response = await fetch('https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};
