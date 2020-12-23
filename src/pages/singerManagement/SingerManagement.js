import React from 'react';
import { Table, Tag, Avatar, Image } from 'antd';

const columns = [
	{
		title: 'Avatar',
		dataIndex: 'avatar',
		width: 100,
		render: (avatar) => <Avatar src={<Image src={avatar} />} />,
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
		avatar:
			'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/86707646_1602040093295615_472465412085252096_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=XNf8CvhtjogAX9SDUcW&_nc_ht=scontent.fvca1-2.fna&oh=3abaebc0a4d3021e80affa3ae411cc61&oe=60086BFD',
		sdt: '01663300199',
		email: 'quocthuan25@gmail.com',
		role: 'admin',
		tags: true,
		name: `Thuận ${i}`,
	});
}
class SingerManagement extends React.Component {
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
export default SingerManagement;
