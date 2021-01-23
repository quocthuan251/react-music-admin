import React from 'react';
import { Layout, Menu } from 'antd';
import './LayoutStyle.css';
import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UserOutlined,
	UploadOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

class MainLayout extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			// collapsed: false,
		};
	}

	render() {
		const children = this.props.children;

		return (
			<Layout>
				<Sider
					style={{
						overflow: 'auto',
						height: '100vh',
						position: 'fixed',
						left: 0,
					}}
				>
					<div className="logo" />
					<Menu
						theme="dark"
						mode="inline"
						defaultSelectedKeys={['5']}
					>
						<div className="layout-logo-admin"></div>
						<Menu.Item key="1" icon={<BarChartOutlined />}>
							<Link to="/">Dash board</Link>
						</Menu.Item>
						<Menu.Item key="2" icon={<VideoCameraOutlined />}>
							<Link to="/admin/song-management">
								Quản lý bài hát
							</Link>
						</Menu.Item>
						<Menu.Item key="3" icon={<TeamOutlined />}>
							<Link to="/admin/singer-management">
								Quản lý ca sỹ
							</Link>
						</Menu.Item>
						<Menu.Item key="4" icon={<CloudOutlined />}>
							<Link to="/admin/album-management">
								Quản lý album
							</Link>
						</Menu.Item>
						<Menu.Item key="5" icon={<UserOutlined />}>
							<Link to="/admin/user-management">
								Quản lý user
							</Link>
						</Menu.Item>
						<Menu.Item key="6" icon={<AppstoreOutlined />}>
							<Link to="/admin/">Quản lý bài viết</Link>
						</Menu.Item>
						<Menu.Item key="7" icon={<UploadOutlined />}>
							<Link to="/admin/">Quản lý tài nguyên</Link>
						</Menu.Item>
						<Menu.Item key="8" icon={<ShopOutlined />}>
							<Link to="/admin/log-action">Log action</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className="site-layout" style={{ marginLeft: 200 }}>
					<Header
						className="site-layout-background"
						style={{ padding: 0 }}
					/>
					<Content
						style={{ margin: '24px 16px 0', overflow: 'initial' }}
					>
						<div
							className="site-layout-background"
							style={{ padding: 24, textAlign: 'center' }}
						>
							<div>{children}</div>
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
						Trang quản trị web MusicCloud - Design by SharkDev
					</Footer>
				</Layout>
			</Layout>
		);
	}
}
const LoginLayout = ({ children }) => <div>{children}</div>;

export { MainLayout, LoginLayout };
