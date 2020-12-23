import React from 'react';

import { Form, Input, InputNumber, Button } from 'antd';
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
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

		// We declare the state as shown below

		this.state = {
			x: 'This is x from state',
			y: 'This is y from state',
		};
	}
	onFinish = (values) => {
		console.log(values);
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
					onFinish={this.onFinish}
					validateMessages={validateMessages}
				>
					<Form.Item
						name={['user', 'name']}
						label="Name"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={['user', 'email']}
						label="Email"
						rules={[
							{
								type: 'email',
							},
						]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name={['user', 'age']}
						label="Age"
						rules={[
							{
								type: 'number',
								min: 0,
								max: 99,
							},
						]}
					>
						<InputNumber />
					</Form.Item>
					<Form.Item name={['user', 'website']} label="Website">
						<Input />
					</Form.Item>
					<Form.Item
						name={['user', 'introduction']}
						label="Introduction"
					>
						<Input.TextArea />
					</Form.Item>
					<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}
export default SongEdit;
