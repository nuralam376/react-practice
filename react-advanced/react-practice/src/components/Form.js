import React, { PureComponent } from 'react';

class Form extends PureComponent {
    state = {
        name: 'JS',
        text: 'JavaScript',
    };

    handleChange = (e) => {
        // if (e.target.type === 'text')
        //     this.setState({
        //         name: e.target.value,
        //     });

        // if (e.target.type === 'textarea')
        //     this.setState({
        //         text: e.target.value,
        //     });

        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    render() {
        const { name, text } = this.state;
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
                    <br />
                    <br />
                    <textarea
                        name="text"
                        id=""
                        cols="30"
                        rows="10"
                        value={text}
                        onChange={this.handleChange}
                    />
                </form>
                <p>{name}</p>
            </div>
        );
    }
}

export default Form;
