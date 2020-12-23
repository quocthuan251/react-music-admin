import React, { lazy } from 'react';
import { MainLayout, LoginLayout } from './common/layout/Layout';
const DashBoard = lazy(() => import('./pages/dashBoard/DashBoard'));
const SigninPage = lazy(() => import('./pages/signin/Signin'));
const SongManagementPage = lazy(() =>
	import('./pages/songManagement/SongManagement')
);
const UserManagementPage = lazy(() =>
	import('./pages/userManagement/UserManagement')
);
const SingerManagementPage = lazy(() =>
	import('./pages/singerManagement/SingerManagement')
);
const SongEdit = lazy(() => import('./components/songManagement/SongEdit'));
const LogAction = lazy(() => import('./pages/logAction/LogAction'));

const Error404 = lazy(() => import('./common/errorPage/Error404'));
const route = [
	{
		path: '/',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <DashBoard router={props} />,
	},
	{
		path: '/admin/signin',
		exact: true,
		auth: false,
		layout: LoginLayout,
		main: (props) => <SigninPage router={props} />,
	},
	{
		path: '/admin/song-management',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <SongManagementPage router={props} />,
	},
	{
		path: '/admin/song-management/editSong/:id',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <SongEdit router={props} />,
	},
	{
		path: '/admin/user-management',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <UserManagementPage router={props} />,
	},
	{
		path: '/admin/singer-management',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <SingerManagementPage router={props} />,
	},
	{
		path: '/admin/log-action',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <LogAction router={props} />,
	},
	{
		layout: LoginLayout,
		main: (props) => <Error404 router={props} />,
	},
];

export default route;
