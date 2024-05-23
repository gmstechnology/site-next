"use client"

import { useState, useEffect } from 'react'
import products from '../components/produtos.json'
import Header from '../components/Header'
import { send } from '../prepareEmail'
import { useRouter } from 'next/navigation'

export default function Details({searchParams}){
    let equipament = products.find(item => item.name === searchParams.id)
    const router = useRouter()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [msg, setMsg] = useState('')
    const [errors, setErrors] = useState({})
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => { 
        validateForm(); 
    }, [name, email, msg])

    const validateForm = () => { 
        let errors = {}; 
        if (!name) { 
            errors.name = 'Preencha o nome.'; 
        } 
        if (!email) { 
            errors.email = 'Preencha o email.'; 
        } else if (!/\S+@\S+\.\S+/.test(email)) { 
            errors.email = 'o email inserido está incorreto.'; 
        } 
        if (!msg) { 
            errors.msg = 'Escreva a sua mensagem.'; 
        } else if (msg.length < 6) { 
            errors.msg = 'a mensagem precisa ter pelo menos 6 caracteres.'; 
        } 
        setErrors(errors); 
        setIsFormValid(Object.keys(errors).length === 0); 
    }
    
    const callLoading = async (e) => {
        e.preventDefault()
        callSendEmail()
        router.push("/obrigado")
    }
    const handleSubmit = () => { 
        if (isFormValid) { 
            console.log('Form submitted successfully!'); 
        } else { 
            console.log('Form has errors. Please correct them.'); 
        } 
    }; 

    const callSendEmail = async () => {
        let eqName = equipament.name
        await send({name, email, msg, eqName})     
    }

    return(
        <div className='flex flex-col justify-center items-center overflow-hidden min-h-screen'>
        <Header />
            <div className="flex flex-col lg:flex-row justify-center items-center m-2">
                <div className='md:w-2/4'>
                    <div className='flex flex-col m-4 items-center lg:items-end border p-2 rounded-md  border-slate-400/50 md:border-transparent dark:text-gray-400'>
                        <h1 className='w-2/3  text-center mb-2 text-2xl font-semibold text-gray-700 dark:text-gray-400'>{equipament ? equipament.name : ''}</h1>
                        <div className='w-[350px] h-[350px] flex justify-center'>
                            <img className='rounded-md ' src={equipament ? equipament.image : ''}/>
                        </div>
                        
                        <h2 className='flex-wrap w-[350px] p-4 text-left md:text-right'>{equipament ? equipament.description : ''}</h2>
                        <div className='flex flex-wrap w-[350px] justify-center'>
                            {
                                equipament
                                    ? 
                                    equipament.gas && equipament.gas.length > 1
                                        ?
                                            equipament.gas.map(gas => 
                                                <p key={gas} className="border p-2 rounded-md table m-1 text-sm border-sky-400/50 dark:text-gray-400">{gas}</p>
                                            )
                                        :
                                        <p key={equipament.gas} className="border p-2 rounded-md table m-1 text-sm border-sky-400/50 dark:text-gray-400">{equipament.gas}</p>
                                    : ''
                            }

                        </div>
                    </div>
                </div>
                <div className='md:w-2/4 '>
                    <div className='flex flex-col'>
                        <form className='flex flex-col w-full mr-6 items-center  md:justify-start'>
                            <div className='flex flex-col items-center '>
                                <h1 className='m-2 font-semibold text-2xl text-gray-700'>Entre  em contato!</h1>
                                <input 
                                    value={name}
                                    style={styles.input}
                                    onChange={e => { setName(e.currentTarget.value) }}
                                    className='w-80 p-4 m-2 outline-none rounded-md' 
                                    placeholder='nome'
                                />
                                 {errors.name && <p style={styles.error}>{errors.name}</p>} 
                                <input
                                    value={email}
                                    style={styles.input} 
                                    onChange={e => { setEmail(e.currentTarget.value) }}
                                    className='w-80 p-4 m-2 outline-none rounded-md' 
                                    placeholder='email'
                                />
                                {errors.email && <p style={styles.error}>{errors.email}</p>} 
                                <textarea
                                    value={msg}
                                    style={styles.input} 
                                    onChange={e => { setMsg(e.currentTarget.value) }}
                                    className='w-80 p-6 m-2 outline-none rounded-md overflow-hidden' 
                                    placeholder='mensagem'
                                />
                                {errors.msg && <p style={styles.error}>{errors.msg}</p>} 

                                <button
                                    disabled={!isFormValid} 
                                    onClick={e => callLoading(e)}
                                    className='w-60 p-4 m-2 border-b rounded bg-zinc-200 dark:text-gray-400'
                                    >Enviar
                                </button>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

const styles = { 
    input: { 
        width: '100%', 
        padding: '12px', 
        marginBottom: '12px', 
        border: '1px solid #ccc', 
        borderRadius: '10px', 
        fontSize: '16px', 
        transition: 'border-color 0.2s ease', 
    }, 
    button: { 
        backgroundColor: 'green', 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: '16px', 
        padding: '12px', 
        border: 'none', 
        borderRadius: '10px', 
        cursor: 'pointer', 
        width: '40%', 
        transition: 'opacity 0.2s ease', 
    }, 
    error: { 
        color: 'red', 
        fontSize: '14px', 
        // marginBottom: '6px', 
    }, 
}