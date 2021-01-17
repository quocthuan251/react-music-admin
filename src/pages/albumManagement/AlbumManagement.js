import React from 'react';
import { Table, Tag, Image } from 'antd';
import { Button, Tooltip } from 'antd';
import { FileSearchOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getListAlbum } from './action';
import { Link } from 'react-router-dom';
import { Popconfirm, message } from 'antd';

class AlbumManagement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getListAlbum();
	}
	confirm = (id) => {
		console.log(id + ' id xoa');
		message.success('Xóa thành công');
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
			title: 'Image',
			dataIndex: 'image.imgLocation',
			width: 100,
			render: (avatar) => <Image src={avatar} />,
		},
		{
			title: 'Tên Album',
			dataIndex: 'name',
			width: 180,
		},
		{
			title: 'Ngày tạo',
			dataIndex: 'releasedDate',
			width: 120,
		},
		{
			title: 'Số bài hát',
			dataIndex: 'totalTracks',
			width: 130,
		},
		{
			title: 'Thể loại',
			dataIndex: 'genreDTO.name',
			width: 130,
		},
		{
			title: 'Download',
			dataIndex: 'downloadPermit',
			width: 100,
			render: (downloadPermit) => (
				<span>
					{downloadPermit ? (
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
			width: 130,
			render: (id) => (
				<div>
					<Button
						type="primary"
						size="small"
						// onClick={() => {
						// 	this.redirectEditPage(id);
						// }}
					>
						<Link to={`/admin/album-management/editAlbum/${id}`}>
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
		const listAlbums = this.props.dataAlbums ?? [];
		return (
			<div>
				<div
					style={{
						fontWeight: 700,
						fontSize: 25,
						marginBottom: 25,
					}}
				>
					Quản lý danh sách Album
				</div>
				<div>
					<Button
						type="primary"
						style={{ float: 'right', margin: '0rem 5rem 1rem' }}
					>
						<Link to={`/admin/album-management/addAlbum`}>
							<PlusOutlined />
							Thêm Album
						</Link>
					</Button>
				</div>
				<Table
					columns={this.columns}
					dataSource={listAlbums}
					pagination={{ pageSize: 50 }}
					scroll={{ y: 340 }}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	dataAlbums: state.reducerAlbum.data.listResult,
	loading: state.reducerAlbum.loading,
	error: state.reducerAlbum.error,
});
const mapDispatchToProps = {
	getListAlbum,
};
export default connect(mapStateToProps, mapDispatchToProps)(AlbumManagement);
