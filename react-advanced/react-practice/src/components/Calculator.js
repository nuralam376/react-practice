import React from 'react';
import BuildingVerdict from './BuildingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.PureComponent {
    state = {
        celcius: 0,
    };

    onTemperatureInputChange = (e) => {
        this.setState({
            celcius: e.target.value,
        });
    };

    render() {
        const { celcius } = this.state;
        return (
            <>
                <TemperatureInput
                    celcius={celcius}
                    onTemperatureInputChange={this.onTemperatureInputChange}
                />
                <TemperatureInput
                    celcius={celcius}
                    onTemperatureInputChange={this.onTemperatureInputChange}
                />
                <BuildingVerdict celcius={celcius} />
            </>
        );
    }
}
