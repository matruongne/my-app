'use client'
import { Textarea } from '@/components/textarea'
import { Input } from './input'
import { toast } from 'react-toastify'
import * as CryptoJS from 'crypto-js'
import { useState } from 'react'

const AES_cpn = () => {
	const [Encode, setEncode] = useState('')
	const [Decode, setDecode] = useState('')
	const [Key, setKey] = useState('')

	const handleEncode = () => {
		setDecode('')

		if (Encode === '' || Key === '') {
			toast.error('Yêu cầu nhập đầy đủ thông tin!')
			return
		} else {
			var ciphertext = CryptoJS.AES.encrypt(Encode, Key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7,
			}).toString()

			if (ciphertext === '') {
				toast.error('Không hợp lệ!')
				return
			} else setDecode(ciphertext)
		}
	}
	const handleDecode = () => {
		setDecode('')
		if (Encode === '' || Key === '') {
			toast.error('Yêu cầu nhập đầy đủ thông tin!')
			return
		} else {
			var bytes = CryptoJS.AES.decrypt(Encode, Key, {
				mode: CryptoJS.mode.ECB,
				padding: CryptoJS.pad.Pkcs7,
			})
			var originalText = bytes.toString(CryptoJS.enc.Utf8)

			if (originalText === '') {
				toast.error('Không hợp lệ!')
				return
			} else setDecode(originalText)
		}
	}

	return (
		<div className="flex w-full">
			<div className="w-full px-5">
				<Textarea
					label="Encode"
					id="encode"
					placeholder="Vui lòng nhập nội dung cần mã hóa hay giải mã..."
					value={Encode}
					setValue={setEncode}
				/>
				<Input
					label="Key"
					id="key"
					placeholder="Vui lòng nhập Khóa..."
					type="text"
					value={Key}
					setValue={setKey}
				/>
			</div>
			<div className="flex flex-col justify-center align-middle">
				<button className="bg-blue-400 block w-[220px] h-[40px] my-2" onClick={handleEncode}>
					Mã hóa
				</button>
				<button className="bg-red-400 block w-[220px] h-[40px] my-2" onClick={handleDecode}>
					Giải mã
				</button>
			</div>
			<div className="w-full px-5">
				<Textarea
					label="Decode"
					id="decode"
					placeholder="Kết quả hiển thị ở đây"
					disabled
					value={Decode}
					setValue={setDecode}
				/>
			</div>
		</div>
	)
}

export default AES_cpn
