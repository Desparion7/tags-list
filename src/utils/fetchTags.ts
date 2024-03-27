type PropsType = {
	pageSize: number;
	page: number;
	orderOption: 'desc' | 'asc';
	sortOption: 'popular' | 'activity' | 'name';
};

export const fetchTags = async ({
	pageSize = 10,
	page = 1,
	orderOption = 'desc',
	sortOption = 'popular',
}: PropsType) => {
	const AllTagsUrl =
		'https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow&filter=total&key=qUAnf2KH*Qk2rk0kyyEeAQ((';
	const TagsUrl = `https://api.stackexchange.com/2.3/tags?order=${orderOption}&sort=${sortOption}&site=stackoverflow&page=${page}&pageSize=${pageSize}&key=qUAnf2KH*Qk2rk0kyyEeAQ((`;

	try {
		const [allTagsResponse, tagsResponse] = await Promise.all([
			fetch(AllTagsUrl),
			fetch(TagsUrl),
		]);

		if (!allTagsResponse.ok) {
			throw new Error('Network response for all tags was not ok');
		}
		if (!tagsResponse.ok) {
			throw new Error('Network response for tags was not ok');
		}

		const [allTagsData, tagsData] = await Promise.all([
			allTagsResponse.json(),
			tagsResponse.json(),
		]);

		return { allTagsData, tagsData };
	} catch (error) {
		console.error('Error fetching data:', error);
	}
};
