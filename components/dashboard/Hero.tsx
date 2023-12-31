'use client'

import { useSession } from 'next-auth/react';

export default function HeroDashboard() {

    const { data: session } = useSession()

    return (
        <>
            <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
                <div className="mr-6">
                    <h1 className="text-4xl font-semibold mb-2">Bem vindo, Dr(a) {session?.user.name} <br /> ao Dashboard</h1>
                    <h2 className="text-gray-600 ml-0.5">Controle do seu compressor</h2>
                </div>
                <div className="flex flex-wrap items-start justify-end -mb-3">
                    <button className="inline-flex px-5 py-3 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2">
                            <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                        Visualizar dados específicos
                    </button>
                    <button className="inline-flex px-5 py-3 text-white bg-purple-600 hover:bg-purple-700 focus:bg-purple-700 rounded-md ml-6 mb-3">
                        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 h-6 w-6 text-white -ml-1 mr-2">
                            <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Crie outro dashboard
                    </button>
                </div>
            </div>
        </>
    )
}