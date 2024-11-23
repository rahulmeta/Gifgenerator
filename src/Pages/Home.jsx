import React, { useEffect } from 'react'
import { gifState } from '../Context/Context'
import Gif from '../Components/Gif'
import FilterGif from '../Components/FilterGif'

const Home = () => {
    const { GIF, gifs, setGifs, filter } = gifState()

    const fetchTrandingGifs = async () => {
        const { data } = await GIF.trending({
            limit: 20,
            type: filter,
            rating: "g"
        })
        setGifs(data)
    }

    useEffect(() => {
        fetchTrandingGifs()
    }, [filter])


    return (

        <div>
            <img
                src="src/assets/banner.gif"
                alt="Gifs"
                className='mt-2 rounded w-full'
            />
            <FilterGif showTranding/>
            <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2'>
                {
                    gifs.map((gif) => {
                        return <Gif gif={gif} key={gif.title}/>
                    })
                }
            </div>

        </div>

    )
}

export default Home
