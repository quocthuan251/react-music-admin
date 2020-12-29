import React from 'react';
import axios from 'axios';
import { Form, Input, Switch, Button } from 'antd';
import './style/SongEditStyle.css';
import UploadImg from './UploadImg';
const layout = {
	labelCol: {
		span: 4,
	},
	// wrapperCol: {
	// 	span: 16,
	// },
};
const validateMessages = {
	required: '${label} is required!',
	types: {
		email: '${label} is not a valid email!',
		number: '${label} is not a valid number!',
	},
	number: {
		range: '${label} must be between ${min} and ${max}',
	},
};

class SongEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			songData: {},
		};
	}
	onFinish = (values) => {
		console.log(values);
	};
	componentDidMount() {
		console.log(this.props.router.match.params.songId);
		// const songId = this.props.router.match.params.songId;
		const songId = 'IWZA08C9';
		this.getDataSong(songId);
	}
	getDataSong = async (songId) => {
		await axios
			.get(`https://demo7080721.mockable.io/get-song-detail/${songId}`)
			.then(({ data: songData }) => {
				console.log('song', songData);

				this.setState({ songData });
			});
	};
	test = () => {
		console.log(this.state.songData);
	};
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
					Sửa thông tin bài hát
				</div>
				<button
					onClick={() => console.log(this.state.songData)}
				></button>
				<Form
					{...layout}
					name="nest-messages"
					onFinish={this.onFinish}
					validateMessages={validateMessages}
				>
					<Form.Item
						name={['song', 'title']}
						label="Tên bài hát"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={['song', 'download_premit']}
						label="Cho phép download"
						valuePropName="checked"
						style={{ textAlign: 'left' }}
					>
						<Switch defaultChecked />
					</Form.Item>
					<Form.Item name={['song', 'singer']} label="Ca sỹ">
						<Input />
					</Form.Item>
					<Form.Item name={['song', 'albumid']} label="Thuộc ablum">
						<Input />
					</Form.Item>

					<Form.Item name={['song', 'imageid']} label="Ảnh đại diện">
						<div className="song-edit-image-song-group">
							<div className="song-edit-image-song">
								<img
									src="https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e"
									alt="avatar"
									style={{ width: '100%' }}
								/>
							</div>
							<UploadImg></UploadImg>
						</div>
						<Input />
					</Form.Item>
					<Form.Item
						name={['song', 'share_links']}
						label="Tải lên bài hát"
					>
						<Input.TextArea />
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button type="primary" htmlType="submit">
							Hoàn thành
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
export default SongEdit;
