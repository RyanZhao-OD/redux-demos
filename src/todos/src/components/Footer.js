import React, { Component } from 'react';
import LinkContainer from '../containers/LinkContainer';

import {FILTER_SHOW_ALL, FILTER_SHOW_COMPLETED, FILTER_SHOW_ACTIVE} from '../constants';

export default class Footer extends Component {
    render() {
        return (
            <div>
                <LinkContainer filter={FILTER_SHOW_ALL}>show_all</LinkContainer>
                <LinkContainer filter={FILTER_SHOW_COMPLETED}>completed</LinkContainer>
                <LinkContainer filter={FILTER_SHOW_ACTIVE}>active</LinkContainer>
            </div>
        );
    }
}