import React from 'react';

function ShowCount({ count, title }) {
    console.log('Rendering showcount', title);
    return (
        <div>
            {title} is {count}
        </div>
    );
}

export default React.memo(ShowCount);
