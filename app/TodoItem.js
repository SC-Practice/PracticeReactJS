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
        );
	}
}

TodoItem.propTypes = {
    title: React.PropTypes.string,
    completed: React.PropTypes.bool
};

TodoItem.defaultProps = {
    title: 'ItemTitle',
    completed: false
}

window.App.TodoItem = TodoItem;