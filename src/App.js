import './App.css';
import React, { Suspense } from 'react';
import {
	Switch,
	Route,
	Redirect,
	BrowserRouter as Router,
} from 'react-router-dom';
import { Spin } from 'antd';
import routes from './route';

const WaitingComponent = (Component) => (props) => (
	<Suspense fallback={<Spin spinning={true} tip="Loading..." />}>
		<Component {...props} />
	</Suspense>
);
const PrivateRoute = ({ isLogin, component: Component, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isLogin ? (
				<Component {...props} />
			) : (
				<Redirect
					to={{
						pathname: '/signin',
					}}
				/>
			)
		}
	/>
);

function App() {
	const showContent = () => {
		let result = [];
		let isLogin = true;
		if (routes.length > 0) {
			result = routes.map((route, index) => {
				const layout = route.layout;
				if (route.auth && isLogin) {
					return (
						<PrivateRoute
							key={index}
							path={route.path}
							exact={route.exact}
							component={WaitingComponent(route.main)}
							isLogin={!isLogin}
						/>
					);
				} else {
					return (
						<RouteWrapper
							key={index}
							path={route.path}
							exact={route.exact}
							component={WaitingComponent(route.main)}
							layout={layout}
						/>
					);
				}
			});
		}
		return <Switch>{result}</Switch>;
	};
	return (
		<Router>
			<div className="App">{showContent()}</div>
		</Router>
	);
}

function RouteWrapper({
	component: Component,
	layout: Layout,
	exact: exact,
	...rest
}) {
	return (
		<Route
			exact
			{...rest}
			render={(props) => (
				<Layout {...props}>
					<Component {...props} />
				</Layout>
			)}
		/>
	);
}

export default App;
