import { NextResponse } from 'next/server'
import EncryptRsa from 'encrypt-rsa'

export async function POST(req: Request) {
	try {
		const body = await req.json()
		const { message, text, Key } = body
		const encryptRsa = new EncryptRsa()
		if (message === 'Private Key') {
			const decryptedText = encryptRsa.decryptStringWithRsaPrivateKey({
				text: text,
				privateKey: Key,
			})
			return NextResponse.json(decryptedText)
		} else {
			return NextResponse.json('Chức năng chưa cập nhập')
		}
	} catch (error) {
		console.error(error)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
