import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import "./App.css";
import NavBar from "./components/Navbar";
import Moviepage from "./pages/MoviePage";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
        <Route path="/movie/:movieId" component={Moviepage}></Route>
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}

export default App;
