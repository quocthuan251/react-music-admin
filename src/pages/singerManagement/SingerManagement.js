import React from 'react';
import { Table, Tag, Avatar, Image, Button, Tooltip } from 'antd';
import { Popconfirm, message } from 'antd';
import { connect } from 'react-redux';
import { FileSearchOutlined } from '@ant-design/icons';
import { getListSinger } from './action';
import { Link } from 'react-router-dom';

class SingerManagement extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dataSingers: {},
		};
	}
	columns = [
		{
			title: 'Stt',
			dataIndex: 'id',
			width: 70,
			render: (text, row, index) => {
				if (index >= 0) {
					return <p>{index + 1}</p>;
				}
			},
		},
		{
			title: 'Avatar',
			dataIndex: 'thumbnail',
			width: 150,
			render: (thumbnail) => <Avatar src={<Image src={thumbnail} />} />,
		},
		{
			title: 'Tên',
			dataIndex: 'name',
			width: 150,
		},
		{
			title: 'Giới tính',
			dataIndex: 'gender',
			width: 150,
		},
		{
			title: 'Quốc Gia',
			dataIndex: 'nationality',
			width: 150,
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
			dataIndex: 'name',
			width: 200,
			render: (name) => (
				<div>
					<Button
						type="primary"
						size="small"
						// onClick={() => {
						// 	this.redirectEditPage(id);
						// }}
					>
						<Link
							to={`/admin/singer-management/editSinger/${name}`}
						>
							Sửa
						</Link>
					</Button>
					<Popconfirm
						title="Xác nhận xóa?"
						onConfirm={() => this.confirm(name)}
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
	componentDidMount() {
		this.props.getListSinger();
	}

	confirm = (name) => {
		console.log(name + ' id xoa');
		message.success('Xóa thành công');
	};

	cancel = (e) => {
		console.log(e);
		message.error('Hủy xóa');
	};
	render() {
		const listSinger = this.props.dataSingers.data ?? [];
		return (
			<>
				<div
					style={{
						fontWeight: 700,
						fontSize: 25,
						marginBottom: 25,
					}}
				>
					Quản lý danh sách nghệ sĩ
				</div>
				<Table
					columns={this.columns}
					dataSource={listSinger}
					pagination={{ pageSize: 50 }}
					scroll={{ y: 340 }}
				/>
			</>
		);
	}
}
const mapStateToProps = (state) => ({
	dataSingers: state.reducerSinger.data,
	loading: state.reducerSinger.loading,
	error: state.reducerSinger.error,
});
const mapDispatchToProps = {
	getListSinger,
};
export default connect(mapStateToProps, mapDispatchToProps)(SingerManagement);
