import { useContext } from "react";
import { Context1 } from "../../context/GifsContext";

function useGlobalGifs() {
  const gifs = useContext(Context1);
  return gifs;
}

export { useGlobalGifs };
