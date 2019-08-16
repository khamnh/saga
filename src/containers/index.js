import { connect } from 'react-redux';
import Counter from '../components';
import { increment, decrement } from '../actions';

const mapStateToProps = (state) => {
  return {
    value: state
  }
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
