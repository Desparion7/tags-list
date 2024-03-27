import { create } from 'zustand';
import { PaginationState } from '../types/paginationStateType';

// Tworzenie hooka stanu za pomocą Zustand
export const usePaginationTags = create<PaginationState>((set) => ({
	page: 1,
	rowsPerPage: 10,
	orderOption: 'desc',
	sortOption: 'popular',
	setPage: (newPage: number) => set({ page: newPage }),
	setRowsPerPage: (newRowsPerPage: number) =>
		set({ rowsPerPage: newRowsPerPage }),
	setOrderOption: (newOrderOption: 'desc' | 'asc') =>
		set({ orderOption: newOrderOption }),
	setSortOption: (newSortOption: 'popular' | 'activity' | 'name') =>
		set({ sortOption: newSortOption }),
}));
