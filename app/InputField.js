class InputField extends React.Component {
    render() {
        return (
            <div>                
                <input {...this.props} type="text" />
            </div>
        );
    }
}

window.App.InputField = InputField;
