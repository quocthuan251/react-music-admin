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

class AddSong extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			songData: {
				title: '',
				genre: '',
				path: '',
				image: '',
				album: '',
				artist: '',
			},
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
		console.log(
			event.target.value + ' a bc ' + { value: event.target.value }
		);
	}

	handleSubmit = (event) => {
		alert('A name was submitted: ' + this.state.songData);
		console.log(this.state.songData);
		event.preventDefault();
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
					Thêm thông tin bài hát
				</div>
				<Form
					{...layout}
					name="nest-messages"
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
							value={this.state.title}
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
						<Input
							value={this.state.artist}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['song', 'albumid']} label="Thuộc ablum">
						<Input
							value={this.state.album}
							onChange={this.handleChange}
						/>
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
						<Input
							value={this.state.image}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item
						name={['song', 'share_links']}
						label="Tải lên bài hát"
					>
						<Input.TextArea
							value={this.state.path}
							onChange={this.handleChange}
						/>
					</Form.Item>
					{/* <Form.Item wrapperCol={{ ...layout.wrapperCol }}> */}
					<input type="submit" value="Submit" />
					{/* <Button type="submit" htmlType="submit">
							Hoàn thành
						</Button> */}
					{/* </Form.Item> */}
				</Form>
			</div>
		);
	}
}

export default AddSong;
