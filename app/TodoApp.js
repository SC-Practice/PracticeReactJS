const {
    InputField,
    TodoHeader,
    TodoList,
    TodoItem
} = window.App;

const demoTodos = [
    {
        id: 0,
        title: 'Item 1',
        completed: false
    },
    {
        id: 1,
        title: 'Item 2',
        completed: true
    },
    {
        id: 2,
        title: 'Item 3',
        completed: false
    }
];

class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            todos: [...demoTodos]
        };
    }

    render() {
        const { todos } = this.state;
        return (
            <div>
                <TodoHeader
                    title='我的代辦清單'
                    username='Sean'
                    todoCount={todos.filter((todo) => !todo.completed).length}
                    />
                <InputField
                    placeholder="新增代辦事項"
                    onSubmitEditing={
                        (title) => this.setState({
                            todos: _createTodo(todos, title)
                        })
                    }
                    />
                <TodoList
                    todos={todos}
                    onDeleteTodo={
                        (id) => this.setState({
                            todos: _deleteTodo(todos, id)
                        })
                    }
                    onTogglTodo={
                        (id, completed) => this.setState({
                            todos: _toggleTodo(todos, id, completed)
                        })
                    }
                    onUpdateTodo={
                        (id, title) => this.setSate({
                            todos: _updateTodo(todos, id, title)
                        })
                    }
                    />
            </div>
        );
    }
}

const _deleteTodo = (todos, id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) {
        todos.splice(idx, 1);
    }

    return todos;
};

const _toggleTodo = (todos, id, completed) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) {
        target.completed = completed;
    }

    return todos;
}

const _updateTodo = (todos, id, title) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) {
        target.title = title;
    }

    return todos;
}

const _createTodo = (todos, title) => {
    todos.push({
        id: todos[todos.length - 1].id + 1,
        title,
        completed: false
    });

    return todos;
}

window.App.TodoApp = TodoApp;
