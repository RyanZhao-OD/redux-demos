import React, {Component} from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        const {todos, onToggleTodo} = this.props;
        return (
            <ul>
            {
                todos.map(todo => {
                    return (
                        <Todo
                            key={todo.id}
                            {...todo}
                            onClick={event => {onToggleTodo(todo.id)}}
                        />
                    );
                })
            }
            </ul>
        );
    }
}