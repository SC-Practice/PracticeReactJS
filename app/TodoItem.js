class TodoItem extends React.Component {
	render() {
        // 1. get param from this.props by parent component. 
        const { title, completed } = this.props;

        // 2. for reuse, render title & completed by param 
        return (
            <div>		
                <input type="checkbox" checked={completed} /> 
                <span>{title}</span>
                <button>x</button>
            </div>	
        )
	}
}

window.App.TodoItem = TodoItem;