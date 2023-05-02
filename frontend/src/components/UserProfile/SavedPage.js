import React from "react";
import UserInfoHeader from "./UserInfoHeader";
import CreatedPage from "./CreatedPage";
import BoardIndex from "../Boards/BoardsIndex";

function SavedPage() {
    return (
        <>
            <UserInfoHeader/>
            <BoardIndex/>
        </>
    )
}

export default SavedPage;