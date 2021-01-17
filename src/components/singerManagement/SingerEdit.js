import React from 'react';
import axios from 'axios';
import { Form, Input, Switch, Button } from 'antd';
import './style/SingerEditStyle.css';
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

class SingerEdit extends React.Component {
	constructor(props) {
		super(props);
		const idName = props.router.match.params.name;
		if (props.dataSingers.data) {
			const items = props.dataSingers.data.find(
				(item, index) => item.name === idName
			);
			this.state = {
				singerData: items,
			};
		} else {
			this.state = {
				singerData: {},
			};
		}
	}
	onFinish = (values) => {
		console.log(values);
	};
	testhandler = () => {
		console.log(this.state.singerData);
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
					Sửa thông tin nghệ sĩ
				</div>
				<Form
					{...layout}
					name="nest-messages"
					onFinish={this.onFinish}
					validateMessages={validateMessages}
				>
					<Form.Item
						name={['singer', 'name']}
						label="Tên nghệ sĩ"
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input
							defaultValue={this.state.singerData.name}
							onChange={this.state.singerData.name}
						/>
					</Form.Item>
					<Form.Item name={['singer', 'gender']} label="Giới tính">
						<Input defaultValue={this.state.singerData.gender} />
					</Form.Item>
					<Form.Item
						name={['singer', 'nationality']}
						label="Quốc gia"
					>
						<Input
							defaultValue={this.state.singerData.nationality}
						/>
					</Form.Item>
					<Form.Item
						name={['singer', 'thumbnail']}
						label="Ảnh đại diện"
					>
						<div className="singer-edit-image-singer-group">
							<div className="singer-edit-image-singer">
								<img
									src="https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e"
									// src={this.state.singerData.thumbnail}
									alt="avatar"
									style={{ width: '100%' }}
								/>
							</div>
							<UploadImg />
						</div>
						<Input defaultValue={this.state.singerData.thumbnail} />
					</Form.Item>
					<Form.Item name={['singer', 'cover']} label="Ảnh bìa">
						<div className="singer-edit-cover-image-singer-group">
							<div className="singer-edit-cover-image-singer">
								<img
									// src="https://i.scdn.co/image/ab67706f00000003c414e7daf34690c9f983f76e"
									src={this.state.singerData.cover}
									alt="avatar"
									style={{ width: '100%' }}
								/>
							</div>
							<UploadImg />
						</div>
						<Input defaultValue={this.state.singerData.cover} />
					</Form.Item>
					<Form.Item
						name={['singer', 'description']}
						label="Giới thiệu"
					>
						<Input.TextArea
							defaultValue={this.state.singerData.description}
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
	dataSingers: state.reducerSinger.data,
});
export default connect(mapStateToProps, null)(SingerEdit);
