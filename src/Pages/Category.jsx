import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gifState } from '../Context/Context'
import Gif from '../Components/Gif'

const Category = () => {
    const [result, setResult] = useState([])
    const { category } = useParams()
    const { GIF } = gifState()

    const fetchSearchResults = async () => {
        const { data } = await GIF.gifs(category, category)
        setResult(data)
    }

    useEffect(() => {
        fetchSearchResults()
    }, [category])


    return (
        <div className='flex flex-col sm:flex-row gap-5 my-4'>
            <div className='w-full sm:w-72'>
                {result.length > 0 && <Gif gif={result[0]}/>}
            </div>
        </div>
    )
}

export default Category
