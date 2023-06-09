import UserInfoHeader from "./UserInfoHeader";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./CreatedPage.css";
import PinIndex from "../Pin/PinIndex/PinView";
import CreateBoardModal from "../CreateBoardModal";

function CreatedPage() {
    const currentUser = useSelector(state => state.session.user);
    const [pins, setPins] = useState([]);

    useEffect(() => {
    if (currentUser) {
        fetch(`/api/pins/`)
        .then(response => response.json())
        .then(data => setPins(data));
    }
    }, [currentUser]);

    const arrayPins = Object.values(pins);
    const userPins = arrayPins.filter((pin) => pin.userId === currentUser.id)
   
    return (
        <>
            <div className="created-page-container">

                <UserInfoHeader/>
                <div className="user-pins">
                    {userPins.map((pin) => (
                            <PinIndex className="pin" key={pin.id} pin={pin} create={'create'}/>
                    ))}
                </div>
                <div className='create-board-pin-container'>
                    <CreateBoardModal className='create-board-pin'/>
                </div>
            </div>
        </>
    )
}

export default CreatedPage;