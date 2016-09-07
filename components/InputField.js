class InputField extends React.Component {
    constructor(props, context) {
        super(props, context);

        // 1. 上層傳遞的 value 初始元件狀態
        this.state = { value: props.value || '' };

        // 2. 手動綁定 this 給 handleChange
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    render() {
        return (
            <div>
                <input 
                    {...this.props}
                    type="text"
                    value={this.state.value}
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    />
            </div>
        );
    }

    // 3. 宣告 handleChange 事件
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleKeyDown(e) {
        const {
            onKeyDown,
            onSubmitEditing
        } = this.props;

        // 4. 呼叫 state 取出與更新元件狀態
        const { value } = this.state;

        switch (e.keyCode) {
            case 13:
                if (value.trim()) {
                    // 如果使用者有輸入值，呼叫 callback 將 value 拋到上層元件。
                    onSubmitEditing && onSubmitEditing(value);
                }

                this.setState({ value: '' });
                break;
        }

        onKeyDown && onKeyDown(e);
    }
}

window.App.InputField = InputField;
