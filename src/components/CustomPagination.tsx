import { Pagination, Stack } from '@mui/material';

interface CustomPaginationProps {
	total: number;
	rowsPerPage: number;
	page: number;
	setPage: (newPage: number) => void;
}
const CustomPagination = ({
	total,
	rowsPerPage,
	page,
	setPage,
}: CustomPaginationProps) => {
	return (
		<div className='mt-5 mb-10 flex justify-center'>
			<Stack spacing={2}>
				<Pagination
					count={Math.ceil(total / rowsPerPage)}
					variant='outlined'
					shape='rounded'
					page={page}
					onChange={(_event, newPage) => setPage(newPage)}
				/>
			</Stack>
		</div>
	);
};

export default CustomPagination;
