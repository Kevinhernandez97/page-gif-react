import { Link } from "wouter";

  function Category ({ name, options = [] }) {
    return (
        <div>
            <h3>{name}</h3>
            {options.map((singleOption) => (
                <section>
                    <Link to={`/search/${singleOption}`}>
                  {singleOption}
                    </Link>
                </section>
            ))}
        </div>
      );
}


  export { Category }