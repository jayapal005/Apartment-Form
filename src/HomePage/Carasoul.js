import { Carousel } from 'antd';
import React from 'react';

function CarasoulImage(props) {
    const contentStyle = {
        height: '40px',
        color: '#fff',
        lineHeight: '40px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div style={{}}>
            <Carousel autoplay>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>,
        </div>
    );
}

export default CarasoulImage;

