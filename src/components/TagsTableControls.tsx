import { ChangeEvent } from 'react';

interface TagsTableControlsProps {
	rowsPerPage: number;
	handleChangeRowsPerPage: (event: ChangeEvent<{ value: unknown }>) => void;
	sortOption: 'name' | 'count' | 'name_desc' | 'count_desc';
	handleSortChange: (event: ChangeEvent<{ value: unknown }>) => void;
}

function TagsTableControls({
	rowsPerPage,
	handleChangeRowsPerPage,
	sortOption,
	handleSortChange,
}: TagsTableControlsProps) {
	return (
		<div className='mb-5 flex justify-end gap-5'>
			<div>
				<label htmlFor='rowsPerPage'>Tags per page:</label>
				<select
					id='rowsPerPage'
					value={rowsPerPage}
					onChange={handleChangeRowsPerPage}
					className='outline-none focus-none cursor-pointer'
				>
					<option value={5}>5</option>
					<option value={10}>10</option>
					<option value={20}>20</option>
				</select>
			</div>
			<div>
				<label htmlFor='sortOption'>Sort by:</label>
				<select
					id='sortOption'
					value={sortOption}
					onChange={handleSortChange}
					className='outline-none focus-none cursor-pointer'
				>
					<option value='name'>Name (A-Z)</option>
					<option value='name_desc'>Name (Z-A)</option>
					<option value='count'>Post Count (Low to High)</option>
					<option value='count_desc'>Post Count (High to Low)</option>
				</select>
			</div>
		</div>
	);
}

export default TagsTableControls;
