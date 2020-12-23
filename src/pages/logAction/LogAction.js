import React from 'react';
import { Table, Tag, Space } from 'antd';

const columns = [
	{
		title: 'Tài khoản',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
	},
	{
		title: 'Thời gian',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Chi tiết hành động',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: (tags) => (
			<span>
				{tags.map((tag) => {
					let color = tag.length > 5 ? 'green' : 'geekblue';
					if (tag === 'Create') {
						color = 'geekblue';
					}
					if (tag === 'Delete' || tag === 'Update') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (text, record) => (
			<Space size="middle">
				{/* <a>Invite {record.name}</a> */}
				<a>Delete</a>
			</Space>
		),
	},
];

const data = [
	{
		key: '1',
		name: 'Thuận',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Select', 'Create'],
	},
	{
		key: '2',
		name: 'Vỹ',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Delete'],
	},
	{
		key: '3',
		name: 'Thuận',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Select', 'Update'],
	},
	{
		key: '4',
		name: 'Thuận',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Select', 'Update'],
	},
	{
		key: '5',
		name: 'Thuận',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Select', 'Update'],
	},
	{
		key: '6',
		name: 'Thuận',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Select', 'Update'],
	},
	{
		key: '7',
		name: 'Thuận',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Select', 'Update'],
	},
	{
		key: '8',
		name: 'Thuận',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Select', 'Update'],
	},
	{
		key: '9',
		name: 'Thuận',
		age: '2020/12/12 10:15:35',
		address: 'Select * from "songs"',
		tags: ['Select', 'Update'],
	},
];

class LogAction extends React.Component {
	constructor(props) {
		super(props);

		// We declare the state as shown below

		this.state = {
			// bottom: 'bottomCenter',
		};
	}
	render() {
		return (
			<div>
				<div
					style={{
						fontWeight: 700,
						fontSize: 25,
						marginBottom: 25,
					}}
				>
					Quản lý các thao tác của các tài khoản quản trị
				</div>
				<div>
					<Table
						columns={columns}
						pagination={{
							position: ['bottomCenter'],
						}}
						dataSource={data}
						scroll={{ y: 340 }}
					/>
				</div>
			</div>
		);
	}
}
export default LogAction;
