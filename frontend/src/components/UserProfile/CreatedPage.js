import UserInfoHeader from "./UserInfoHeader";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./CreatedPage.css";
import PinIndex from "../Pin/PinIndex/PinView";
import CreateBoardModal from "../CreateBoardModal";
import { useParams } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import SavedPage from "./SavedPage";
import { useLocation } from "react-router-dom";

function CreatedPage() {
  const location = useLocation();
  const path = location.pathname;
  
  const userParams = useParams();
  const userId = parseInt(userParams.userId);
  const currentUser = useSelector((state) => state.session.user);
  const [pins, setPins] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (currentUser) {
      fetch(`/api/pins/`)
        .then((response) => response.json())
        .then((data) => setPins(data));
    }
  }, [currentUser]);

  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, [userId]);
  
  let arrayPins;
  let userPins;
  if (pins) {
    arrayPins = Object.values(pins);
    userPins = arrayPins.filter((pin) => pin.userId === userId);
  }

  return (
    <>
      <UserInfoHeader />
      {path.includes("created") ? (
        pins ? (
          <div className="created-page-container">
            {userPins.length > 0 ? (
              <div className="user-pins">
                {userPins.map((pin) => (
                  <PinIndex
                    className="pin"
                    key={pin.id}
                    pin={pin}
                    create={"create"}
                  />
                ))}
              </div>
            ) : (
              <div className="no-pins-message">
                {user.id === currentUser.id
                  ? "You haven't created any pins yet"
                  : `${user?.username} hasn't created any pins yet`}
              </div>
            )}
            <div className="create-board-pin-container">
              <CreateBoardModal className="create-board-pin" />
            </div>
          </div>
        ) : (
          <Spinner />
        )
      ) : (
        <SavedPage />
      )}
    </>
  );
}

export default CreatedPage;
