import React from 'react';
import axios from 'axios';
import { Form, Input, Switch, Button } from 'antd';
import '../songManagement/style/SongEditStyle.css';
// import '../songManagement/style/UploadImg.css';
import { connect } from 'react-redux';
import UploadImg from '../UploadImg';

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

class EditAlbum extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		const idItem = props.router.match.params.albumId;
		if (props.dataAlbums.item) {
			const items = props.dataAlbums.item.find(
				(item, index) => item.id === idItem
			);
			this.state = {
				albumData: items,
			};
		} else {
			this.state = {
				albumData: {
					name: '',
					image: '',
					releasedDate: '',
					totalTracks: '',
					genreDTO: '',
				},
			};
		}
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
		alert('A name was submitted: ' + this.state.albumData);
		console.log(this.state.albumData);
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
					Sửa thông tin Album
				</div>
				<Form
					{...layout}
					name="nest-messages"
					onFinish={this.handleSubmit}
					validateMessages={validateMessages}
				>
					<Form.Item
						name={['album', 'name']}
						label="Tên Album"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input
							defaultValue={this.state.albumData.name}
							value={this.state.albumData.name}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item
						name={['album', 'releasedDate']}
						label="Ngày tạo"
					>
						<Input
							defaultValue={this.state.albumData.releasedDate}
							value={this.state.albumData.releasedDate}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item
						name={['album', 'totalTracks']}
						label="Số bài hát"
					>
						<Input
							defaultValue={this.state.albumData.totalTracks}
							value={this.state.albumData.totalTracks}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['album', 'genreDTO']} label="Thể loại">
						<Input
							defaultValue={this.state.albumData.genreDTO}
							value={this.state.albumData.genreDTO}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['album', 'image']} label="Ảnh đại diện">
						<div className="song-edit-image-song-group">
							<div className="song-edit-image-song">
								<img
									src="https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e"
									// src={this.state.albumData.image}
									alt="avatar"
									style={{ width: '100%' }}
								/>
							</div>
							<UploadImg />
						</div>
						<Input defaultValue={this.state.albumData.image} />
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol }}>
						{/* <input type="submit" value="Submit" /> */}
						<Button type="submit" htmlType="submit">
							Hoàn thành
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	dataAlbums: state.reducerAlbum.data,
});
export default connect(mapStateToProps, null)(EditAlbum);
