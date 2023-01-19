import React from "react";
import { Redirect } from "wouter";
import Gif from "../../components/Gifs";
import useSingleGif from "../../components/hooks/useSingleGif";
import Spinner from "../../components/Spinner";
import { Helmet } from "react-helmet";

export default function Detail({ params }) {
  const {gif, isLoading, isError} = useSingleGif({id: params.id})
  const title = gif ? gif.title : ''

  if (isLoading)  {
    return (
    <>
      <Helmet>
        <title>Cargando...</title>
      </Helmet>
      <Spinner />
    </>
    )
  }
  if (isError) return <Redirect to='/404'/>
  if (!gif) return null

  return (
  <>
    <Helmet>
      <title>{title} || Giffy</title>
    </Helmet>
    <h3>{title}</h3>
    < Gif {...gif} />
  </>
    )
}
