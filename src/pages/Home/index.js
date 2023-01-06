import { Input } from "../../components/Input";
import { Link } from "wouter";
import "./Home.css";
import { ListOfGifs } from "../../components/ListOfGifs";
import { useGifs } from "../../components/hooks/useGifs";

const POPULAR_GIFS = [
  "Matrix",
  "Cr7",
  "HarryPotter",
  "Colombia",
  "Brasil",
  "Annita",
  "Badbunny",
  "Coding",
  "Rosado",
  "Comida",
  "Futbol",
  "Instagram",
  "Bicicletas",
];

function Home() {
  const { loading, gifs } = useGifs();

  return (
    <div className="listGif">
      <Input />
      <h3>Ultima búsqueda</h3>
      <ListOfGifs gifs={gifs} />
      <h2 className="subTitle">Most popular</h2>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>{popularGif}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Home };
