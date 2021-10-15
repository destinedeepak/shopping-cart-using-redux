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
    case 'sortBySize':
      return { ...state, activeSizes: [...action.payload] };
    default:
      return { ...state, products: [...products] };
  }
}
const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
let store = createStore(shoppingReducer, enhancers);

export default store;
