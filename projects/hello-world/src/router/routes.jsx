import { Navigate } from "react-router-dom";
import Auth from '../modules/Auth/routes/index.jsx'
import Users from '../modules/Users/routes/index.jsx'
import EmptyLayout from '../layouts/EmptyLayout.jsx'
import MainLayout from "../layouts/MainLayout.jsx";

export const routes = [
	{
		path: '/',
		element: <EmptyLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="/login" replace />
			},
			...Auth
		]
	},
	{
		path: '/',
		element: <MainLayout />,
		children: [
			...Users
		]
	}
]