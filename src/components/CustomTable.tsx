import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { TagType } from '../types/tagType';
import { usePaginationTags } from '../context/state';

type CustomTableProps = {
	items: TagType[];
};

const CustomTable = ({ items }: CustomTableProps) => {
	const { rowsPerPage } = usePaginationTags();
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 500 }} aria-label='custom pagination table'>
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
					{items.length === 0
						? Array.from({ length: rowsPerPage }).map(
								(_, index) => (
									<TableRow key={index}>
										<TableCell component='th' scope='row'>
											loading...
											
										</TableCell>
										<TableCell
											style={{
												width: 160,
											}}
											align='right'
											colSpan={3}
										>
											loading...
										</TableCell>
									</TableRow>
								)
							)
						: items.map((item) => (
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
	);
};
export default CustomTable;
