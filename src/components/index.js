import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.value}</span>
        <button onClick={this.props.onIncrement}>Increment</button>
        <button onClick={this.props.onDecrement}>Decrement</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  value: 0
}

Counter.propTypes = {
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
}

export default Counter;
