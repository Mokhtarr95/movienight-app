import "./App.css";

import Header from "./Components/Header/Header";
import SimpleBottomNavigation from "./Components/MainNav/MainNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Trending from "./Pages/Trending/Trending";
import Series from "./Pages/Series/Series";
import Movies from "./Pages/Movies/Movies";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </Router>
  );
}

export default App;
