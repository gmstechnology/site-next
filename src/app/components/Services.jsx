'use client'
import { useState, useEffect } from 'react'

export default function Services(){
    const images = [
        {   
            id:0,
            imgDesk:'/banner1-gms.png', 
            imgMobile:'/banner1-cel.png',
            texts:[
                {text: "Assistência técnica", sub:" para toda região do Brasil."},
                {text: "Detecção de vazamentos", sub:" em fábricas e instalações residenciais."},
                {text: "Calibração de equipamentos",  sub:" fique em conformidade com as normas do Inmetro."}
            ]
        },
        {
            id:1,
            imgDesk:'/banner2-gms.png', 
            imgMobile:'/banner2-cel.png',
            texts:[
                {text: "Análise de risco de gases.", sub:" garanta a segurança da sua empresa."},
                {text: "Projetos e consultoria", sub:" entre em contato para mais detalhes."},
                {text: "Laudo de explosividade ", sub:" controle o risco de explosividade do seu negócio"}
            ]
        },
    ]

    const [isDesktop, setIsDesktop] = useState(true)
    const [imageShow, setImageShow] = useState(images[0])
    const [time, setTime] = useState('8000')
    const [pontinho, setPontinho] = useState(false)

    const checkWindowSize = () => {
        let windowWidth
        if(typeof window !== undefined){
            windowWidth = window.innerWidth
        }
        if(windowWidth >= 1024){
            setIsDesktop(true)
        }else{
            setIsDesktop(false)
        }
    }

    const changeImages = () => {
        setTime('8000')
        setTimeout(() => {
            imageShow.id === 0 ? setImageShow(images[1]) : setImageShow(images[0])
            pontinho ? setPontinho(false) : setPontinho(true)
        }, time)
    }

    const changeSlide = () => {
        imageShow.id === 0 ? setImageShow(images[1]) : setImageShow(images[0])
        pontinho ? setPontinho(false) : setPontinho(true)
    }
  
    useEffect(() => {
        checkWindowSize()
        changeImages()
    }, [isDesktop, imageShow])

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center caret-transparent">
                {
                    isDesktop
                    ? 
                    <img className="h-[380px] inline-block rounded-md opacity-50" src={imageShow.imgDesk} />
                    :
                    <img className="h-[380px] inline-block rounded-md opacity-30" src={imageShow.imgMobile} />
                }
                <p  onClick={() => changeSlide()} className='text-black absolute z-60 self-start w-6 h-6 md:w-8 md:h-8 text-center bg-[#b7d2ee] rounded-full m-1 cursor-pointer'>
                    <img src='/left-arrow.png' className='sm:w-2 sm:h-2 md:w-8 md:h-8 p-2 opacity-80'/>
                </p>
                <p onClick={() => changeSlide()} className='text-black absolute z-60 self-end w-6 h-6 md:w-8 md:h-8 text-center bg-[#b7d2ee] rounded-full m-1 cursor-pointer'>
                    <img src='/right-arrow.png' className='sm:w-2 sm:h-2 md:w-8 md:h-8 p-2 opacity-80'/>
                </p>
                <div className='flex h-[300px] items-end absolute'>
                    <div  onClick={() => changeSlide()} className={`w-2 h-2 m-1 rounded-full ${ pontinho ? `bg-[#94b8df]` : `bg-[#0050A7]`}`}></div>
                    <div  onClick={() => changeSlide()} className={`w-2 h-2 m-1 rounded-full ${ !pontinho ? `bg-[#94b8df]` : `bg-[#0050A7]`}`}></div>
                </div>

                <div className="ml-6 md:ml-2 absolute flex flex-col sm:m-4 sm:items-center sm:text-sm md:items-start md:text-3xl text-[#0050A7] font-bold">
                    {
                        imageShow.texts.map((item, index) => 
                            <div key={index}>
                                <h2>
                                    {item.text}
                                </h2>
                                <p key={index} className='text-sm self-start text-slate-700 flex justify-start items-center'>
                                    <img className='w-6 h-4 pr-2 opacity-55' src='/arrow-turn-right.png'/>
                                    {item.sub}
                                </p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}