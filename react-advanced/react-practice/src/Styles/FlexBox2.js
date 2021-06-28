import React from 'react';
import './FlexBox2.css';

function FlexBox2() {
    return (
        <div className="wrap">
            <div className="container">
                <div className="container-1-1">
                    <div className="item a">A</div>
                    <div className="item b">B</div>
                    <div className="item d">D</div>
                </div>
                <div className="container-1-2">
                    <div className="item c">C</div>
                </div>
            </div>
        </div>
    );
}

export default FlexBox2;
