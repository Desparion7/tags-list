import { useQuery } from '@tanstack/react-query';
import { fetchTags } from './utils/fetchTags';
import TagsTable from './components/TagsTable';
import { usePaginationTags } from './context/state';
import { useEffect } from 'react';
import LoadingSpinner from './components/LoadingSpinner';
function App() {
	const { page, rowsPerPage, orderOption, sortOption } = usePaginationTags();
	const { isLoading, isSuccess, isError, data, refetch, isFetching } =
		useQuery({
			queryKey: ['tags'],
			queryFn: async () => {
				const data = await fetchTags({
					pageSize: rowsPerPage,
					page,
					orderOption,
					sortOption,
				});
				return data;
			},
		});

	useEffect(() => {
		refetch();
	}, [page, rowsPerPage, orderOption, sortOption, refetch]);

	return (
		<div className='container mx-auto mt-5'>
			<h1 className='font-semibold text-3xl ml-3 mb-3 text-center'>
				Tags List
			</h1>
			{isLoading && (
				<div className='flex justify-center items-center mt-10'>
					<LoadingSpinner />
				</div>
			)}
			{isSuccess && (
				<TagsTable
					items={data?.tagsData.items}
					total={data?.allTagsData.total}
					isFetching={isFetching}
				/>
			)}
			{isError && (
				<div className='text-red-500 font-semibold text-2xl'>
					Sorry, something go wrong please try again later!
				</div>
			)}
		</div>
	);
}

export default App;
