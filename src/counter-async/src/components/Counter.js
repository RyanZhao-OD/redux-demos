import React, { Component } from 'react';

class Counter extends Component {

    calculate(type) {
        const {onAdd, onMinus} = this.props;
        const valInputDom = this.refs.valInput;
        const val = Number(valInputDom.value.trim());
        valInputDom.value = 0;
        if ('add' === type) {
            onAdd(val);
        } else if ('minus' === type) {
            onMinus(val);
        }
    }

    render() {
        console.log(this.props);
        const {status, val, onIncrease, onDecrease} = this.props;
        return (
            <div>
                <p>staus: {status}</p>
                <p>value:{val}</p>
                <button onClick={() => {
                    onIncrease(val);
                }}>+</button>
                <button onClick={onDecrease}>-</button>
                <p><input ref="valInput" defaultValue={0} /></p>
                <button onClick={event => {
                    this.calculate('add');
                }}>+</button>
                <button onClick={event => {
                    this.calculate('minus');
                }}>-</button>
            </div>
        );
    }
}

export default Counter;
