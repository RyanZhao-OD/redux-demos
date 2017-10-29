import React, { Component } from 'react';
import {addTodoAction} from '../actions';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
    }
    
    addTodo() {
        // 如果不传mapDispatchToProps 就会直接传dispatch
        const {dispatch} = this.props;
        const todoTextDom = this.refs.todoText
        const todoText = todoTextDom.value.trim();
        todoTextDom.value = '';
        dispatch(addTodoAction(todoText));
    }
    render() {
        
        return (
            <div>
                <input ref="todoText"  />
                <button onClick={() => {
                    this.addTodo();
                }}>add todo</button>
            </div>
        );
    }
}