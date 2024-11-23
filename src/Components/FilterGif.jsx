import React from 'react'
import { gifState } from '../Context/Context'
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const filters = [
    {
        title: "GIFs",
        value: "gifs",
        background: "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500"
    },
    {
        title: "Stickers",
        value: "stickers",
        background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500"
    },
    {
        title: "Text",
        value: "text",
        background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500"
    }
]



const FilterGif = ({ alignLeft = false, showTranding = false }) => {

    const { filter, setFilter } = gifState()


    return (
        <div className={`flex my-3 ${alignLeft ? "" : "justify-end"} ${showTranding
            ? "justify-between flex-col sm:flex-row sm:items-center" : ""}`}>
            {showTranding && (
                <span className='flex gap-2'>
                    {showTranding && (
                        <HiMiniArrowTrendingUp size={25} className='text-green-500' />
                    )}
                    <span className='font-bold'>Tending</span>
                </span>
            )}
            <div className='flex gap-2'>
                {filters.map((item) => {
                    return <span
                       onClick={()=>setFilter(item.value)}
                        key={item.title}
                        className={`cursor-pointer ${filter === item.value ? item.background : ""} px-3 py-1 rounded-2xl font-semibold`}
                    >{item.title}</span>
                })}
            </div>
        </div>
    )
}

export default FilterGif
