import csrfFetch from "./csrf";

const RETRIEVE_PINS = 'pins/retrievePins';
const RETRIEVE_SINGLE_PIN = 'pins/retrieveSinglePin'


const retrievePins = (pins) => ({
    type: RETRIEVE_PINS,
    payload: pins
});

const retrieveSinglePin = (pin) => ({
    type:RETRIEVE_SINGLE_PIN,
    payload: pin
});

export const displayPins = () => async dispatch => {
    const response = await csrfFetch('/api/pins');
    const data = await response.json();
    dispatch(retrievePins(data));
    return response;
}

export const displayPin = (pinId) => async dispatch => {
    const response = await csrfFetch(`/api/pins/${pinId}`)
    const data = await response.json();
    dispatch(retrieveSinglePin(data));
    return response;
}

const initialState = {
    pins: null,
    pin: null
  }

const pinsReducer = (state = initialState, action) => {
    switch(action.type) {
        case RETRIEVE_PINS:
            return {...state, pins: action.payload}
        case RETRIEVE_SINGLE_PIN:
            let nextState = {...state, pin: action.payload}
            return nextState
        default: 
            return state;
    }
}

export default pinsReducer;