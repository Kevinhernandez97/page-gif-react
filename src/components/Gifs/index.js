import "./Gifs.css";
import React from "react";
import { Link } from "wouter";

function Gif({ title, url, id }) {
  return (
    <picture className="container-listOfGifs">
      <Link to={`/gif/${id}`} className="Gif">
        <img src={url} alt={title} />
      </Link>
    </picture>
  );
}

export default React.memo(Gif);
