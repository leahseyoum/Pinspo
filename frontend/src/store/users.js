import csrfFetch from "./csrf";

const RETRIEVE_USER = 'users/retrieveUser';

const retrieveUser = (user) => {
    return {
        type: RETRIEVE_USER,
        payload: user
    }
};

export const updateUser = (formData) => async(dispatch) => {
    const userId = formData.get('user[id]')
    const response = await csrfFetch(`/api/users/${userId}`, {
        method: 'PATCH',
        headers: {
            "X-CSRF-Token": sessionStorage.getItem("X-CSRF-Token"),
        },
        body: (formData)
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(retrieveUser(data));
    };

    return response;
}

const usersReducer = (state = {}, action) => {
    switch(action.type) {
        case RETRIEVE_USER:{
            return {...state, user: action.payload}
        }
        default: 
            return state;
    }
}

export default usersReducer;