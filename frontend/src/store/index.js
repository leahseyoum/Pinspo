import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import pinsReducer from './pins'
import sessionReducer from './session';
import usersReducer from './users';
import boardsReducer from './boards';
import boardPinReducer from './boardPins';


const rootReducer = combineReducers({
  session: sessionReducer,
  pins: pinsReducer,
  users: usersReducer,
  boards: boardsReducer,
  boardPin: boardPinReducer
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
