import React from 'react';
import axios from 'axios';
import { Form, Input, Switch, Button } from 'antd';
import './style/SongEditStyle.css';
import UploadImg from '../UploadImg';
import { connect } from 'react-redux';

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
		this.handleSubmit = this.handleSubmit.bind(this);
		const idItem = props.router.match.params.songId;
		if (props.dataSongs.item) {
			const items = props.dataSongs.item.find(
				(item, index) => item.id === idItem
			);
			this.state = {
				songData: items,
			};
		} else {
			this.state = {
				songData: {
					title: '',
					genre: '',
					path: '',
					image: '',
					album_id: '',
					artist_id: '',
				},
			};
		}
	}

	handleSubmit = (event) => {
		event.preventDefault();
	};

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	testhandler = () => {
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
				<Form
					{...layout}
					name="nest-messages"
					// onFinish={this.onFinish}
					onFinish={this.handleSubmit}
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
						<Input
							defaultValue={this.state.songData.title}
							value={this.state.songData.title}
							onChange={this.handleChange}
						/>
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
						<Input defaultValue={this.state.songData.artist_id} />
					</Form.Item>
					<Form.Item name={['song', 'albumid']} label="Thuộc ablum">
						<Input defaultValue={this.state.songData.album_id} />
					</Form.Item>
					<Form.Item name={['song', 'imageid']} label="Ảnh đại diện">
						<div className="song-edit-image-song-group">
							<div className="song-edit-image-song">
								<img
									src="https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e"
									// src={this.state.songData.image}
									alt="avatar"
									style={{ width: '100%' }}
								/>
							</div>
							<UploadImg />
						</div>
						<Input defaultValue={this.state.songData.image} />
					</Form.Item>
					<Form.Item
						name={['song', 'share_links']}
						label="Tải lên bài hát"
					>
						<Input.TextArea
							defaultValue={this.state.songData.path}
						/>
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol }}>
						<Button type="primary" htmlType="submit">
							Hoàn thành
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	dataSongs: state.reducerSong.data,
});
export default connect(mapStateToProps, null)(SongEdit);
