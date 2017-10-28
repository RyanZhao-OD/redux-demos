import React, { Component } from 'react';


class Counter extends Component {
  render() {
    console.log('render-----');
    const {val, onIncrease, onDecrease} = this.props;
    console.log(this.props);
    return (
        <div>
            <p>value:{val}</p>
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    );
  }
}

export default Counter;
