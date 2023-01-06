import "./App.css";
import { Link, Route } from "wouter";
import { SearchResults } from "../pages/SearchResults"
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";
import { Context } from "../context/StaticContext";
import { GifsContextProvider } from "../context/GifsContext";

function App() {

  return (
  <Context.Provider value={
  {
    name:'kevin',
    suscribiteAlCanal: true
  }
}>
    <div className="App">
      <section className="App-content">
          <Link to="/">
            <h1 className="title">GIF's</h1>
          </ Link>
          <GifsContextProvider>
            <Route
            component={Home}
            path="/"
            />
            <Route 
            component={SearchResults}
            path="/search/:keyword"  
            />
            <Route
            component={Detail}
            path='/gif/:id'
            />
          </GifsContextProvider>
      </section>
    </div>
  </Context.Provider> 
  );
}

export { App };
