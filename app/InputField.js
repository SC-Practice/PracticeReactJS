class InputField extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    render() {
        return (
            <div>
                <input {...this.props}
                    type="text"
                    onKeyDown={this.handleKeyDown}
                    />
            </div>
        );
    }

    handleKeyDown(e) {
        const {
            onKeyDown,
            onSubmitEditing
        } = this.props;
        const { value } = e.target;
        switch (e.keyCode) {
            case 13:
                if (value.trim()) {
                    // 如果使用者有輸入值，呼叫 callback 將 value 拋到上層元件。
                    onSubmitEditing && onSubmitEditing(value);
                }

                e.target.value = '';
                break;
        }

        onKeyDown && onKeyDown(e);
    }


}

window.App.InputField = InputField;
