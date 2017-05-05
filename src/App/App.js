import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
import { getTodos, createTodo, updateTodo, deleteTodo } from '../api';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';

class App extends Component {
    constructor() {
        super();
        this.state = {
            newTodoText: '',
            todos: []
        };
    }
    // ============================================================
    componentDidMount() {
        getTodos().then(todos => {
            this.setState({
                todos: todos
            });
        });
    }

    onCheckComplete = todo => {
        todo.completed = !todo.completed;

        updateTodo(todo._id, todo).then(newTodo => {
            this.setState({
                todos: this.state.todos.map(todo => {
                    if (todo._id === newTodo._id) {
                        todo = newTodo;
                    }
                    return todo;
                })
            });
        });
    };

    onSubmitTodo = event => {
        event.preventDefault();
        if (!this.state.newTodoText) return;

        const body = {
            text: this.state.newTodoText
        };

        createTodo(body).then(newTodo => {
            this.setState({
                todos: [...this.state.todos, newTodo],
                newTodoText: ''
            });
        });
    };

    onClickDelete = id => {
        deleteTodo(id).then(() => {
            this.setState({
                todos: this.state.todos.filter(todo => {
                    return todo._id !== id;
                })
            });
        });
    };

    // ==============================================================
    onChangeTodoText = event => {
        this.setState({
            newTodoText: event.target.value
        });
    };

    render() {
        return (
            <Grid container>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <Segment>
                            <TodoForm
                                todoText={this.state.newTodoText}
                                creatingTodo={this.state.creatingTodo}
                                onChangeTodoText={this.onChangeTodoText.bind(
                                    this
                                )}
                                onSubmitTodo={this.onSubmitTodo.bind(this)}
                            />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={8}>
                        <Segment>
                            {this.state.todos.length
                                ? <TodoList
                                      todos={this.state.todos}
                                      onCheckComplete={this.onCheckComplete.bind(
                                          this
                                      )}
                                      onClickDelete={this.onClickDelete.bind(
                                          this
                                      )}
                                  />
                                : <Header>Need anything to do?</Header>}
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }
}

export default App;
