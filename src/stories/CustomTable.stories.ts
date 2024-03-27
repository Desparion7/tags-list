import '../index.css';
import type { Meta, StoryObj } from '@storybook/react';
import CustomTable from '../components/CustomTable';
import { TagType } from '../types/tagType';

const meta: Meta<typeof CustomTable> = {
	component: CustomTable,
	title: 'CustomTable',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
	args: {
		items: [
			{
				name: 'Tag1',
				count: 10,
				has_synonyms: true,
				is_moderator_only: false,
				is_required: false,
			},
			{
				name: 'Tag2',
				count: 20,
				has_synonyms: false,
				is_moderator_only: true,
				is_required: true,
			},
			{
				name: 'Tag3',
				count: 15,
				has_synonyms: true,
				is_moderator_only: true,
				is_required: false,
			},
			// Add more sample items here if needed
		] as TagType[], 
	},
};
