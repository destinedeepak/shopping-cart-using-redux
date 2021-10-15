import React from 'react';
import Lodash from 'lodash';
import { connect } from 'react-redux';
import { sortBySize } from '../store/action';
function Aside(props) {
  let sizesToDisplay = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqSizes = Lodash.uniq(sizesToDisplay);
  let activeSizes = props.activeSizes;

  function handleSortBySize(size) {
    console.log(size);
    let sizes = props.activeSizes;
    if (!sizes.includes(size)) {
      sizes.push(size);
    } else {
      sizes.splice(sizes.indexOf(size), 1);
    }
    props.dispatch(sortBySize(sizes));
  }

  return (
    <section className="flex-15 mr-2">
      <h3 className="font-medium text-lg">Sizes:</h3>
      <div className="flex flex-wrap mt-6">
        {uniqSizes.map((size, index) => (
          <div key={index}>
            <label
              name={size + index}
              value={size}
              onClick={() => {
                handleSortBySize(size);
              }}
              className={
                activeSizes.indexOf(size) !== -1
                  ? 'rounded-full inline-block text-xs font-light w-9 h-9 leading-9 text-center mr-2 mb-4 bg-black text-white'
                  : 'rounded-full inline-block text-xs font-light bg-gray-200 w-9 h-9 leading-9 text-center mr-2 mb-4 hover:bg-gray-400'
              }
            >
              {size}
            </label>
          </div>
        ))}
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    products: state.products,
    activeSizes: state.activeSizes,
  };
}
export default connect(mapStateToProps)(Aside);
