import { compose, createStore } from 'redux';
import { products } from '../data.json';
function shoppingReducer(
  state = {
    products: [],
    activeSizes: [],
    activeOrder: 'default',
    cart: {},
    isCartOpen: false,
  },
  action
) {
  switch (action.type) {
    case 'sortByDefaul':
      return { ...state, products: [...products] };
    case 'sortBySize':
      return { ...state, activeSizes: [...action.payload] };
    case 'sortByPrice':
      return { ...state, activeOrder: action.payload };
    case 'addItems':
      return {
        ...state,
        cart: { ...action.payload.items },
        isCartOpen: action.payload.isCartOpen,
      };
    case 'decreaseItems':
      return { ...state, cart: { ...action.payload } };
    case 'removeFromCart':
      return { ...state, cart: { ...action.payload } };
    case 'toggleCart':
      return { ...state, isCartOpen: !state.isCartOpen };
    default:
      return { ...state, products: [...products] };
  }
}
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let store = createStore(shoppingReducer, enhancers);

export default store;
