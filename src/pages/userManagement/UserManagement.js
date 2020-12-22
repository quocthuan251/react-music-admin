import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
	{
		title: 'Avatar',
		dataIndex: 'avatar',
		width: 100,
	},
	{
		title: 'Tên',
		dataIndex: 'name',
		width: 150,
	},
	{
		title: 'SĐT',
		dataIndex: 'sdt',
		width: 130,
	},
	{
		title: 'Email',
		dataIndex: 'email',
		width: 200,
	},
	{
		title: 'Role',
		dataIndex: 'role',
		width: 100,
	},
	{
		title: 'Trạng thái',
		dataIndex: 'tags',
		render: (tags) => (
			<span>
				{tags ? (
					<Tag color={'green'}>{'true'}</Tag>
				) : (
					<Tag color={'volcano'}>{'false'}</Tag>
				)}
			</span>
		),
	},
	{
		title: 'Actions',
		dataIndex: '',
		render: () => <a>Delete</a>,
	},
];
const data = [];
for (let i = 0; i < 100; i++) {
	data.push({
		key: i,
		avatar: '',
		sdt: '01663300199',
		email: 'quocthuan25@gmail.com',
		role: 'admin',
		tags: false,
		name: `Thuận ${i}`,
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
