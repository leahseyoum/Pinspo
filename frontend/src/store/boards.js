import csrfFetch from "./csrf";

const RETRIEVE_BOARDS = '/boards/retrieveBoards';
const REMOVE_BOARD = '/boardS/removeBoard';
const RETRIEVE_BOARD = '/boards/retrieveBoard';

const retrieveBoards = (boards) => ({
    type: RETRIEVE_BOARDS,
    payload: boards
})

const retrieveBoard = (board) => ({
    type: RETRIEVE_BOARD,
    payload: board
})

const removeBoard = (boardId) => ({
    type: REMOVE_BOARD,
    payload: boardId
})

export const displayBoards = (userId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/boards`);
    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveBoards(data));
    }
    return response;
}

export const displayBoard = (userId, boardId) => async dispatch => {
    const response = await csrfFetch(`/api/users/${userId}/boards/${boardId}`);
    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveBoard(data));
    }
    return response;
}

export const createBoard = board => async (dispatch) => {
    const response = await csrfFetch(`/api/boards/`, {
        method: 'POST',
        headers: {
            "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token")
        },
        body: (board)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveBoard(data));
    }
    return response;
};

export const updateBoard = formData => async(dispatch) => {
    const boardId = formData.get("board[id]");
    const userId = formData.get("board[userId]");
    const response = await csrfFetch(`/api/users/${userId}/boards/${boardId}`, {
        method: 'PATCH',
        headers: {
            "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token"),
        },
        body: (formData)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveBoard(data));
    };

    return response;
}

export const destroyBoard = boardId => async(dispatch) => {
    const response = await csrfFetch(`/api/boards/${boardId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(removeBoard(boardId))
    }
    return response;
}



const boardsReducer = (state={}, action) => {
    switch (action.type){
        case RETRIEVE_BOARDS:
            return { ...action.payload };
        case RETRIEVE_BOARD:
            const board = action.payload;
            let nextState = {[board.id]: {...board}};
            return nextState;
        case REMOVE_BOARD:
            const boardId = action.payload;
            const newState = {...state};
            delete newState[boardId];
            return newState;
        default:
            return state;
    }
}

export default boardsReducer