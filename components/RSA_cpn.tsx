'use client'
import { useState } from 'react'
import axios from 'axios'
import { Textarea } from './textarea'
import ControlledRadioButtonsGroup from './RadioBtn'

const RSA_cpn = () => {
	const [privateKey, setPr] = useState('')
	const [publicKey, setPu] = useState('')

	const [Encode, setEncode] = useState('')
	const [Decode, setDecode] = useState('')

	const [valueRadioEnc, setValueRadioEnc] = useState('')
	const [valueRadioDec, setValueRadioDec] = useState('')

	const [EncodeKey, setEncodeKey] = useState('')
	const [DecodeKey, setDecodeKey] = useState('')

	const data = ['Public key', 'Private Key']

	const handleClick = () => {
		axios.get('http://localhost:3000/api').then((data) => {
			setPr(
				data.data.privateKey
					.replace(/-----BEGIN PRIVATE KEY-----/, '')
					.replace(/-----END PRIVATE KEY-----/, '')
					.trim()
			)
			setPu(
				data.data.publicKey
					.replace(/-----BEGIN PUBLIC KEY-----/, '')
					.replace(/-----END PUBLIC KEY-----/, '')
					.trim()
			)
		})
	}
	console.log('pri :', privateKey)
	console.log('pub :', publicKey)
	console.log('enc :', Encode)
	console.log('valueRadioEnc :', valueRadioEnc)
	console.log('valueRadioDec :', valueRadioDec)
	console.log('EncodeKey :', EncodeKey)
	console.log('DecodeKey :', DecodeKey)
	return (
		<div>
			<div className="flex w-full">
				<div className="w-full px-5 flex justify-between items-center">
					<Textarea
						label="Public Key "
						id="publicKey"
						placeholder="Public Key..."
						value={publicKey}
						className="whitespace-pre cursor-not-allowed"
						disabled
					/>
					<button
						className="mx-4 h-22 bg-gray-500 p-3 rounded-lg font-mono text-xl text-white"
						onClick={handleClick}
						type="button"
					>
						Tạo Public/Private Key
					</button>
					<Textarea
						label="Private Key"
						id="privateKey"
						placeholder="Private Key..."
						value={privateKey}
						className="whitespace-pre cursor-not-allowed"
						disabled
					/>
				</div>
			</div>
			<div className="flex w-full items-center py-10">
				<div className="w-full px-5 flex justify-around">
					<div className="w-full">
						<Textarea
							label="Enter Plain Text to Encrypt"
							id="Encrypt"
							placeholder="Nhập văn bản thuần túy để mã hóa..."
							value={Encode}
							setValue={setEncode}
							className="whitespace-pre "
						/>
						<Textarea
							label="Enter Public/Private key"
							id="keyEncrypt"
							placeholder="Enter Public/Private key"
							value={EncodeKey}
							setValue={setEncodeKey}
							className="whitespace-pre "
						/>
						<ControlledRadioButtonsGroup
							label="RSA Key Type:"
							value={valueRadioEnc}
							SetValue={setValueRadioEnc}
							data={data}
						/>
						<button
							className="relative top-32 left-28 min-w-[200px] bg-blue-600 p-3 rounded-lg font-mono text-xl text-white"
							onClick={handleClick}
							type="button"
						>
							Encrypt
						</button>
					</div>
					<div className="w-full">
						<Textarea
							label="Enter Encrypted Text to Decrypt (Base64)"
							id="Decrypt"
							placeholder="Nhập văn bản được mã hóa để giải mã..."
							value={Decode}
							className="whitespace-pre "
							setValue={setDecode}
						/>
						<Textarea
							label="Enter Public/Private key"
							id="keyDecrypt"
							placeholder="Enter Public/Private key"
							value={DecodeKey}
							setValue={setDecodeKey}
							className="whitespace-pre "
						/>
						<ControlledRadioButtonsGroup
							label="RSA Key Type:"
							value={valueRadioDec}
							SetValue={setValueRadioDec}
							data={data}
						/>
						<button
							className="relative top-32 left-28 min-w-[200px] bg-red-600 p-3 rounded-lg font-mono text-xl text-white"
							onClick={handleClick}
							type="button"
						>
							Decrypt
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RSA_cpn
