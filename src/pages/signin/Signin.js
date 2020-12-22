import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './SigninStyle.css';
const NormalLoginForm = () => {
	const onFinish = (values) => {
		console.log('Received values of form: ', values);
	};

	return (
		<Form
			name="normal_login"
			className="login-form"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
		>
			<Form.Item
				name="username"
				rules={[
					{
						required: true,
						message: 'Please input your Username!',
					},
				]}
			>
				<Input
					prefix={<UserOutlined className="site-form-item-icon" />}
					placeholder="Username"
				/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your Password!',
					},
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon" />}
					type="password"
					placeholder="Password"
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<a className="login-form-forgot" href="">
					Forgot password
				</a>
			</Form.Item>

			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					className="login-form-button"
				>
					<Link to="\">Log in</Link>
				</Button>
			</Form.Item>
		</Form>
	);
};
export class Signin extends Component {
	render() {
		return (
			<div className="login-main">
				<Card
					title="Đăng nhập"
					bordered={false}
					className="login-card-box"
				>
					<NormalLoginForm />
				</Card>
			</div>
		);
	}
}

export default Signin;
