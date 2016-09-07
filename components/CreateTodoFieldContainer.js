const {
  TodoActions,
  InputField
} = window.App;

class CreateTodoFieldContainer extends React.Component {
    render() {
        return (
            <InputField
                placeholder="新增代辦清單"
                onSubmitEditing={ TodoActions.createTodo }
                />
        );
    }
}

window.App.CreateTodoFieldContainer = CreateTodoFieldContainer;