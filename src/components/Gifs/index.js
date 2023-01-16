import "./Gifs.css";
import React from "react";
import { Link } from "wouter";

function Gif({ title, url, id }) {
  return (
    <Link to={`/gif/${id}`} className="Gif">
      <img src={url} alt={title} />
    </Link>
  );
}

export default React.memo(Gif);
