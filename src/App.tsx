import { useQuery } from '@tanstack/react-query';
import { fetchTags } from './utils/fetchTags';
import TagsTable from './components/TagsTabel';

function App() {
	const { isLoading, isSuccess, isError, data } = useQuery({
		queryKey: ['citiesWeather'],
		queryFn: fetchTags,
	});

	return (
		<div className='container mx-auto mt-5'>
			<h1 className='font-semibold text-3xl ml-3 mb-3 text-center'>
				Tags List
			</h1>
			{isLoading && <div>Loading...</div>}
			{isSuccess && <TagsTable items={data.items} />}
			{isError && (
				<div className='text-red-500 font-semibold text-2xl'>
					Sorry, something go wrong please try again later!
				</div>
			)}
		</div>
	);
}

export default App;
