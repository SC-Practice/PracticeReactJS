const {       
    TodoItem
} = window.App.TodoItem;

class TodoList extends React.Component {
	render() {

        // set TodoItem param (title, completed).
        // how to use: just like set html attribute. 
        return (
            <ul>
                <li>
                    <TodoItem 
                        title="item 1"
                        completed={true}
                    />      
                </li>
                <li>
                    <TodoItem 
                        title="item 2"
                        completed={false}
                    />
                </li>
                <li>
                    <TodoItem 
                        title="item 3"
                        completed={false}
                    />
                </li>
            </ul>
        );
	}
}

window.App.TodoList = TodoList;