export const getTodos = () => {
    const method = 'GET';
    return fetch('/todos', { method }).then(
        response => response.json(),
        err => {
            console.log('Fail in getting todos');
        }
    );
};
export const createTodo = body => {
    const method = 'POST';
    const headers = { 'Content-Type': 'application/json' };
    body = JSON.stringify(body);
    return fetch(`/todos`, { method, headers, body }).then(
        response => response.json(),
        err => console.log(err)
    );
};

export const updateTodo = (id, body) => {
    console.log(body);
    const method = 'PUT';
    const headers = { 'Content-Type': 'application/json' };
    body = JSON.stringify(body);

    return fetch(`/todos/${id}`, { method, headers, body }).then(
        response => response.json(),
        err => console.log(err)
    );
};

export const deleteTodo = id => {
    const method = 'DELETE';
    return fetch(`/todos/${id}`, { method }).then(
        response => response.json(),
        err => console.log(err)
    );
};
