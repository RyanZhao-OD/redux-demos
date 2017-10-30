import React, { Component } from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increasePostRequestAction} from '../actions/increasePostAction';

const mapStateToProps = (state, ownProps) => {
    return {
        val: state.val,
        status: state.status
    };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onIncrease(currentVal) {
        console.log('currentVal-----');
        console.log(currentVal);
        dispatch(increasePostRequestAction(currentVal));
    },
    // onDecrease() {
    //     dispatch(decreaseAction());
    // },
    // onAdd(val) {
    //     dispatch(addAction(val));
    // },
    // onMinus(val) {
    //     dispatch(minusAction(val));
    // }
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
