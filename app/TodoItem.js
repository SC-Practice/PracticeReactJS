class TodoItem extends React.Component {
    constructor(props, context) {
        super(props, context);

        // 1. 使用類別建構子建立初始元件狀態
        this.state = { editable: false };

        // 7. 在 es6 componet class 中，需要手動綁定 this
        this.toggleEditMode = this.toggleEditMode.bind(this);
    }

    toggleEditMode(){
        debugger;
        this.setState({ editable: !this.state.editable });
    }


	render() {
        // 2. 判斷目前模式，來載入不同的畫面
        return this.state.editable ? this.renderEditMode() : this.renderViewMode();
    }

    renderViewMode() {
        // 3. 原本載入「瀏覽模式」的程式，移到這邊
        const { title, completed, onDelete } = this.props;

        return (
            <div>		
                <input type="checkbox" checked={completed} /> 
                <span>{title}</span>
                <button onClick={() => onDelete && onDelete()} >x</button> // 當刪除按鈕被點選，觸發上層元件 (TodoList) 傳遞的 onDelete callback
            </div>	
        );
	}

    renderEditMode() {
        // 4. 編輯模式使用 InputField 元件
        return (
            <InputField
                autoFocus           
                placeholder="編輯代辦事項"
                value={this.props.title}
                onBlur={this.toggleEditMode}
                onKeyDown={(e) => {
                    if (e.keyCode === 27) {
                        e.preventDefault();
                        this.toggleEditMode();
                    }
                }}
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