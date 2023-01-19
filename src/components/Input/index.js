import React, {useState} from "react";
import { useLocation } from "wouter";
import './input.css';

function Input() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

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
        <input type="hidden" />
      </div>
    </form>
  );
}

export default React.memo(Input);
