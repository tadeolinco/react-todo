import React from 'react';
import { List, Checkbox, Button } from 'semantic-ui-react';

const TodoItem = ({ todo, onCheckComplete, onClickDelete }) => {
    const textDecoration = todo.completed ? 'line-through' : 'none';
    const fontColor = todo.completed ? 'grey' : 'black';

    return (
        <List.Item>
            <Checkbox
                checked={todo.completed}
                onClick={() => onCheckComplete(todo)}
            />
            {' '}
            <h4
                style={{
                    textDecoration: textDecoration,
                    display: 'inline',
                    color: fontColor
                }}>
                {todo.text}
            </h4>
            {' '}
            <Button
                icon="close"
                size="mini"
                floated="right"
                onClick={() => onClickDelete(todo._id)}
            />
        </List.Item>
    );
};

export default TodoItem;
