import React from 'react';
import BuildingVerdict from './BuildingVerdict';
import TemperatureInput from './TemperatureInput';

export default class Calculator extends React.PureComponent {
    state = {
        scale: 'c',
        temperature: '',
    };

    onTemperatureInputChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.state;
        return (
            <>
                <TemperatureInput
                    temperature={temperature}
                    scale={scale}
                    onTemperatureInputChange={this.onTemperatureInputChange}
                />
                <TemperatureInput
                    temperature={temperature}
                    onTemperatureInputChange={this.onTemperatureInputChange}
                    scale={scale}
                />
                <BuildingVerdict temperature={temperature} />
            </>
        );
    }
}
