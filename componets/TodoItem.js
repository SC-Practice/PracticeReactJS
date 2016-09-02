const { InputField } = window.App;

class TodoItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = { editable: false };

        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode() {
        this.setState({ editable: !this.state.editable });
    }

    render() {
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();
    }

    renderViewMode() {
        const { title, completed, onDelete, onToggle } = this.props;
        return (
            <div>
                <input type="checkbox" checked={completed} onChange={() => onToggle && onToggle(!completed) } />
                <span onDoubleClick={this.toggleEditMode}> {title} </span>
                <button onClick={() => onDelete && onDelete() } >x</button>
            </div>
        );
    }

    renderEditMode() {
        const { title, onUpdate } = this.props;
        return (
            <InputField
                autoFocus
                placeholder="編輯代辦事項"
                value={title}
                onBlur={this.toggleEditMode}
                onKeyDown={(e) => {
                    if (e.keyCode === 27) {
                        e.preventDefault();
                        this.toggleEditMode();
                    }
                } }
                onSubmitEditing={(content) => {
                    onUpdate && onUpdate(content);
                    this.toggleEditMode();
                } }
                />
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