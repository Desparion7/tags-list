export type PaginationState = {
	page: number;
	rowsPerPage: number;
	orderOption: 'desc' | 'asc';
	sortOption: 'popular' | 'activity'| 'name';
	setPage: (newPage: number) => void;
	setRowsPerPage: (newRowsPerPage: number) => void;
	setOrderOption: (newOrderOption: 'desc' | 'asc') => void;
	setSortOption: (newSortOption: 'popular' | 'activity'| 'name') => void;
};
