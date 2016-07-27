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
    render() {
        return (
            <div>
                <TodoHeader 
                    title='我的代辦清單'
                    username='Sean'
                    todoCount={todos.filter((todo) => !todo.completed).length} 
                />
                <InputField placeholder="新增代辦事項"/>
                <TodoList todos={todos}/>
            </div>
        );
    }
}

window.App.TodoApp = TodoApp;
