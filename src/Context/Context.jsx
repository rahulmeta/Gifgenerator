import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useState } from "react";

const gifContext = createContext()

const GifProvider = ({ children }) => {


    const [gifs, setGifs] = useState([])
    const [filter, setFilter] = useState("gifs")
    const [favoriles, setFavorites] = useState([])

    const GIF = new GiphyFetch("9FhGYD9P3IbvBPAp1KfrAj1LXBmal8vP")

    return <gifContext.Provider
        value={{ GIF, gifs, setGifs, filter, setFilter, favoriles }}
    >
        {children}
    </gifContext.Provider>
}

export const gifState = () => {
    return useContext(gifContext)
}

export default GifProvider