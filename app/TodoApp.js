const {
    InputField,
    TodoHeader,
    TodoList,
    TodoItem
} = window.App;

class TodoApp extends React.Component {
    render() {
        return (
            <div>
                <TodoHeader todoCount={99} />
                <InputField placeholder="新增代辦事項"/>
                <TodoList />
            </div>
        );
    }
}

window.App.TodoApp = TodoApp;
