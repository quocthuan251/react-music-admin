import React from 'react';
import { Table, Tag, Image } from 'antd';
import { Button, Tooltip } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getListSong } from './actions';
import { Link } from 'react-router-dom';
const columns = [
	{
		title: 'Stt',
		dataIndex: 'id',
		width: 50,
		render: (row) => <div>{row.index}</div>,
	},
	{
		title: 'Image',
		dataIndex: 'image',
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
		dataIndex: 'genre',
		width: 120,
	},
	{
		title: 'album',
		dataIndex: 'album_id',
		width: 130,
	},
	{
		title: 'Ca sỹ',
		dataIndex: 'artist_id',
		width: 130,
	},
	{
		title: 'Download',
		dataIndex: 'download_permit',
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
					onClick={() => {
						redirectEditPage();
					}}
				>
					<Link to={`/admin/song-management/editSong/${id}`}>
						sửa
					</Link>
				</Button>
				<Button type="primary" danger size="small">
					xóa
				</Button>
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
const redirectEditPage = () => {
	console.log('hello');
};
// const data = [];
// for (let i = 0; i < 100; i++) {
// 	data.push({
// 		key: i,
// 		avatar:
// 			'https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/86707646_1602040093295615_472465412085252096_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=XNf8CvhtjogAX9SDUcW&_nc_ht=scontent.fvca1-2.fna&oh=3abaebc0a4d3021e80affa3ae411cc61&oe=60086BFD',
// 		sdt: 'Nhạc trẻ',
// 		email: 'Đi để trở về',
// 		singer: 'Táo, JustaTee, Đen',
// 		tags: true,
// 		name: `Đi về nhà ${i}`,
// 	});
// }
class SongManagement extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.getListSong();
	}
	render() {
		const listSong = this.props.dataSongs.item ?? [];
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
				<Table
					columns={columns}
					dataSource={listSong}
					pagination={{ pageSize: 50 }}
					scroll={{ y: 340 }}
				/>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	dataSongs: state.reducerSong.data,
	loading: state.reducerSong.loading,
	error: state.reducerSong.error,
});
const mapDispatchToProps = {
	getListSong,
};
export default connect(mapStateToProps, mapDispatchToProps)(SongManagement);
