import React from 'react';
import Product from './Product';
import { products } from '../data.json';
class Products extends React.Component {
  render() {
    let { activeSizes, activeOrder } = this.props.state;
    let productsToRender;
    let productsBySize = products.filter((product) => {
      for (let index = 0; index < products.length; index++) {
        if (activeSizes.indexOf(product.availableSizes[index]) !== -1) {
          return product;
        }
      }
    });
    if (activeSizes.length !== 0) {
      productsToRender = productsBySize;
    } else {
      productsToRender = products;
    }
    if (activeOrder === 'l-h') {
      productsToRender = productsToRender.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (activeOrder === 'h-l') {
      productsToRender = productsToRender.sort((a, b) => {
        return b.price - a.price;
      });
    }

    return (
      <section className="flex-80 pt-2">
        <div className="flex justify-between">
          <p className="text-sm font-light">
            {productsToRender.length} Product(s) found
          </p>
          <div className="flex items-center">
            <h3 className="font-light mr-2">Order by</h3>
            <select
              name=""
              id=""
              className="font-light border p-1.5 hover:bg-gray-400"
              onChange={this.props.handleSortByPrice}
            >
              <option value="default" >Select</option>
              <option value="l-h">Lowest to highest</option>
              <option value="h-l">Highest to lowest </option>
            </select>
          </div>
        </div>
        <ul className="flex pt-5 flex-wrap">
          {productsToRender.map((product,index) => (
            <Product product={product} index={index} addToCart={this.props.addToCart} key={index}/>
          ))}
        </ul>
      </section>
    );
  }
}

export default Products;
