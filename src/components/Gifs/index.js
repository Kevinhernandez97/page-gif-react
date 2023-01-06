import "./Gifs.css";
import { Link } from "wouter";

function Gif({ title, url, id }) {
  return (
    <Link to={`/gif/${id}`} className="Gif">
      <img src={url} alt={title} />
    </Link>
  );
}

export { Gif };
