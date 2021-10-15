import React from 'react';
import Aside from './Aside';
import Products from './Products';
import Cart from './Cart';
import { addItems } from '../store/action';
import { connect } from 'react-redux';
class App extends React.Component {
  addToCart = (index) => {
    let cartItems = this.props.cart;
    let keys = Object.keys(cartItems);
    if (keys.includes(String(index))) {
      cartItems[index] = Number(cartItems[index]) + 1;
    } else {
      cartItems[index] = 1;
    }
    this.props.dispatch(addItems(cartItems, true));
  };

  render() {
    return (
      <main className="flex container">
        <Aside />
        <Products addToCart={this.addToCart} />
        <Cart addToCart={this.addToCart} />
      </main>
    );
  }
}
function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
export default connect(mapStateToProps)(App);
