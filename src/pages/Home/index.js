import { Input } from "../../components/Input";
import "./Home.css";
import { ListOfGifs } from "../../components/ListOfGifs";
import { useGifs } from "../../components/hooks/useGifs";
import { TrendingSearches } from "../../components/TrendingSearches";

function Home() {
  const { loading, gifs } = useGifs();

  return (
    <div className="listGif">
      <Input />
      <h3>Ultima búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <div>
        <TrendingSearches />
      </div>
    </div>
  );
}

export { Home };
