const { ActionTypes, AppDispatcher } = window.App;
const CHANGE_EVENT = 'CHANGE';
const _emitter = new EventEmitter();

/* 1. 管理 todo 資料 */
let _todos = [];

/* 2. 將原本在 TodoApp 的業務邏輯放到 Store 中，或者另外拉一個 utils/TodoUtils.js 另外放 */
const _createTodo = (todos, title) => {
    todos.push({
        id: todos[todos.length - 1].id + 1,
        title,
        completed: false
    });

    return todos;
 };

const _updateTodo = (todos, id, title) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) {
        target.title = title;
    }

    return todos;
}

const _toggleTodo = (todos, id, completed) => {
    const target = todos.find((todo) => todo.id === id);
    if (target) {
        target.completed = completed;
    }

    return todos;
}

const _deleteTodo = (todos, id) => {
    const idx = todos.findIndex((todo) => todo.id === id);
    if (idx !== -1) {
        todos.splice(idx, 1);
    }

    return todos;
};

window.App.TodoStore = {
    getAll() {
        return _todos;
    },

    // 3. 提供註冊改變事件的 API, 並回傳註銷方法
    addChangeListener(callback) {
        _emitter.on(CHANGE_EVENT, callback);
        return () => _emitter.removeListener(CHANGE_EVENT, callback);
    },

    /*  4. 向 AppDispatcher 註冊 callback, 並根據 action.type 改變 todos
    *   註: register() 會回傳 token, 可以用在store 有依賴關係，必須調整 dispatch 順序時。
    *   例：Dispatcher.waitFor([ token1, token2 ])
    */
    dispatchToken: AppDispatcher.register((action) => {
        switch(action.type) {
            case ActionTypes.LOAD_TODOS_SUCCESS:
                _todos = action.todos;
                break;
            case ActionTypes.CREATE_TODO:
                _todos = _createTodo(_todos, action.title);
                break;
            case ActionTypes.UPDATE_TODO:
                _todos = _updateTodo(_todos, action.id, action.title);
                break;
            case ActionTypes.TOGGLE_TODO:
                _todos = _toggleTodo(_todos, action.id, action.completed);
                break;
            case ActionTypes.DELETE_TODO:
                _todos = _deleteTodo(_todos, action.id);
                break;
        }    
        
        _emitter.emit(CHANGE_EVENT); // 5. 資料改變時，觸發事件
    })
}