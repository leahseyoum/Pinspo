import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import CreatedPage from "./CreatedPage";
import BoardIndex from "../Boards/BoardsIndex";
import CreateBoardModal from "../CreateBoardModal";

function SavedPage() {
    return (
        <>
            <UserInfoHeader/>
            <BoardIndex/>
            <div className='create-board-pin-container'>
                <CreateBoardModal className='create-board-pin'/>
            </div>
        </>
    )
}

export default SavedPage;