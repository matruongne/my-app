import './globals.css'

export const metadata = {
	title: 'Thuật toán RSA/AES',
	description: 'Mã Đức Thanh Trường',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
