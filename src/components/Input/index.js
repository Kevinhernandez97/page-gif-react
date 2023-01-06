import { useState } from "react";
import { useLocation } from "wouter";

function Input() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input">
        <input
          onChange={handleChange}
          className="input2"
          type="search"
          placeholder="Buscar GIF's"
          value={keyword}
        />
        <input type="hidden" />
      </div>
      <button class="boton" type="submit">
        <span class="svg">
          <svg viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </span>
      </button>
    </form>
  );
}

export { Input };