import React, {Component} from 'react';
import Link from '../components/Link';
import {connect} from 'react-redux';
import {setVisibilityFilterAction} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClickFilter(filter) {
            dispatch(setVisibilityFilterAction(filter));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Link);