import React, {useReducer, useState} from "react";
import { useLocation } from "wouter";
import './input.css';

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const reducer = (state, param) => {
  return state
}

function Input({ initialKeyword = '', initialRating = 'g'}) {

  const [keyword, setKeyword] = useState(decodeURIComponent(initialKeyword))
  const [path, pushLocation] = useLocation()
  const [rating, setRating] = useState(initialRating)

  const [state, dispatch] = useReducer(reducer, {
    kewyword: decodeURIComponent(initialKeyword),
    rating: initialRating
  })


  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleChangeRating = (evt) => {
    setRating(evt.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input">
      <button className="boton" type="submit">
        <span className="svg">
          Buscar
        </span>
      </button>
        <input
          onChange={handleChange}
          className="input2"
          type="search"
          placeholder="Search a gif here..."
          value={keyword}
        />
        <select onChange={handleChangeRating} value={rating}>
          <option disabled>Rating type</option>
          {RATINGS.map(rating => (
            <option key={rating}>{rating}</option>
            ))}
        </select>
      </div>
      </form>
  );
}

export default React.memo(Input);
