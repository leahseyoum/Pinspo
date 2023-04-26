import React from "react";
import { Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Pins from "./components/PinIndex"
import PinDetail from "./components/PinIndex/PinDetail";
import SplashPage from "./components/SplashPage";


function App() {

  return (
    <>
      <Navigation />
        <Switch>
        <Route path="/pins/:pinId">
          <PinDetail />
        </Route>
        <Route path="/index" >
          <Pins/>
        </Route>
        <Route path="/">
          <SplashPage/>
        </Route>
        </Switch>
    </>
  );
}

export default App;

