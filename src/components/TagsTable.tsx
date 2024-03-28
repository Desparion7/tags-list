import * as React from 'react';
import { TagType } from '../types/tagType';
import { usePaginationTags } from '../context/state';
import TagsTableControls from './TableControls';
import CustomTable from './CustomTable';
import CustomPagination from './CustomPagination';

export type TagsTablePropsType = {
	items: TagType[];
	total: number;
	isFetching: boolean;
};

export default function TagsTable({
	items,
	total,
	isFetching,
}: TagsTablePropsType) {
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
			{!isFetching && <CustomTable items={items} />}
			{isFetching && <CustomTable items={[]} />}
			<CustomPagination
				total={total}
				rowsPerPage={rowsPerPage}
				page={page}
				setPage={setPage}
			/>
		</>
	);
}
