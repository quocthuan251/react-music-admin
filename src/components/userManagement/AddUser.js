import React from 'react';
import axios from 'axios';
import { Form, Input, Switch, Button, message } from 'antd';
import '../songManagement/style/SongEditStyle.css';
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

class AddUser extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userData: {
				userName: '',
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				gender: '',
				birthDay: '',
				activityStatus: 1,
				userType: {
					id: 1,
				},
				resetPasswordToken: null,
			},
			userName: '',
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			gender: '',
			birthDay: '',
			activityStatus: 1,
			userType: {
				id: 1,
			},
			resetPasswordToken: null,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	handleSubmit = (event) => {
		console.log('Received values of form: ', event.user);

		const body = {
			userName: event.user.userName,
			password: event.user.password,

			firstName: event.user.firstName,
			lastName: event.user.lastName,
			email: event.user.email,

			gender: event.user.gender,
			birthDay: '1920-03-27',
			activityStatus: 1,
			userType: {
				id: 1,
			},
		};
		console.log('body');
		console.log(body);
		return axios({
			url: `http://localhost:8081/signup`,
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				accept: 'application/json',
			},
			data: body,
		})
			.then((response) =>
				message.success({
					content: 'Tạo tài khoản thành công',
					className: 'custom-class',
					style: {
						marginTop: '20vh',
					},
				})
			)
			.catch((error) => message.error('Tài khoản đã tồn tại'));
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
					Thêm thông tin User
				</div>
				<Form
					{...layout}
					name="nest-messages"
					onFinish={this.handleSubmit}
					validateMessages={validateMessages}
				>
					<Form.Item
						name={['user', 'userName']}
						label="Tên tài khoản"
						rules={[
							{
								required: true,
								message: 'Hãy nhập tên tài khoản!',
							},
						]}
					>
						<Input
							value={this.state.userName}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item
						name={['user', 'activityStatus']}
						label="Kích hoạt hoạt động"
						valuePropName="checked"
						style={{ textAlign: 'left' }}
					>
						<Switch defaultChecked />
					</Form.Item>
					<Form.Item name={['user', 'firstName']} label="Tên">
						<Input
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'lastName']} label="Họ">
						<Input
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item
						name={['user', 'email']}
						label="Email"
						rules={[
							{
								required: true,
								message: 'Hãy nhập email!',
							},
						]}
					>
						<Input
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'gender']} label="Giới tính">
						<Input
							value={this.state.gender}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'birthDay']} label="Ngày sinh">
						<Input
							value={this.state.birthDay}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item
						name={['user', 'password']}
						label="Mật Khẩu"
						rules={[
							{
								required: true,
								message: 'Nhập mật khẩu!',
							},
						]}
					>
						<Input.Password
							value={this.state.password}
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

export default AddUser;
