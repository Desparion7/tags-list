import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TagType } from '../types/tagType';
import { usePaginationTags } from '../context/state';
import TagsTableControls from './TagsTableControls';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type TagsTabelPropsType = {
	items: TagType[];
	total: number;
};

export default function TagsTable({ items, total }: TagsTabelPropsType) {
	const {
		page,
		rowsPerPage,
		orderOption,
		setOrderOption,
		sortOption,
		setSortOption,
		setPage,
		setRowsPerPage,
	} = usePaginationTags();

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setRowsPerPage(parseInt(event.target.value as string, 10));
	};
	const handleChangeOrderOption = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setOrderOption(event.target.value as 'desc' | 'asc');
	};
	const handleChangeSortOption = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setSortOption(event.target.value as 'popular' | 'activity' | 'name');
	};

	return (
		<>
			<TagsTableControls
				rowsPerPage={rowsPerPage}
				handleChangeRowsPerPage={handleChangeRowsPerPage}
				orderOption={orderOption}
				handleChangeOrderOption={handleChangeOrderOption}
				sortOption={sortOption}
				handleChangeSortOption={handleChangeSortOption}
			/>
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 500 }}
					aria-label='custom pagination table'
				>
					<TableHead>
						<TableRow>
							<TableCell
								colSpan={2}
								style={{
									width: 160,
									fontSize: 20,
									backgroundColor: '#70B8E7',
									color: 'white',
								}}
							>
								Tag
							</TableCell>
							<TableCell
								style={{
									width: 160,
									fontSize: 20,
									backgroundColor: '#70B8E7',
									color: 'white',
								}}
								align='right'
								colSpan={3}
							>
								Number of posts
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{items.map((item) => (
							<TableRow key={item.name}>
								<TableCell component='th' scope='row'>
									{item.name}
								</TableCell>
								<TableCell
									style={{ width: 160 }}
									align='right'
									colSpan={3}
								>
									{item.count}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
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
		</>
	);
}
