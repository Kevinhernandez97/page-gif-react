import './Gifs.css'
import { Link } from "wouter";

function Gif ({title, url, id }) {
    return (
        <Link to={`/gif/${id}`} className="Gif">
              <h4>{title}</h4>
              <img src={url} alt={title} />
        </Link>
    )
}

export { Gif }