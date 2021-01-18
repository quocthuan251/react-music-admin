import React from 'react';
import { Table, Tag, Image } from 'antd';
import { Button, Tooltip } from 'antd';
import { FileSearchOutlined, PlusOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getListSong } from './actions';
import { Link } from 'react-router-dom';
import { Popconfirm, message } from 'antd';

class SongManagement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getListSong();
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
			title: 'Tên bài hát',
			dataIndex: 'title',
			width: 180,
		},
		{
			title: 'Thể loại',
			dataIndex: 'albums.genreDTO.name',
			width: 120,
		},
		{
			title: 'album',
			dataIndex: 'albums.name',
			width: 130,
		},
		{
			title: 'Ca sỹ',
			dataIndex: 'albums.name',
			width: 130,
		},
		{
			title: 'Download',
			dataIndex: 'downloadPremit',
			width: 100,
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
						<Link to={`/admin/song-management/editSong/${id}`}>
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
		const listSong = this.props.dataSongs ?? [];
		return (
			<div>
				<div
					style={{
						fontWeight: 700,
						fontSize: 25,
						marginBottom: 25,
					}}
				>
					Quản lý danh sách bài hát
				</div>
				<div>
					<Button
						type="primary"
						style={{ float: 'right', margin: '0rem 5rem 1rem' }}
					>
						<Link to={`/admin/song-management/addSong`}>
							<PlusOutlined />
							Thêm bài hát
						</Link>
					</Button>
				</div>
				<Table
					columns={this.columns}
					dataSource={listSong}
					pagination={{ pageSize: 50 }}
					scroll={{ y: 340 }}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	dataSongs: state.reducerSong.data.listResult,
	loading: state.reducerSong.loading,
	error: state.reducerSong.error,
});
const mapDispatchToProps = {
	getListSong,
};
export default connect(mapStateToProps, mapDispatchToProps)(SongManagement);
