import React from 'react';
import { Table, Tag, Image } from 'antd';
import { Button, Tooltip } from 'antd';
import { FileSearchOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { deleteUser } from './service';
import { getListUser } from './action';
import { Link } from 'react-router-dom';
import { Popconfirm, message } from 'antd';

class UserManagement extends React.Component {
	constructor(props) {
		super(props);
		this.state = { reload: null };
		this.refreshPage = this.refreshPage.bind(this);
	}
	componentDidMount() {
		this.props.getListUser();
	}
	confirm = (id) => {
		deleteUser(id);
		message.success('Xóa thành công');
		this.refreshPage();
	};
	refreshPage = () => {
		this.setState({ reload: true }, () => this.setState({ reload: false }));
	};
	cancel = (e) => {
		console.log(e);
		message.error('Hủy xóa');
	};

	columns = [
		{
			title: 'Stt',
			dataIndex: 'id',
			width: 50,
			render: (text, row, index) => {
				if (index >= 0) return <p>{index + 1}</p>;
			},
		},
		{
			title: 'UserName',
			dataIndex: 'userName',
			width: 100,
		},
		{
			title: 'Tên',
			dataIndex: 'firstName',
			width: 80,
		},
		{
			title: 'Họ',
			dataIndex: 'lastName',
			width: 80,
		},
		{
			title: 'Email',
			dataIndex: 'email',
			width: 170,
		},
		{
			title: 'Giới tính',
			dataIndex: 'gender',
			width: 100,
		},
		{
			title: 'Ngày sinh',
			dataIndex: 'birthDay',
		},
		{
			title: 'Role',
			dataIndex: 'userType',
			width: 60,
		},
		{
			title: 'Tình trạng',
			dataIndex: 'activityStatus',
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
			dataIndex: 'id',
			render: (id) => (
				<div>
					<Button
						type="primary"
						size="small"
						// onClick={() => {
						// 	this.redirectEditPage(id);
						// }}
					>
						<Link to={`/admin/user-management/editUser/${id}`}>
							Sửa
						</Link>
					</Button>
					<Popconfirm
						title="Xác nhận xóa?"
						onConfirm={() => this.confirm(id)}
						onCancel={this.cancel}
						okText="Yes"
						cancelText="No"
					>
						<Button type="primary" danger size="small">
							Xóa
						</Button>
					</Popconfirm>
					<Tooltip title="xem thêm">
						<Button
							sharp="cicrle"
							icon={<FileSearchOutlined />}
							size="small"
						/>
					</Tooltip>
				</div>
			),
		},
	];
	render() {
		const listUsers = this.props.dataUsers ?? [];
		return (
			<div>
				<div
					style={{
						fontWeight: 700,
						fontSize: 25,
						marginBottom: 25,
					}}
				>
					Quản lý danh sách Users
				</div>
				<div>
					<Button
						type="primary"
						style={{ float: 'right', margin: '0rem 5rem 1rem' }}
					>
						<Link to={`/admin/user-management/addUser`}>
							<PlusOutlined />
							Thêm User
						</Link>
					</Button>
				</div>
				<Table
					columns={this.columns}
					dataSource={listUsers}
					pagination={{ pageSize: 50 }}
					scroll={{ y: 340 }}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	dataUsers: state.reducerUser.data,
	loading: state.reducerUser.loading,
	error: state.reducerUser.error,
});
const mapDispatchToProps = {
	getListUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
