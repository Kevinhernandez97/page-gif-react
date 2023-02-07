import { getGifs } from "../../services/getGifs"
import { useContext, useState, useEffect } from "react"
import  Context  from "../../context/GifsContext"

const INITIAL_PAGE = 0


function useGifs({ keyword, rating } = { keyword : ''}) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(Context)

   const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'sahkira'

  useEffect(function () {
      setLoading(true)

      getGifs({ keyword: keywordToUse, rating })
      .then((gifs) => {
        setGifs(gifs)
        setLoading(false)
        localStorage.setItem('lastKeyword', keyword)
      })
    }, [keyword, keywordToUse, rating, setGifs])

    useEffect(function () {
      if (page === INITIAL_PAGE) return 

      setLoadingNextPage(true)

      getGifs({ keyword: keywordToUse, rating, page })
      .then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    }, [keywordToUse, page, rating, setGifs])

  return { loading, loadingNextPage, gifs, setPage }
}

export { useGifs }
