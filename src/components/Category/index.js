import { Link } from "wouter";

  function Category ({ name, options = [] }) {
    return (
        <section>
            <h3>{name}</h3>
            {options.map((singleOption, index) => (
                <section>
                    <Link to={`/search/${singleOption}`}>
                  {singleOption}
                    </Link>
                </section>
            ))}
        </section>
      );
}


  export { Category }