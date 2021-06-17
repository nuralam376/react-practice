import React from 'react';

class TodoClass extends React.PureComponent {
    state = {
        todo: '',
        warning: null,
    };

    handleInput = (e) => {
        const input = e.target.value;
        let updatedWarning = '';

        if (input.includes('.js')) {
            updatedWarning = 'Do you have enough skill';
        }

        this.setState({
            todo: input,
            warning: updatedWarning,
        });
    };

    render() {
        const { todo, warning } = this.state;
        return (
            <div>
                <textarea
                    name="input"
                    id="input"
                    cols="30"
                    rows="10"
                    value={todo}
                    onChange={this.handleInput}
                />
                <p>{warning || todo}</p>
            </div>
        );
    }
}

export default TodoClass;
