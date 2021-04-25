import React from 'react';

function BuildingVerdict({ celcius = 0 }) {
    if (celcius > 100) {
        return <p>Water would boil</p>;
    }

    return <p>Water would not boil</p>;
}

export default BuildingVerdict;
