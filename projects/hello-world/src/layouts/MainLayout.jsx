import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
import SideMenu from "../components/SideMenu"

function MainLayout() {
	return (
		<section className="flex flex-col overflow-hidden h-dvh w-dvw">
			<Navbar />
			<div className="flex h-full">
				<SideMenu />
				<Outlet />
			</div>
		</section>
	)
}

export default MainLayout