'use client'

import { useState } from "react"

export default function Searchbar(){
    const [dropDown, setDropdown] = useState(false)
    const [selected, setSelected] = useState(false)

    return(
        <>
            <div className="relative inline-block text-left w-full caret-transparent">
                <div className="flex h-12">
                    <button onClick={()=> dropDown == false ? setDropdown(true) : setDropdown(false)} 
                        type="button" 
                        className="
                         inline-flex h-full w-full justify-center gap-x-1.5 rounded-l-md
                         pt-4
                         bg-white px-3 py-2 text-sm font-semibold
                         text-gray-900 shadow-sm ring-1 
                         ring-gray-300
                         hover:bg-gray-50 caret-transparent" 
                         id="menu-button" aria-expanded="true" 
                         aria-haspopup="true"
                        >
                        {selected ? selected : 'Categorias'}
                        <svg className="mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <div className=" inline-flex h-full w-full justify-center gap-x-1.5 rounded-md text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        <input className="indent-3 rounded-r-md border-l-2 outline-none caret-transparent" type="text" id="search-input" placeholder="pesquisar..." />
                    </div>
                </div>
                {
                    dropDown === true 
                    ? 
                    <div className="absolute left-0 z-10 mt-1 w-86 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                        <div className="py-1" role="none">
                        <a href="#" onClick={(e) => {setSelected('Todos'), setDropdown(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Todos</a>
                        <a href="#" onClick={(e) => {setSelected('Detector portátil'), setDropdown(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Detector portátil</a>
                        <a href="#" onClick={(e) => {setSelected('Detector de gás ...'), setDropdown(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Detector de gás e alarme</a>
                        <a href="#" onClick={(e) => {setSelected('Sensor de odor ...'), setDropdown(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Sensor de odor / qualidade de ar</a>
                        <a href="#" onClick={(e) => {setSelected('Medidor de ...'), setDropdown(false)}} className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Medidor de poeira de aço</a>
                        {/* <form method="POST" action="#" role="none">
                            <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                        </form> */}
                        </div>
                    </div>
                    : <></>
                }

            </div>
        </>
    )
}