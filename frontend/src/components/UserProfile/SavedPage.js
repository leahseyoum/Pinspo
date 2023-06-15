import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import CreatedPage from "./CreatedPage";
import BoardIndex from "../Boards/BoardsIndex";
import CreateBoardModal from "../CreateBoardModal";
import { useEffect } from "react";


function SavedPage() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <div className="userInfoHeaderContainer">
                <UserInfoHeader/>
            </div>
            
            <div className="save-page-boards-container">
                <BoardIndex/>
            </div>
            <div className='create-board-pin-container'>
                <CreateBoardModal className='create-board-pin'/>
            </div>
        </>
    )
}

export default SavedPage;