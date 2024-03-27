import '../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import CustomPagination from '../components/CustomPagination';

const meta: Meta<typeof CustomPagination> = {
	component: CustomPagination,
	title: 'CustomPagination',
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		total: 100,
		rowsPerPage: 10,
		page: 1,
	},
};
