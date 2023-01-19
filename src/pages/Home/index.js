import Input from "../../components/Input";
import "./Home.css";
import { ListOfGifs } from "../../components/ListOfGifs";
import { useGifs } from "../../components/hooks/useGifs";
import { LazyTrading } from "../../components/TrendingSearches";
import { Helmet } from "react-helmet";

function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Giffy</title>
      </Helmet>
      <div className="listGif">
        <Input />
        <h3>Ultima búsqueda</h3>
        <ListOfGifs gifs={gifs} />
        <LazyTrading />
      </div>
    </>
  );
}

export { Home };
