import { Pagination, TextField } from '@mui/material';
import { useState } from 'react';

type CustomPaginationProps = {
	total: number;
	rowsPerPage: number;
	page: number;
	setPage: (newPage: number) => void;
};
const CustomPagination = ({
	total,
	rowsPerPage,
	page,
	setPage,
}: CustomPaginationProps) => {
	const [pageNumber, setPageNumber] = useState('');

	const handlePageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPageNumber(event.target.value);
	};

	const handleGoToPage = () => {
		const parsedPageNumber = parseInt(pageNumber, 10);
		if (
			!isNaN(parsedPageNumber) &&
			parsedPageNumber > 0 &&
			parsedPageNumber <= Math.ceil(total / rowsPerPage)
		) {
			setPage(parsedPageNumber);
			setPageNumber('');
		}
	};

	return (
		<div className='mt-5 mb-10 flex flex-col sm:flex-row items-center justify-center gap-2'>
			<Pagination
				count={Math.ceil(total / rowsPerPage)}
				variant='outlined'
				shape='rounded'
				size='large'
				page={page}
				onChange={(_event, newPage) => setPage(newPage)}
			/>
			<TextField
				label='Go to page'
				variant='outlined'
				size='small'
				type='number'
				value={pageNumber}
				onChange={handlePageChange}
				className='w-28'
			/>

			<button
				onClick={handleGoToPage}
				className='bg-blue-500 px-4 py-2 rounded-sm  text-white hover:bg-blue-600 transition-all duration-300'
			>
				Go
			</button>
		</div>
	);
};

export default CustomPagination;
