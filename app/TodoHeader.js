class TodoHeader extends React.Component {
    render() {
        const { title, username, todoCount } = this.props;

        return (            
            <div>
                <h1>{title}</h1>
                <p>Hello, {username}, 你有 {todoCount} 項未完成代辦事項。</p>
            </div>
        );
    }
}

// 1. define prop type by React.PropTypes.array,
TodoHeader.propTypes = {
    title: React.PropTypes.string,
    username: React.PropTypes.string,
    todoCount: React.PropTypes.number
};

// 2. use 'defaultProps' to define prop's default value.
TodoHeader.defaultProps = {
    title: '我的代辦清單',
    username: 'Guest',
    todoCount: 0
};

window.App.TodoHeader = TodoHeader;
