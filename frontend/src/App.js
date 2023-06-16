import React from "react";
import { Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import Pins from "./components/Pin/PinIndex"
import PinDetail from "./components/Pin/PinShow/PinDetail";
import SplashPage from "./components/SplashPage";
import NewPinForm from "./components/Pin/NewPin/NewPinForm";
import CreatedPage from "./components/UserProfile/CreatedPage";
import SplashOrHome from "./components/SplashOrHome";
import EditUserForm from "./components/UserProfile/EditUserForm";
import BoardIndex from "./components/Boards/BoardsIndex";
import BoardShow from "./components/Boards/BoardShow";
import SearchPins from "./components/SearchBar/SearchIndex";


function App() {

  return (
    <>
      <Navigation />
        <Switch>
          <Route path ='/search/:query'>
            <SearchPins/>
          </Route>
          <Route path ="/users/:userId/saved">
            <CreatedPage/>
          </Route>
          <Route path ="/users/:userId/created">
            <CreatedPage/>
          </Route>
          <Route path ='/users/:userId/boards'>
            <BoardIndex/>
          </Route>
          <Route path ="/boards/:boardId">
            <BoardShow />
          </Route>
          <Route path ='/edit-user'>
            <EditUserForm/>
          </Route>
          <Route path="/pins/:pinId">
            <PinDetail />
          </Route>
          <Route path ="/create">
            <NewPinForm/>
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

