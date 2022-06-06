import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Filter from "./Filter";
import Home from "./Home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/filter">
            <Filter />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
