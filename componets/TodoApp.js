const {
    // 1. 引入 TodoActions 和 TodoStore
    TodoActions,
    TodoStore,
    InputField,
    TodoHeader,
    TodoList,
    TodoItem
} = window.App;

class TodoApp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            // 3. 初始化資料從 TodoStore 取出
            todos: TodoStore.getAll()
        };
    }

    // add componetDitMount() to get data
    componentDidMount() {
        // 4. 向 Server 請求資料改為調用 TodoActions
        TodoActions.loadTodos();

        // 5. 向 TodoStore 註冊監聽器: 當監聽器被觸發，便讓 state 與 TodoStore 資料同步
        this._removeChangeListener = TodoStore.addChangeListener(
            () => this.setState({ todos: TodoStore.getAll() })
        );
    }

    componetWillUnmout() {
        // 6. 向 TodoStore 註銷監聽器
        this._removeChangeListener();
    }

    // 7. 所有渲染的資料從 state 中取，這份 state 與 TodoStore 是同步的；
    //    所有改變資料的操作都改為調用 TodoActions
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
                    onSubmitEditing={ TodoActions.createTodo }
                    />
                <TodoList
                    todos={todos}
                    onDeleteTodo={ TodoActions.deleteTodo }
                    onTogglTodo={ TodoActions.toggleTodo }
                    onUpdateTodo={ TodoActions.updateTodo }
                    />
            </div>
        );
    }
}

// 2. 業務邏輯已移到 TodoStore 存放，View 上的邏輯移掉。

window.App.TodoApp = TodoApp;
