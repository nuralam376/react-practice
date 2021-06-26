import React from 'react';

function Button({ incrementCount }) {
    console.log('Rendering button');
    return (
        <div>
            <button type="button" onClick={incrementCount}>
                Click
            </button>
        </div>
    );
}

export default React.memo(Button);
