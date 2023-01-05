import { Gif } from "../Gifs";
import { useState, useEffect } from "react";
import { getGifs } from '../getGifs'

function ListOfGifs({ params }) {
  const { keyword } = params
  const [loading, setLoading] = useState(false)
  const [gifs, setGifs] = useState([]);

    useEffect(function () {
      setLoading(true)
      getGifs({ keyword })
      .then((gifs) =>{
        setGifs(gifs)
        setLoading(false)
      })
      }, [keyword]); 

      if(loading) return (
        <i>
          Loading...
        </i>
      )

    return (
    gifs.map(({ id, title, url }) => 
      <Gif 
        id={id} 
        key={id} 
        title={title} 
        url={url} 
      />
    )
  );
}

export { ListOfGifs };