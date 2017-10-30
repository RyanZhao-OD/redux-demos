import React, { Component } from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increaseAction, decreaseAction, addAction, minusAction} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
        val: state
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onIncrease() {
            dispatch(increaseAction());
        },
        onDecrease() {
            dispatch(decreaseAction());
        },
        onAdd(val) {
            dispatch(addAction(val));
        },
        onMinus(val) {
            dispatch(minusAction(val));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
