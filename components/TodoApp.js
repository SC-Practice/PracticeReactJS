const {
    TodoActions,
    TodoHeaderContainer,
    TodoListContainer,
    CreateTodoFieldContainer
} = window.App;

class TodoApp extends React.Component {  

    componentDidMount() {
        TodoActions.loadTodos();
    }

    render() {
        return (
           <div>
                <TodoHeaderContainer />
                <CreateTodoFieldContainer />
                <TodoListContainer />
           </div>
        );
    }
}

// 2. 業務邏輯已移到 TodoStore 存放，View 上的邏輯移掉。

window.App.TodoApp = TodoApp;
