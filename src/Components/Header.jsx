import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuKebab } from "react-icons/ci";
import { CgMenuMotion } from "react-icons/cg";
import { gifState } from '../Context/Context';
import GifSearch from './GifSearch';

const Header = () => {

    const [categories, setCategories] = useState([])
    const [showCategories, setShowCategories] = useState(false)
    const { GIF, filter, setFilter, favoriles } = gifState()

    const fetchGifCategories = async () => {
        const { data } = await GIF.categories()
        setCategories(data)
    }

    useEffect(() => {
        fetchGifCategories()
    }, [])

    return (
        <nav>
            <div className='flex justify-between mb-3 items-center relative'>
                <Link to="/" className='tracking-tighter text-3xl font-bold'>
                    LOGO
                </Link>

                <div className='flex items-center gap-5'>
                    {
                        categories?.slice(0, 5)?.map((category) => {
                            return <Link
                                key={category.name}
                                to={`/${category.name_encoded}`}
                                className='text-xl uppercase font-bold border-b-4 hover:graident hidden lg:block py-1'>{category.name}</Link>
                        })
                    }
                    <button>
                        <CiMenuKebab
                            onClick={() => setShowCategories(!showCategories)}
                            size={40}
                            className={`py-1 uppercase font-bold border-b-4 hover:graident
                            hidden lg:block`}
                        />
                    </button>
                    {favoriles.length > 0 &&
                        (
                            <button className='bg-gray-500 p-2 rounded'>
                                <Link className='text-xl' to="/favourites">
                                    Favourite GIFs
                                </Link>
                            </button>
                        )}
                    <button>
                        <CgMenuMotion className='block lg:hidden '
                            size={35}
                        />
                    </button>
                </div>
                {
                    showCategories && (
                        <div className='absolute top-14 right-0 graident w-[100%] z-20 px-10 py-6'>
                            <span className='text-3xl font-extrabold'>Categories</span>
                            <hr className='bg-white my-5' />
                            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4'>
                                {
                                    categories.map((category) => {
                                        return <Link
                                            className='font-bold'
                                            key={category.name}
                                            to={`/${category.name_encoded}`}
                                        >
                                            {category.name}
                                        </Link>
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            </div>
            <GifSearch />

        </nav>
    )
}

export default Header
