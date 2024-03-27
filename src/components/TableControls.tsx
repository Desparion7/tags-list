import { ChangeEvent } from 'react';
interface TableControlsProps {
	rowsPerPage: number;
	orderOption: 'desc' | 'asc';
	sortOption: 'popular' | 'activity' | 'name';
	handleChangeRowsPerPage: (event: ChangeEvent<{ value: unknown }>) => void;
	handleChangeOrderOption: (
		event: React.ChangeEvent<{
			value: unknown;
		}>
	) => void;
	handleChangeSortOption: (
		event: React.ChangeEvent<{
			value: unknown;
		}>
	) => void;
}
const TableControls = ({
	rowsPerPage,
	orderOption,
	sortOption,
	handleChangeRowsPerPage,
	handleChangeOrderOption,
	handleChangeSortOption,
}: TableControlsProps) => {
	return (
		<div className='mb-5 pt-5 flex justify-end gap-5 border-t-2'>
			<div>
				<label htmlFor='rowsPerPage'>Tags per page:</label>
				<select
					id='rowsPerPage'
					value={rowsPerPage}
					onChange={handleChangeRowsPerPage}
					className='outline-none focus-none cursor-pointer custom-select'
				>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={20}>20</option>
					<option value={50}>50</option>
					<option value={100}>100</option>
				</select>
			</div>
			<div>
				<label htmlFor='orderOption'>Sort</label>
				<select
					id='orderOption'
					value={orderOption}
					onChange={handleChangeOrderOption}
					className='outline-none focus-none cursor-pointer mr-1 custom-select'
				>
					<option value='desc'>descending</option>
					<option value='asc'>ascending</option>
				</select>
				<label htmlFor='sortOption'>by:</label>
				<select
					id='sortOption'
					value={sortOption}
					onChange={handleChangeSortOption}
					className='outline-none focus-none cursor-pointer custom-select'
				>
					<option value='popular'>popular</option>
					<option value='activity'>activity</option>
					<option value='name'>name</option>
				</select>
			</div>
		</div>
	);
};

export default TableControls;
