import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <BrowserRouter>
      <SavedList list={savedList} />
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        {/* <Route path="/movies/:id">
          <Movie />
        </Route> */}
        <Route
          exact
          path="/movies/:id"
          render={props => <Movie {...props} />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
