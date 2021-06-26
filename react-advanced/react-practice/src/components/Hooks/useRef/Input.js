import React, { forwardRef } from 'react';

function Input({ type, placeholder }, ref) {
    return (
        <div>
            <input ref={ref} type={type} placeholder={placeholder} />
        </div>
    );
}

const forwardedRef = forwardRef(Input);

export default forwardedRef;
