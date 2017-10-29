import React, { Component } from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increaseAction, decreaseAction} from '../actions';

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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
