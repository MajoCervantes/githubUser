//Router
import { BrowserRouter, Switch, Route } from "react-router-dom";

//Components
import NavBar from "./components/custom/NavBar/NavBar";
import Home from "./views/Home/Home";
import Followers from "./views/Followers/Followers";
import Repos from "./views/Repos/Repos";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>

          <Route path="/" exact >
            <Home />
          </Route>

          <Route path="/followers/:user" exact >
            <Followers />
          </Route>

          <Route path="/repos/:user" exact >
            <Repos />
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
