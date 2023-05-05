import csrfFetch from "./csrf";

// action types
export const ADD_PIN_TO_BOARD = 'ADD_PIN_TO_BOARD';
export const REMOVE_PIN_FROM_BOARD = 'REMOVE_PIN_FROM_BOARD';

// action creators
export const addPinToBoard = (boardId, pinId) => ({
  type: ADD_PIN_TO_BOARD,
  payload: { pinId, boardId},
});

export const removePinFromBoard = (boardId, pinId) => ({
  type: REMOVE_PIN_FROM_BOARD,
  payload: { boardId, pinId },
});




export const createSave = (boardId, pinId) => async (dispatch) => {
  const response = await csrfFetch('/api/board_pins/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token")
    },
    body: JSON.stringify({
      board_pin: {
        board_id: boardId,
        pin_id: pinId,
      },
    }),
  });
  if (response.ok) {
    const data = await response.json();
    dispatch(addPinToBoard(boardId, pinId)); 
    }
    return response;

};

export const deleteSave =(boardId, pinId) => async(dispatch) => {
  const response = await csrfFetch(`/api/board_pins/${boardId}/${pinId}`, {
    method : 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ board_pin: { board_id: boardId, pin_id: pinId } }),
  });
  if (response.ok) {
    dispatch(removePinFromBoard(boardId, pinId));
  }

  return response;
}


// // reducer
// const initialState = {
//   // boardPins: [],
// };

// const boardPinReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PIN_TO_BOARD:
//       return { ...state, [action.payload.id]: action.payload };
//     case REMOVE_PIN_FROM_BOARD:
//       let newState = {...state};
//       delete newState[action.boardPin]
//       return newState
//     default:
//       return state;
//   }
// };

// export default boardPinReducer;

const initialState = {
  boardPins: [],
};

const boardPinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIN_TO_BOARD:
      return { ...state, [action.payload.id]: action.payload};
    case REMOVE_PIN_FROM_BOARD:
      let newState = {...state};
      delete newState[action.boardPin]
      return newState
    default:
      return state;
  }
};

export default boardPinReducer;
