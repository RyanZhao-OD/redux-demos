import React, { Component } from 'react';
import TodoListContainer from '../containers/TodoListContainer';
import AddTodoContainer from '../containers/AddTodoContainer';
import Footer from './Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <AddTodoContainer />
                <TodoListContainer />
                <Footer />
            </div>
        );
    }
}