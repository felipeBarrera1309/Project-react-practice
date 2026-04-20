import HomeView from '../modules/Home/home.jsx'
import Auth from '../modules/Auth/routes/index.jsx'
import Users from '../modules/Users/routes/index.jsx'

export const routes = [
	{
		path: '/',
		element: <HomeView />,
		children: [
			...Auth,
			...Users
		]
	}
]