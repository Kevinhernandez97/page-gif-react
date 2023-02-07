import { Link } from "wouter";
import './Category.css'

  function Category ({ name, options = [] }) {
    return (
      <>
        <h3>{name}</h3>
        <div className="list-tendencia">
            {options.map((singleOption) => (
              <Link className="css-efctan" key={singleOption} to={`/search/${singleOption}`}>
                <ul className="css-efctan" key={singleOption}>
                  <li>
                    {singleOption}
                  </li>
                </ul>
              </Link>
            ))}
        </div>
      </>
      );
}


  export { Category }