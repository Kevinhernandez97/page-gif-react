import { useGifs } from "../../components/hooks/useGifs";
import { ListOfGifs } from "../../components/ListOfGifs";
import { Spinner } from "../../components/Spinner";

function SearchResults({ params }) {
  const { keyword } = params
  const { loading, gifs } = useGifs({keyword})

    return (<>
      {loading
        ? <Spinner />
        : <ListOfGifs gifs={gifs} />
      }
    </>
  );
}

export { SearchResults };
