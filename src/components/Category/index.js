import { Link } from "wouter";
import './Category.css'

  function Category ({ name, options = [] }) {
    return (
      <>
        <h3>{name}</h3>
        <div className="list-tendencia">
            {options.map((singleOption) => (
              <ul className="css-efctan" key={singleOption}>
                <li>
                    <Link className="css-efctan" key={singleOption} to={`/search/${singleOption}`}>
                  {singleOption}
                    </Link>
                </li>
              </ul>
            ))}
        </div>
      </>
      );
}


  export { Category }