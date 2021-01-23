import React, { useEffect } from 'react';
import { Link, Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { getLogin } from './actions';
import { Redirect, Route } from 'react-router';
import Loading from './Loading';
import './SigninStyle.css';
import { message } from 'antd';
const Signin = (props) => {
	const onFinish = async (values) => {
		console.log('Received values of form: ', values);
		// await props.getLogin(values.username, values.password);
		// // this.setState({ reload: true }, () => this.setState({ reload: false }));
		// console.log('signinnnn');
		// setTimeout(console.log('6556'), 1000);
	};
	useEffect(() => {
		return () => {
			//
		};
	}, []);
	useEffect(() => {
		const { authenticated } = props;
		const { test } = props;
		if (authenticated) {
			props.router.history.push('/');
		}
		if (test == false) {
			message.error('Sai tài khoản hoặc mật khẩu');
		}
		return () => {
			//
		};
	}, [props.authenticated]);
	return (
		<div className="login-main">
			<Card title="Đăng nhập" bordered={false} className="login-card-box">
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
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
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
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item
							name="remember"
							valuePropName="checked"
							noStyle
						>
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
							Log in
						</Button>
						Or <Link to="/register">register now!</Link>
					</Form.Item>
				</Form>
			</Card>
		</div>
	);
};

const mapStateToProps = (state) => ({
	data: state.reducerLogin.data,
	userToken: state.reducerLogin.userToken,
	loading: state.reducerLogin.loading,
	error: state.reducerLogin.error,
	authenticated: state.reducerLogin.authenticated,
	test: state.reducerLogin.test,
});
const mapDispatchToProps = {
	getLogin,
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
// export default Signin;
