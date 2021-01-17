import React from 'react';
import axios from 'axios';
import { Form, Input, Switch, Button } from 'antd';
import '../songManagement/style/SongEditStyle.css';
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

class EditUser extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		const idItem = props.router.match.params.userId;
		if (props.dataUsers.item) {
			const items = props.dataUsers.item.find(
				(item, index) => item.id === idItem
			);
			this.state = {
				userData: items,
			};
		} else {
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
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });
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
					Sửa thông tin User
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
							defaultValue={this.state.userName}
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
							defaultValue={this.state.firstName}
							value={this.state.firstName}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'lastName']} label="Họ">
						<Input
							defaultValue={this.state.lastName}
							value={this.state.lastName}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'email']} label="Email">
						<Input
							defaultValue={this.state.email}
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'gender']} label="Giới tính">
						<Input
							defaultValue={this.state.gender}
							value={this.state.gender}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'birthDay']} label="Ngày sinh">
						<Input
							defaultValue={this.state.birthDay}
							value={this.state.birthDay}
							onChange={this.handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'password']} label="Mật Khẩu">
						<Input
							defaultValue={this.state.password}
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
const mapStateToProps = (state) => ({
	dataUsers: state.reducerUser.data,
});
export default connect(mapStateToProps, null)(EditUser);
