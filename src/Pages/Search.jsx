import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { gifState } from '../Context/Context'
import FilterGif from '../Components/FilterGif'
import Gif from '../Components/Gif'

const Search = () => {
    const [searchResults, setSearchResults] = useState([])
    const { GIF, filter } = gifState()
    const { query } = useParams()

    const fetchSearchResults = async () => {
        const { data } = await GIF.search(query, {
            sort: "relevant",
            lang: "eng",
            type: filter,
            limit: 20
        })
        setSearchResults(data)
    }

    useEffect(() => {
        fetchSearchResults()
    }, [filter])

    return (
        <div className='my-4'>
            <h2 className='text-5xl pb-3 font-extrabold'>{query}</h2>
            <FilterGif alignLeft={true} />

            {
                searchResults.length > 0 ? (
                    <div className='columns-2 mb:columns-3 lg:columns-4 gap-2'>
                        {searchResults.map((gif) => (
                            <Gif gif={gif} key={gif.id} />
                        ))}
                    </div>
                ) : (
                    <span>
                        {" "}
                        No GIFs found for {query}. Try searching for Stickers instead?
                    </ span>
                )
            }
        </div>
    )
}

export default Search
