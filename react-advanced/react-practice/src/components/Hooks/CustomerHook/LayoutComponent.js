import React from 'react';
import useWindowWidth from './useWindowWidth';

function LayoutComponent() {
    const onSmallScreen = useWindowWidth(600);

    return (
        <div>
            <h1>You are browsing on {onSmallScreen ? 'Small' : 'Large'} device</h1>
        </div>
    );
}

export default LayoutComponent;
