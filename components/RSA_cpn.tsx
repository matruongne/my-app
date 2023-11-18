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

	const [EncodeResult, setEncodeResult] = useState('')
	const [DecodeResult, setDecodeResult] = useState('')

	const data = ['Public key', 'Private Key']

	const handleClick = () => {
		axios.get('http://localhost:3000/api').then((data) => {
			setPr(data.data.privateKey)
			setPu(data.data.publicKey)
		})
	}
	const handleClickEnc = () => {
		axios
			.post('http://localhost:3000/api/result', {
				message: valueRadioEnc,
				text: Encode,
				Key: EncodeKey,
			})
			.then((data) => {
				setEncodeResult(data.data)
			})
	}
	const handleClickDec = () => {
		axios
			.post('http://localhost:3000/api/resultdec', {
				message: valueRadioDec,
				text: Decode,
				Key: DecodeKey,
			})
			.then((data) => {
				setDecodeResult(data.data)
			})
	}

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
							className="whitespace-pre-wrap "
						/>
						<Textarea
							label="Enter Public/Private key"
							id="keyEncrypt"
							placeholder="Enter Public/Private key"
							value={EncodeKey}
							setValue={setEncodeKey}
							className="whitespace-pre-wrap "
						/>
						<ControlledRadioButtonsGroup
							label="RSA Key Type:"
							value={valueRadioEnc}
							SetValue={setValueRadioEnc}
							data={data}
						/>
						<button
							className="relative top-32 left-28 min-w-[200px] bg-blue-600 p-3 mb-36 rounded-lg font-mono text-xl text-white"
							onClick={handleClickEnc}
							type="button"
						>
							Encrypt
						</button>
						<Textarea
							label="Encrypted Output: "
							id="resultEnc"
							placeholder="Hiển thị kết quả..."
							value={EncodeResult}
							className="whitespace-pre-wrap"
							disabled
						/>
					</div>
					<div className="w-full">
						<Textarea
							label="Enter Encrypted Text to Decrypt"
							id="Decrypt"
							placeholder="Nhập văn bản được mã hóa để giải mã..."
							value={Decode}
							className="whitespace-pre-wrap "
							setValue={setDecode}
						/>
						<Textarea
							label="Enter Public/Private key"
							id="keyDecrypt"
							placeholder="Enter Public/Private key"
							value={DecodeKey}
							setValue={setDecodeKey}
							className="whitespace-pre-wrap "
						/>
						<ControlledRadioButtonsGroup
							label="RSA Key Type:"
							value={valueRadioDec}
							SetValue={setValueRadioDec}
							data={data}
						/>
						<button
							className="relative top-32 left-28 min-w-[200px] bg-red-600 p-3 mb-36 rounded-lg font-mono text-xl text-white"
							onClick={handleClickDec}
							type="button"
						>
							Decrypt
						</button>
						<Textarea
							label="Decrypted Output: "
							id="resultDec"
							placeholder="Hiển thị kết quả..."
							value={DecodeResult}
							className="whitespace-pre-wrap"
							disabled
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RSA_cpn
