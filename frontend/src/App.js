import React from "react";
import { Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Pins from "./components/PinIndex"
import PinDetail from "./components/PinIndex/PinDetail";


function App() {

  return (
    <>
      <Navigation />
        <Switch>
        <Route path="/pins/:pinId">
          <PinDetail />
        </Route>
        <Route exact path="/" >
          <Pins/>
        </Route>
        </Switch>
    </>
  );
}

export default App;

