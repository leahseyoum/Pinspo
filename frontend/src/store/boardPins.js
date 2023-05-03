import csrfFetch from "./csrf";

// action types
export const ADD_PIN_TO_BOARD = 'ADD_PIN_TO_BOARD';
export const REMOVE_PIN_FROM_BOARD = 'REMOVE_PIN_FROM_BOARD';

// action creators
export const addPinToBoard = (boardId, pinId) => ({
  type: ADD_PIN_TO_BOARD,
  payload: { pinId, boardId },
});

export const removePinFromBoard = (pinId, boardId) => ({
  type: REMOVE_PIN_FROM_BOARD,
  payload: { pinId, boardId },
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
    dispatch(addPinToBoard(boardId, pinId));
    }
    return response;

};


// reducer
const initialState = {
  boardPins: [],
};

const boardPinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIN_TO_BOARD:
      return {
        ...state,
        boardPins: [
          ...state.boardPins,
          {
            pinId: action.payload.pinId,
            boardId: action.payload.boardId,
          },
        ],
      };
    case REMOVE_PIN_FROM_BOARD:
      return {
        ...state,
        boardPins: state.boardPins.filter(
          (boardPin) =>
            boardPin.pinId !== action.payload.pinId ||
            boardPin.boardId !== action.payload.boardId
        ),
      };
    default:
      return state;
  }
};

export default boardPinReducer;
