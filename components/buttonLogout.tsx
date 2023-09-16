'use client'

import { signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

export default function ButtonLogout(){
	const router = useRouter()

	async function logout() {
		await signOut({
			redirect: false
		})

		router.replace('/signup')
	}

 return <button onClick={logout} className="">Sair</button>
}