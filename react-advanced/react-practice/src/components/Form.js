import React, { PureComponent } from 'react';

class Form extends PureComponent {
    state = {
        name: 'JS',
        text: 'JavaScript',
        library: 'react',
        isAwesome: true,
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

        if (e.target.type === 'checkbox') {
            this.setState({
                isAwesome: e.target.checked,
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, text, library, isAwesome } = this.state;
        console.log(name, text, library, isAwesome);
    };

    render() {
        const { name, text, library, isAwesome } = this.state;
        return (
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
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

                    <br />
                    <br />

                    <select
                        name="library"
                        id="library"
                        value={library}
                        onChange={this.handleChange}
                    >
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isAwesome} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <p>{name}</p>
                <p>{library}</p>
            </div>
        );
    }
}

export default Form;
