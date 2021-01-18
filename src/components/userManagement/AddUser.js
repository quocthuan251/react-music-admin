import React from 'react';
import axios from 'axios';
import { Form, Input, Switch, Button } from 'antd';
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
		alert('A name was submitted: ' + this.state.userData);
		console.log(this.state.userData);
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
					<Form.Item name={['user', 'email']} label="Email">
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
					<Form.Item name={['user', 'password']} label="Mật Khẩu">
						<Input
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
