import React from 'react';
import { Form } from 'semantic-ui-react';

const TodoForm = ({ todoText, onChangeTodoText, onSubmitTodo }) => {
    return (
        <Form onSubmit={onSubmitTodo}>
            <Form.Group>
                <Form.Input
                    placeholder="New Todo"
                    onChange={onChangeTodoText}
                    value={todoText}
                    width={14}
                />
                <hr />
                <Form.Button type="submit" width={4} fluid>
                    Add
                </Form.Button>
            </Form.Group>
        </Form>
    );
};

export default TodoForm;
