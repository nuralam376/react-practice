import React, { PureComponent } from 'react';

export class TemperatureInput extends PureComponent {
    // state = {
    //     temperature: '',
    // };

    // onTemperatureChange = (e) => {
    //     const {celcius} = this.props;
    //     this.setState({
    //         this.props.celcius: e.target.value,
    //     });
    // };

    render() {
        const { celcius, onTemperatureInputChange } = this.props;
        return (
            <div>
                <fieldset>
                    <legend>Temperature</legend>
                    <input type="text" value={celcius} onChange={onTemperatureInputChange} />
                </fieldset>
            </div>
        );
    }
}

export default TemperatureInput;
