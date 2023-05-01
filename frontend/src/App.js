import React from "react";
import { Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Pins from "./components/Pin/PinIndex"
import PinDetail from "./components/Pin/PinShow/PinDetail";
import SplashPage from "./components/SplashPage";
import NewPinForm from "./components/Pin/NewPin/NewPinForm";
import CreatedPage from "./components/UserProfile/CreatedPage";
import SavedPage from "./components/UserProfile/SavedPage";
import SplashOrHome from "./components/SplashOrHome";

function App() {

  return (
    <>
      <Navigation />
        <Switch>
        <Route path="/pins/:pinId">
          <PinDetail />
        </Route>
        <Route path="/create">
          <NewPinForm/>
        </Route>
        <Route path="/created">
          <CreatedPage/>
        </Route>
        <Route path="/saved">
          <SavedPage/>
        </Route>
        <Route path="/index" >
          <Pins/>
        </Route>
        <Route path="/">
          <SplashOrHome/>
        </Route>
        </Switch>
    </>
  );
}

export default App;

