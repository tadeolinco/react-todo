import React from 'react';
import { List } from 'semantic-ui-react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos, onCheckComplete, onClickDelete }) => {
    return (
        <List>
            {todos.map(todo => (
                <TodoItem
                    todo={todo}
                    key={todo._id}
                    onCheckComplete={onCheckComplete}
                    onClickDelete={onClickDelete}
                />
            ))}
        </List>
    );
};

export default TodoList;
