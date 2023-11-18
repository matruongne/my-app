'use client'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import AES_cpn from '../components/AES_cpn'
import RSA_cpn from '@/components/RSA_cpn'
import { useState } from 'react'

export default function Home() {
	const [StateAES, setStateAES] = useState(false)
	const [StateRSA, setStateRSA] = useState(false)
	return (
		<main>
			<ToastContainer />
			<h1 className="text-gray-900 text-center font-bold text-3xl py-6">
				LỰA CHỌN THUẬT TOÁN(AES/RSA)
			</h1>
			<div className="flex justify-evenly">
				<h2
					className="text-gray-500 text-center font-bold text-3xl hover:bg-slate-300 px-12 py-6 rounded-lg"
					onClick={() => {
						setStateAES(!StateAES)
						if (StateRSA) setStateRSA(!StateRSA)
					}}
				>
					AES
				</h2>
				<span className="border-r-4 border-zinc-500"></span>
				<h2
					className="text-gray-500 text-center font-bold text-3xl hover:bg-slate-300 px-12 py-6 rounded-lg"
					onClick={() => {
						setStateRSA(!StateRSA)
						if (StateAES) setStateAES(!StateAES)
					}}
				>
					RSA
				</h2>
			</div>

			{StateRSA && <RSA_cpn />}
			{StateAES && <AES_cpn />}
		</main>
	)
}
