import React from 'react';
import axios from 'axios';
import { Form, Input, Switch, Button } from 'antd';
import './style/SingerEditStyle.css';
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

class AddSinger extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			singerData: {
				name: '',
				birthDay: '',
				gender: '',
				description: '',
				image: '',
				nationality: '',
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
		alert('A name was submitted: ' + this.state.singerData);
		console.log(this.state.singerData);
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
					Thêm thông tin nghệ sĩ
				</div>
				<Form
					{...layout}
					name="nest-messages"
					onFinish={this.handleSubmit}
					validateMessages={validateMessages}
				>
					<Form.Item
						name={['singer', 'title']}
						label="Tên nghệ sĩ"
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
					<Form.Item name={['singer', 'gender']} label="Giới tính">
						<Input
							value={this.state.singerData.gender}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['singer', 'birthDay']} label="Ngày sinh">
						<Input
							value={this.state.singerData.birthDay}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['singer', 'image']} label="Ảnh đại diện">
						<div className="singer-edit-image-singer-group">
							<div className="singer-edit-image-singer">
								<img
									src="https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e"
									// src={this.state.singerData.image}
									alt="avatar"
									style={{ width: '100%' }}
								/>
							</div>
							<UploadImg />
						</div>
						<Input
							value={this.state.singerData.image}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['singer', 'description']} label="Mô tả">
						<Input.TextArea
							value={this.state.singerData.description}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item
						name={['singer', 'nationality']}
						label="Quốc tịch"
					>
						<Input.TextArea
							value={this.state.singerData.nationality}
							onChange={this.handleChange}
						/>
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

export default AddSinger;
