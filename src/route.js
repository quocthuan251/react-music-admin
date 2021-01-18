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
const AlbumManagement = lazy(() =>
	import('./pages/albumManagement/AlbumManagement')
);
const AddSong = lazy(() => import('./components/songManagement/AddSong'));
const SongEdit = lazy(() => import('./components/songManagement/SongEdit'));
const AddAlbum = lazy(() => import('./components/albumManagement/AddAlbum'));
const EditAlbum = lazy(() => import('./components/albumManagement/EditAlbum'));
const AddUser = lazy(() => import('./components/userManagement/AddUser'));
const EditUser = lazy(() => import('./components/userManagement/EditUser'));
const LogAction = lazy(() => import('./pages/logAction/LogAction'));
const SingerEdit = lazy(() =>
	import('./components/singerManagement/SingerEdit')
);
const AddSinger = lazy(() => import('./components/singerManagement/AddSinger'));

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
		path: '/admin/song-management/editSong/:songId',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <SongEdit router={props} />,
	},
	{
		path: '/admin/song-management/addSong',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <AddSong router={props} />,
	},
	{
		path: '/admin/user-management',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <UserManagementPage router={props} />,
	},
	{
		path: '/admin/user-management/editUser/:userId',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <EditUser router={props} />,
	},
	{
		path: '/admin/user-management/addUser',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <AddUser router={props} />,
	},
	{
		path: '/admin/singer-management',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <SingerManagementPage router={props} />,
	},
	{
		path: '/admin/singer-management/editSinger/:name',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <SingerEdit router={props} />,
	},
	{
		path: '/admin/singer-management/addSinger',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <AddSinger router={props} />,
	},
	{
		path: '/admin/album-management',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <AlbumManagement router={props} />,
	},
	{
		path: '/admin/album-management/EditAlbum/:albumId',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <EditAlbum router={props} />,
	},
	{
		path: '/admin/album-management/AddAlbum',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <AddAlbum router={props} />,
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
