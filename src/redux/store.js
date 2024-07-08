import { combineReducers, createStore } from 'redux';

import cartReducer from './reducer/cartReducer';

export default createStore(
  combineReducers({
    carts: cartReducer,
  })
);
