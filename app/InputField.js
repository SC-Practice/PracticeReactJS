class InputField extends React.Component {
    render() {
        const { placeholder } = this.props;
        return (
            <div>
                Hello, 你有n項未完成代辦事項
                <input type="text" placeholder="{placeholder}" />
            </div>
        );
    }
}

window.App.InputField = InputField;
