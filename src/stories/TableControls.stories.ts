import '../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import TableControls from '../components/TableControls';

const meta: Meta<typeof TableControls> = {
	component: TableControls,
	title: 'TableControls',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		rowsPerPage: 5,
		orderOption: 'desc',
		sortOption: 'popular',
	},
};
