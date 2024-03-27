import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableFooter from '@mui/material/TableFooter';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TagType } from '../types/tagType';
import { TablePaginationActions } from './TablePaginationActions';
import TagsTableControls from './TagsTableControls';

export default function TagsTable({ items }: { items: TagType[] }) {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
	const [sortOption, setSortOption] = React.useState<
		'name' | 'count' | 'name_desc' | 'count_desc'
	>('name');

	const handleSortChange = (event: React.ChangeEvent<{ value: unknown }>) => {
		const newSortOption = event.target.value as
			| 'name'
			| 'count'
			| 'name_desc'
			| 'count_desc';
		setSortOption(newSortOption);
	};

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - items.length) : 0;

	const handleChangePage = (
		_event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<{ value: unknown }>
	) => {
		setRowsPerPage(parseInt(event.target.value as string, 10));
		setPage(0);
	};

	const sortedItems = React.useMemo(() => {
		switch (sortOption) {
			case 'name':
				return [...items].sort((a, b) => a.name.localeCompare(b.name));
			case 'name_desc':
				return [...items].sort((a, b) => b.name.localeCompare(a.name));
			case 'count':
				return [...items].sort((a, b) => a.count - b.count);
			case 'count_desc':
				return [...items].sort((a, b) => b.count - a.count);
			default:
				return items;
		}
	}, [items, sortOption]);

	return (
		<>
			<TagsTableControls
				rowsPerPage={rowsPerPage}
				handleChangeRowsPerPage={handleChangeRowsPerPage}
				sortOption={sortOption}
				handleSortChange={handleSortChange}
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
						{(rowsPerPage > 0
							? sortedItems.slice(
									page * rowsPerPage,
									page * rowsPerPage + rowsPerPage
									// eslint-disable-next-line no-mixed-spaces-and-tabs
							  )
							: sortedItems
						).map((item) => (
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
						{emptyRows > 0 && (
							<TableRow style={{ height: 53 * emptyRows }}>
								<TableCell colSpan={6} />
							</TableRow>
						)}
					</TableBody>
					<TableFooter>
						<TableRow>
							<TablePagination
								rowsPerPageOptions={[]}
								colSpan={3}
								count={sortedItems.length}
								rowsPerPage={rowsPerPage}
								page={page}
								slotProps={{
									select: {
										inputProps: {
											'aria-label': 'rows per page',
										},
										native: true,
									},
								}}
								onPageChange={handleChangePage}
								onRowsPerPageChange={handleChangeRowsPerPage}
								ActionsComponent={TablePaginationActions}
							/>
						</TableRow>
					</TableFooter>
				</Table>
			</TableContainer>
		</>
	);
}
