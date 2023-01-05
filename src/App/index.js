import "./App.css";
import { Link, Route } from "wouter";
import { ListOfGifs } from "../components/ListOfGifs";
import { Home } from "../pages/Home";
import { Detail } from "../pages/Detail";

function App() {

  return (
    <div className="App">
      <section className="App-content">
          <Link to="/">
            <h1 className="title">GIF's</h1>
          </ Link>
          <Route
          component={Home}
          path="/"
          />
          <Route 
          component={ListOfGifs}
          path="/search/:keyword"  
          />
          <Route
          component={Detail}
          path='/gif/:id'
          />
      </section>
    </div>
  );
}

export { App };
