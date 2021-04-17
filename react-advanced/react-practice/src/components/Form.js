import React, { PureComponent } from 'react';

class Form extends PureComponent {
    state = {
        name: 'JS',
    };

    handleChange = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    render() {
        const { name } = this.state;
        return (
            <div>
                <h1>Form</h1>
                <form action="">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={this.handleChange}
                    />
                </form>
                <p>{name}</p>
            </div>
        );
    }
}

export default Form;
