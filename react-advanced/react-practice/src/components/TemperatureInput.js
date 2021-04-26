import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Farenheit',
};

export function TemperatureInput({ scale, temperature, onTemperatureInputChange }) {
    return (
        <div>
            <fieldset>
                <legend>Temperature in {scaleNames[scale]}</legend>
                <input
                    type="text"
                    value={temperature}
                    onChange={(e) => onTemperatureInputChange(e, scale)}
                />
            </fieldset>
        </div>
    );
}

export default TemperatureInput;
