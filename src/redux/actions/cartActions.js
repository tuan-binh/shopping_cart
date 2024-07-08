import { ADD_TO_CART, CHANGE_QUANTITY, REMOVE_CARTITEM } from '../constants/cartConstants';

export const ACTION_ADD_TO_CART = (payload) => ({ type: ADD_TO_CART, payload });

export const ACTION_REMOVE_CARTITEM = (payload) => ({ type: REMOVE_CARTITEM, payload });

export const ACTION_CHANGE_QUANTITY = (payload) => ({ type: CHANGE_QUANTITY, payload });
