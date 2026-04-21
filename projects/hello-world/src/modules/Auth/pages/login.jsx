import { useNavigate, useLocation, useParams } from 'react-router-dom'

function ViewLogin() {
	const navigate = useNavigate()
	const location = useLocation();
	const params = useParams()

	const goUsers = () => {
		navigate('/users/56')
	}

	return (
		<section className="flex flex-col m-6">
			<h1>This is Login</h1>
			<button className="border border-gray-300 px-4 rounded w-fit cursor-pointer mt-2 py-2" onClick={ goUsers }>
				to go users
			</button>
		</section>
	)
}

export default ViewLogin