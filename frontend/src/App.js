import React from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Pins from "./components/PinIndex"


function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/" >
            <Pins/>
          </Route>
        </Switch>
    </>
  );
}

export default App;