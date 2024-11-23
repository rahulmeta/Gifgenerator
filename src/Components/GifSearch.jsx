import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { HiMiniXMark } from "react-icons/hi2";

const GifSearch = () => {

    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const searchGifs = async () => {
        if (query.trim() === "") {
            return;
        }
        navigate(`/search/${query}`)
    }

    return (
        <div className='flex relative'>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder='Search stickers,Gifs'
                className='w-full text-black py-5 pl-3 outline-none rounded-tl-md rounded-bl-md text-xl'
            />
            {query && (
                <button
                    onClick={() => setQuery("")}
                    className='absolute bg-gray-300 rounded-full right-20 mr-2 top-6'
                >
                    <HiMiniXMark size={22} />
                </button>

            )}

            <button
                className='bg-gradient-to-tr from-red-500 via-red-400 to-red-300 px-5 rounded-tr-md rounded-br-md'
                onClick={searchGifs}
            >
                <IoSearch size={35} />
            </button>
        </div>
    )
}

export default GifSearch
