import React from "react";
import { Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Pins from "./components/Pin/PinIndex"
import PinDetail from "./components/Pin/PinShow/PinDetail";
import SplashPage from "./components/SplashPage";
import NewPinForm from "./components/Pin/NewPin/NewPinForm";


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
        <Route path="/create">
          <NewPinForm/>
        </Route>
        <Route path="/">
          <SplashPage/>
        </Route>
        </Switch>
    </>
  );
}

export default App;

