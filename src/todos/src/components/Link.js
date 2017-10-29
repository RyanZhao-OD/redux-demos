import React, {Component} from 'react';

export default class Link extends Component {
    render() {
        const {active, children} = this.props;
        const {onClickFilter, filter} = this.props;
        if (active) {
            return (
                <span style={{
                    marginRight: '10px'
                }}>{children}</span>
            );
        }
        return (
            <a href="#" onClick={event => {
                event.preventDefault();
                onClickFilter(filter);
            }} style={{
                marginRight: '10px'
            }}>{children}</a>
        );
    }
}