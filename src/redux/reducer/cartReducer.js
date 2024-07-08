import { ADD_TO_CART, CHANGE_QUANTITY, REMOVE_CARTITEM } from '../constants/cartConstants';

const initialState = JSON.parse(localStorage.getItem('carts')) || [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      let newCart = [...state];
      let indexCartItem = newCart.findIndex((item) => item.product.id === action.payload.product.id);

      if (indexCartItem !== -1) {
        console.log(indexCartItem);
        console.log(newCart[indexCartItem]);
        // đã tồn tại trong giỏ hàng
        newCart[indexCartItem].quantity += action.payload.quantity;
        console.log(newCart[indexCartItem]);
      } else {
        // chưa tồn tại trong giỏ hàng
        newCart.push(action.payload);
      }
      console.log(newCart);
      localStorage.setItem('carts', JSON.stringify(newCart));
      return newCart;
    }
    case REMOVE_CARTITEM:
      break;
    case CHANGE_QUANTITY: {
      let newCart = [...state];
      let indexCartItem = newCart.findIndex((item) => item.id === action.payload.id);
      console.log(indexCartItem);
      if (indexCartItem !== -1) {
        newCart[indexCartItem].quantity = action.payload.quantity;
      }
      console.log(newCart);
      console.log(action);
      localStorage.setItem('carts', JSON.stringify(newCart));
      return newCart;
    }
    default:
      return state;
  }
};

export default cartReducer;
