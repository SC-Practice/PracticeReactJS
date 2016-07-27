class TodoHeader extends React.Component {
    render() {
        const { name, username, todoCount } = this.props;

        return (            
            <div>
                <h1>{name}</h1>
                <p>Hello, {username}, 你有 {todoCount} 項未完成代辦事項。</p>
            </div>
        );
    }
}

window.App.TodoHeader = TodoHeader;
