import { Link } from "wouter";
import './Category.css'

  function Category ({ name, options = [] }) {
    return (
      <>
        <h3>{name}</h3>
        <div className="list-tendencia">
            {options.map((singleOption) => (
              <section key={singleOption}>
                    <Link key={singleOption} to={`/search/${singleOption}`}>
                  {singleOption}
                    </Link>
                </section>
            ))}
        </div>
      </>
      );
}


  export { Category }