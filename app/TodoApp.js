const {
    InputField,
    TodoHeader,
    TodoList,
    TodoItem
} = window.App;

const todos = [
    {
        id: 0,
        title: 'Item 1',
        completed: false
    },
    {
        id:1,
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
    constructor(props, context){
        super(props, context);
        this.state = {
            todos: [...todos]
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
                <InputField placeholder="新增代辦事項"/>
                <TodoList 
                    todos={todos}
                    onDeleteTool={
                        (id) => this.setState({
                            todos: _deleteTodo(todos, id)
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

window.App.TodoApp = TodoApp;
