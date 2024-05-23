'use client'

import { useState, useEffect } from 'react'
import products from './produtos.json'
import useDebounce from './UseDebounce'
import Link from 'next/link'

export default function Products(){
    const [equipament, setEquipament] = useState([])
    const [isLoading, setIsloading] = useState(true)
    const [showButtom, setShowButtom] = useState(true)
    const [dropDown, setDropdown] = useState(false)
    const [selected, setSelected] = useState(false)
    const [search, setSearch] = useState('')
    const [count, setCount] = useState(6)
    const [loadImage, setImageLoaded] = useState(false)  

    useEffect(() => {
        loadProducts(products, 6)
    }, [])

    const loadImages = async function (prod){
        for (const image of prod) {
            const img = new Image()
            img.src = image.image
            img.decode()
        }
    }
    
    const loadProducts = async (prod, cont) => {
        let arr = []
        if(prod && prod.length > 0){
            await loadImages(prod).then(setImageLoaded(true))
            setEquipament(prod)
            setShowButtom(true)
            setIsloading(false)

        }else{
            setIsloading(false)
        }
    }

    const loadMore = () => {
        let cnt = count + 6
        setCount(cnt)
        if(count >= equipament.length){
            setShowButtom(false)
        }
    }

    const filter = (category) => {
        setCount(6)
        setShowButtom(true)

        if(category !== 'all'){
            let filter = products.filter(item => item.class === category)
            setEquipament(filter)
        }else{
            loadProducts(products)
        }
    }

    useDebounce(() => {
        if(search != ''){
            setCount(6)
            let nameFilter = products.filter((item) => 
                item.name
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, "")
                .includes(search.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, ""))
            )
            let arry = []
            let gasFilter = []
            for (const prod of products) {
                prod.gas.map(gas =>
                    gas.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "").includes(search.toLowerCase().normalize('NFD').replace(/\p{Mn}/gu, "")) 
                    ? 
                    arry.push(prod)
                    : ''
                )
            }
            for (const eq of arry) {
                gasFilter.push(eq)
            }
            const concat = gasFilter.concat(nameFilter)
            setEquipament(concat)
            setShowButtom(true)
        }
    }, [products, search], 800)
    
    const handleSearch = (e) => {
        if(e.target.value != ""){
            setSearch(e.target.value)
        }else{
            setSearch("")
            loadProducts(products, 6)
        }
    }

    return (
        <>
            <div className='sm:w-[0px] md:w-96 mt-20 caret-transparent'>
                <div className="relative inline-block text-left w-full">
                    <div className="flex h-12">
                        <button onClick={()=> dropDown == false ? setDropdown(true) : setDropdown(false)} 
                            type="button" 
                            className="
                            inline-flex h-full w-full justify-center gap-x-1.5 rounded-l-md
                            pt-4
                            bg-white px-3 py-2 text-sm font-semibold
                            text-gray-900 shadow-sm ring-1 
                            ring-gray-300
                            hover:bg-gray-50" 
                            id="menu-button" aria-expanded="true" 
                            aria-haspopup="true"
                        >
                        {selected ? selected : 'Categorias'}
                        <svg className="mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                        </button>
                        <div className=" inline-flex h-full w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                            <input 
                                value={search || ''}
                                onChange={handleSearch}  
                                className="w-full indent-3 rounded-r-md border-l-2 outline-none" type="text" id="search-input" placeholder="pesquisar..." />
                        </div>
                    </div>
                    {
                        dropDown === true 
                        ? 
                        <div className="absolute left-0 mt-1 w-86 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                            <div className="py-1" role="none">
                            <a onClick={(e) => {setSelected('Todos'), setDropdown(false), filter('all')}} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">Todos</a>
                            <a onClick={(e) => {setSelected('Detector portátil'), setDropdown(false),  filter('detector-portatil')}} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-0">Detector portátil</a>
                            <a onClick={(e) => {setSelected('Detector de gás ...'), setDropdown(false), filter('sistemas-detecção-alarme')}} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-1">Detector de gás e alarme</a>
                            <a onClick={(e) => {setSelected('Sensor de odor ...'), setDropdown(false), filter('sensores-odor-monitores-qualidade-ar')}} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2">Sensor de odor / qualidade de ar</a>
                            <a onClick={(e) => {setSelected('Medidor de ...'), setDropdown(false), filter('medidores-po-aco')}} className="text-gray-700 block px-4 py-2 text-sm cursor-pointer" role="menuitem" tabIndex="-1" id="menu-item-2">Medidor de poeira de aço</a>
                            </div>
                        </div>
                        : <></>
                    }

                </div>
            </div>

            <div className="h-100vh w-100vw m-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-20 caret-transparent">
                {
                    isLoading 
                        ?
                        <a  
                            className="group m-4 rounded-lg border border-transparent px-5 py-4 
                            transition-colors bg-blue-50 hover:border-gray-300 hover:bg-gray-100
                            hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30" rel="noopener noreferrer">

                            <div className='flex flex-col w-full'>
                                <div className='rounded-lg w-[250px] h-[250px] self-center bg-slate-200' ></div>
                                <h2 className='self-center mb-3 text-2xl font-semibold bg-slate-200 text-slate-200 mt-2'>bbbbbbbb</h2>
                            </div>
                            <div className='flex flex-wrap'>
                                <p className='border p-2 rounded-md table m-1 text-sm border-bg-slate-200 text-white'>teste</p>
                                <p className='border p-2 rounded-md table m-1 text-sm border-bg-slate-200 text-white'>teste</p>
                                <p className='border p-2 rounded-md table m-1 text-sm border-bg-slate-200 text-white'>teste</p>
                            </div>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50 bg-slate-200`}></p>
                        </a>
                        :
                        equipament.map(
                            (item, index) =>
                            index < count && (
                                <Link key={index}
                                    href={`/details?id=${item.name}`}
                                    className="group m-4 rounded-lg border border-transparent px-5 py-4 
                                    transition-colors  bg-blue-50 hover:border-gray-300 hover:bg-gray-100 hover:bg-gray-450 cursor-pointer"
                                    rel="noopener noreferrer"
                                    >
                                        <div className='flex flex-col w-full'>
                                            <img className='rounded-lg w-[250px] h-[250px] self-center' key={index} src={item.image} />
                                            <h2 className={`self-center mb-3 text-2xl font-semibold dark:text-gray-400`}>{item.name}</h2>
                                        </div>
                                        {
                                            (item.gas && item.gas.length > 0)
                                            ? 
                                            <div className='flex flex-wrap'>
                                                {
                                                    item.gas.map(gas => 
                                                        <p key={gas} className="border p-2 rounded-md table m-1 text-sm border-sky-300/50 dark:text-gray-400">{gas}</p>
                                                    )
                                                }
                                            </div>
                                            : <></>
                                        }
                                        <p className={'m-0 max-w-[30ch] text-sm opacity-50 dark:text-gray-400'}>{item.description}</p>
                                        {
                                            item.pdf
                                            ?
                                                <a className='cursor-pointer dark:text-gray-400' href={item.pdf} target="_blank"> 
                                                    {"saiba mais"}
                                                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                                        &rarr;
                                                    </span>
                                                </a>
                                            : 
                                                <></>
                                        }
                                </Link>
                            )
                        )  
                } 
            </div>
            <br />
            {
                showButtom 
                ?
                <div className='z-20 m-6'>    
                    <button onClick={loadMore} className="border-b rounded bg-zinc-200 p-4 m-8  dark:text-gray-400">
                        {isLoading ? 'Loading...' : 'Mais produtos'}
                    </button>
                </div>
                : 
                <></>
            }
        </>
    )
}