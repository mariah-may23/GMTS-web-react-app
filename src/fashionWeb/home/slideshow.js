import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./index.css"

const Slides = () => {
    const images = [
        "https://www.strategyand.pwc.com/de/en/industries/consumer-markets/streetwear/teaser-streetwear.jpg",
        "https://www.insidehook.com/wp-content/uploads/2022/09/Nike-Dunk-Cover.jpg?fit=1200%2C675",
        "https://cms.qz.com/wp-content/uploads/2019/05/GettyImages-915550812-e1558440140927.jpg?quality=75&strip=all&w=220&h=220",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Slide >
            <div className="each-slide-effect wd-slide-border">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>

                </div>
            </div>
            <div className="each-slide-effect wd-slide-border">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>

                </div>
            </div>
            <div className="each-slide-effect wd-slide-border">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>

                </div>
            </div>
        </Slide>
    );
};

export default Slides;