import React from "react";
import Gif from "../../components/Gifs";
import { useGlobalGifs } from "../../components/hooks/useGlobalGifs";

function Detail({ params }) {
  const { gifs } = useGlobalGifs();

  const gif = gifs.find((singleGif) => singleGif.id === params.id);
  return <Gif {...gif} />;
}

export { Detail };
