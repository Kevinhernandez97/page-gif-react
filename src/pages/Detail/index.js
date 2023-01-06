import React from "react"
import { useContext } from "react"
import { Context1 } from "../../context/GifsContext"
import { Gif } from '../../components/Gifs'

function Detail ({params}) {
    const {gifs} = useContext(Context1)
    console.log(gifs)

    const gif = gifs.find(singleGif => singleGif.id === params.id)
    console.log(gif)
    return (
        <Gif {...gif} />
    )
}

export { Detail }