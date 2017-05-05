import React, { Component } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';
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

    componentDidMount() {}

    onCheckComplete = todo => {
        todo.completed = !todo.completed;
    };

    onSubmitTodo = event => {
        event.preventDefault();
        if (!this.state.newTodoText) return;
    };

    onClickDelete = id => {};

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
