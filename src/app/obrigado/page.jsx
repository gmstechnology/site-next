 

"use client"

import { useRouter } from 'next/navigation'

export default function Details(){
    const router = useRouter()

    const redirect = async () => {       
        router.push("/")
    }

    return(
        <div className='h-[100vh] flex flex-col justify-center items-center'>
            <h1  className='m-2 font-semibold text-2xl text-gray-700'>Obrigada pela mensagem!</h1>
            <h2  className='m-2 font-semibold text-1xl text-gray-700' >Em breve entraremos em contato</h2>
            <button
                onClick={redirect}
                className='w-60 p-4 m-2 border-b rounded bg-zinc-200 dark:text-gray-400'
            >
                Voltar para página inicial
            </button>
        </div>
    )
}