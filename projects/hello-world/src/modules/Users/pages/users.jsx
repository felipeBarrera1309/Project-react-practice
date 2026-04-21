import { useNavigate, useLocation, useParams } from 'react-router-dom'
import CardFollow from '../components/CardFollow'

function ViewUsers() {
	const navigate = useNavigate()
	const location = useLocation();
	const params = useParams()

	const goUsers = () => {
		console.log('user route information: ', params, location)
	}

	return (
		<section className="flex flex-col p-6 bg-[#0f0f0f] h-dvh w-dvw">
			<button className="border border-gray-300 px-4 rounded w-fit cursor-pointer mt-2 py-2 text-white" onClick={ goUsers }>
				to go users
			</button>
			<div className="bg-[#272727] rounded-lg py-4 w-[300px] mt-4">
				<p className="ms-6 text-white text-xl font-bold">A quién seguir</p>
				<CardFollow />
			</div>
		</section>
	)
}

export default ViewUsers