import { useRef, useEffect, useCallback } from "react";
import debounce from "just-debounce-it";
import Spinner from "../../components/Spinner";
import { ListOfGifs } from "../../components/ListOfGifs";
import { useGifs } from "../../components/hooks/useGifs";
import { useNearScreen } from "../../components/hooks/useNearScrenn"
import {Helmet} from "react-helmet";

function SearchResults({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef()
  const {isNearScreen} = useNearScreen({ 
  externalRef:   loading ? null : externalRef,
  once: false
  })
  const title = gifs ? `${gifs.length} Resultados de ${keyword}` : ''


  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage])

  useEffect(function () {
    if(isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return <>
  {
    loading 
    ? <Spinner /> 
    : <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={title} />
    </Helmet>

    <h3 className="App-title">
      {decodeURI(keyword)}
    </h3>
      <ListOfGifs gifs={gifs} />
    <div id="visor" ref={externalRef}></div>
    </>
  }
  </>
}

export { SearchResults };

