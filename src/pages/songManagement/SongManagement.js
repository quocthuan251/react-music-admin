import React from 'react';
import { Table } from 'antd';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		width: 150,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		width: 150,
	},
	{
		title: 'Address',
		dataIndex: 'address',
	},
];
const data = [];
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		name: `Edward King ${i}`,
		age: 32,
		address: `London, Park Lane no. ${i}`,
	});
}
class SongManagement extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {
			x: 'This is x from state',
			y: 'This is y from state',
		};
	}
	render() {
		return (
			<Table
				columns={columns}
				dataSource={data}
				pagination={{ pageSize: 50 }}
				scroll={{ y: 340 }}
			/>
		);
	}
}
export default SongManagement;
