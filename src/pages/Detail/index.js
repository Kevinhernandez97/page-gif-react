import React from "react";
import Gif from "../../components/Gifs";
import useSingleGif from "../../components/hooks/useSingleGif";
import Spinner from "../../components/Spinner";

export default function Detail({ params }) {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})

  if (isLoading) return <Spinner />
  if (!gif) return null

  return <Gif {...gif} />;
}
