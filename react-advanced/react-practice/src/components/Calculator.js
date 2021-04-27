import React from 'react';
import { convert, tocelsius, toFahrenheit } from '../lib/converter';
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
        const celsius = scale === 'f' ? convert(temperature, tocelsius) : temperature;
        const farenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return (
            <>
                <TemperatureInput
                    temperature={celsius}
                    scale="c"
                    onTemperatureInputChange={this.onTemperatureInputChange}
                />
                <TemperatureInput
                    temperature={farenheit}
                    scale="f"
                    onTemperatureInputChange={this.onTemperatureInputChange}
                />
                <BuildingVerdict temperature={temperature} />
            </>
        );
    }
}
