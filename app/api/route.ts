import { generateKeyPairSync } from 'crypto'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const { publicKey, privateKey } = generateKeyPairSync('rsa', {
			modulusLength: 2048,
			publicKeyEncoding: {
				type: 'spki',
				format: 'pem',
			},
			privateKeyEncoding: {
				type: 'pkcs8',
				format: 'pem',
			},
		})
		return NextResponse.json({ publicKey, privateKey })
	} catch (error) {
		console.error(error)
		return new NextResponse('Internal Server Error', { status: 500 })
	}
}
