import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import "./SaveButton.css"
const SavePinButton = (props) => {
    const { pin, userBoards} = props
    const dispatch = useDispatch();
    const [saved, setSaved] = useState(false);
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState('');
    
    // console.log(pin)
    // console.log(userBoards)
    

    // userBoards.forEach(board => {
    //     if (board.pins.includes(pin.id)) {
    //         selectedBoardPins = board.pins;
    //     }
    // })

    // useEffect(() => {
    //     let foundBoardPins = null;
    //     userBoards.forEach((board) => {
    //       if (board.pins.includes(pin.id)) {
    //         foundBoardPins = board.pins;
    //         setBoard(board);
    //       }
    //     });
    //     setSelectedBoardPins(foundBoardPins);
    //     setLoading(false);
    //   }, [board, pin, userBoards]);

    
    
    // useEffect(()=>{
    //     if (selectedBoardPins.length > 0) {
    //         setSaved(selectedBoardPins.includes(pin.id).toString());
    //     }
        
    // }, [boardId, pin])

   
    
    console.log(board.id, 'boardId')
    const handleClick = (e) => {
        e.preventDefault();
        if (saved){
            setSaved(false)
        }else{
            setSaved(true)
        }
    }
    
    

    return (
        <div onClick={handleClick} className={`save-pin-button ${saved ? "saved-mode" : "unsaved-mode"}`}>
            <h1 className="save-button-word">
                {saved ? "Saved" : "Save"}
            </h1>
        </div>
    )

}

export default SavePinButton
