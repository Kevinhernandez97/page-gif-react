import React from "react";
import { Redirect } from "wouter";
import Gif from "../../components/Gifs";
import useSingleGif from "../../components/hooks/useSingleGif";
import Spinner from "../../components/Spinner";
import useSEO from "../../components/hooks/useSEO";

export default function Detail({ params }) {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})
  const title = gif ? gif.title : ''

  useSEO({ description : `Detail of ${title}`, title })
  
  if (isLoading) return <Spinner />
  if (isError) return <Redirect to='/404'/>
  if (!gif) return null

  return (
  <>
    <h3>{title}</h3>
    < Gif {...gif} />
  </>
    )
}
