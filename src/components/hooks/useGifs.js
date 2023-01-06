import { getGifs } from "../../services/getGifs";
import { useContext, useState, useEffect } from "react";
import { Context1 } from "../../context/GifsContext";

function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(Context1);

  useEffect(
    function () {
      setLoading(true);

      const keyWordToUse =
        keyword || localStorage.getItem("lastKeyword") || "random";

      getGifs({ keyword: keyWordToUse }).then((gifs) => {
        setGifs(gifs);
        setLoading(false);
        localStorage.setItem("lastKeyword", keyword);
      });
    },
    [keyword, setGifs]
  );

  return { loading, gifs };
}

export { useGifs };
