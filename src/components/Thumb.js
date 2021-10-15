import { connect } from 'react-redux';
import { toggleCart } from '../store/action';

function Thumb(props) {
  return (
    <button
      className="text-3xl text-white bg-black p-2 w-16 h-16 text-center leading-16 absolute top-0 right-0"
      onClick={() => {
        props.dispatch(toggleCart());
      }}
    >
      <i className="fas fa-shopping-cart"></i>
    </button>
  );
}

export default connect()(Thumb);
