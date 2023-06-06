import csrfFetch from "./csrf";

const RETRIEVE_PINS = 'pins/retrievePins';
const RETRIEVE_SINGLE_PIN = 'pins/retrieveSinglePin';
const REMOVE_PIN = 'pins/removePin';
const REMOVE_PINS = 'pins/removePins';

export const removePins = () => ({
    type: REMOVE_PINS
})

const retrievePins = (pins) => ({
    type: RETRIEVE_PINS,
    payload: pins
});

const retrieveSinglePin = (pin) => ({
    type:RETRIEVE_SINGLE_PIN,
    payload: pin
});

const removePin = (pinId) => ({
    type: REMOVE_PIN,
    payload: pinId
})

export const getPins = state => {
    return state?.pins ? Object.values(state.pins) : [];
}

export const displayPins = () => async dispatch => {
    const response = await csrfFetch('/api/pins');
    const data = await response.json();
    dispatch(retrievePins(data));
    return response;
}

export const displayPin = (pinId) => async dispatch => {
    const response = await csrfFetch(`/api/pins/${pinId}`);
    const data = await response.json();
    dispatch(retrieveSinglePin(data));
    return response;
}


export const createPin = pin => async (dispatch) => {
    const response = await csrfFetch(`/api/pins/`, {
        method: 'POST',
        headers: {
            "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token")
        },
        body: (pin)
    });
    if (response.ok) {
        const pin = await response.json();
        return dispatch(retrieveSinglePin(pin));
    }
    // return response;
};

export const destroyPin = pinId => async(dispatch) => {
    const response = await csrfFetch(`/api/pins/${pinId}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        dispatch(removePin(pinId))
    }
    return response;
 }

export const updatePin = pin => async(dispatch) => {
    const response = await csrfFetch(`/api/pins/${pin.id}`, {
        method: 'PATCH',
        headers: {
            "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token")
        },
        body: (pin) 
    });

    if (response.ok) {
        const post = await response.json();
        dispatch(retrieveSinglePin(pin));
    };

    return response;
}

export const getSearchPins = (query) => async(dispatch) => {
    const response = await fetch(`/api/pins/search?query=${query}`,{
        data: {
            query: (query)
        }
    });
    if (response.ok){
        const pins = await response.json();
        console.log(pins,"search")
        dispatch(retrievePins(pins))
    }
}

const initialState = {
    pins: null,
    pin: null
  }

const pinsReducer = (state = initialState, action) => {
    switch(action.type) {
        case RETRIEVE_PINS:{
            return {...state, pins: action.payload};
        }
        case RETRIEVE_SINGLE_PIN: {

            const pin = action.payload;
            let nextState = {...state, pin: pin};
            return nextState;
        }
        case REMOVE_PIN: {
            const pinId = action.payload;
            const newState = {...state};
            delete newState[pinId];
            return newState;
        }
        case REMOVE_PINS: {
            return {};
        } 
        default: 
            return state;
    }
}

export default pinsReducer;