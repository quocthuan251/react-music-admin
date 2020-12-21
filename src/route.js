import React, { lazy } from 'react';
import { MainLayout, LoginLayout } from './common/layout/Layout';
const DashBoard = lazy(() => import('./pages/dashBoard/DashBoard'));
// const LoginPage = lazy(() => import('./pages/signin/Signin'));
// const SignupPage = lazy(() => import('./pages/signup/signup'));
const Error404 = lazy(() => import('./common/errorPage/Error404'));
const route = [
	{
		path: '/',
		exact: true,
		auth: false,
		layout: MainLayout,
		main: (props) => <DashBoard router={props} />,
	},
	// {
	// 	path: '/singer',
	// 	exact: true,
	// 	auth: false,
	// 	layout: MainLayout,
	// 	main: (props) => <SingerDeatil router={props} />,
	// },
	// {
	// 	path: '/signin',
	// 	exact: true,
	// 	auth: false,
	// 	layout: LoginLayout,
	// 	main: (props) => <LoginPage router={props} />,
	// },
	// {
	// 	path: '/register',
	// 	exact: true,
	// 	auth: false,
	// 	layout: LoginLayout,
	// 	main: (props) => <SignupPage router={props} />,
	// },
	// {
	// 	path: '/profile',
	// 	exact: true,
	// 	auth: false,
	// 	layout: MainLayout,
	// 	main: (props) => <UserProfile router={props} />,
	// },
	{
		layout: LoginLayout,
		main: (props) => <Error404 router={props} />,
	},
];

export default route;
