import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import AES_cpn from '../components/AES_cpn'
import RSA_cpn from '@/components/RSA_cpn'

export default function Home() {
	return (
		<main>
			<ToastContainer />
			<h1 className="text-gray-500 text-center font-bold text-3xl py-6">AES</h1>

			<AES_cpn />

			<h1 className="text-gray-500 text-center font-bold text-3xl my-6 pt-6 border-t-4">RSA</h1>
			<RSA_cpn />
		</main>
	)
}
