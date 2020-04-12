import {
  CHANGE_QUANTITY,
  CHANGE_ROUTE,
  ADD_USERINFO,
  CHANGE_ORDER_STATUS,
  GET_DATA,
} from '../constants/action-types';

const initialState = {
  products: [],
  currentRoute: '/',
  userInfo: {},
  orderStatus: 'PENDING',
};

function rootReducer(state = initialState, action) {
  if (action.type === GET_DATA) {
    return Object.assign({}, state, {
      products: state.products.concat(action.payload),
    });
  }

  if (action.type === CHANGE_QUANTITY) {
    return Object.assign({}, state, {
      products: state.products.map((product) => {
        if (product.sku === action.payload.sku) {
          return {
            ...product,
            quantity: action.payload.newQuantity,
          };
        }
        return {
          ...product,
        };
      }),
    });
  }

  if (action.type === CHANGE_ROUTE) {
    return Object.assign({}, state, {
      currentRoute: action.payload,
    });
  }

  if (action.type === ADD_USERINFO) {
    return Object.assign({}, state, {
      userInfo: action.payload,
    });
  }

  if (action.type === CHANGE_ORDER_STATUS) {
    return Object.assign({}, state, {
      orderStatus: action.payload,
    });
  }

  return state;
}

export default rootReducer;
