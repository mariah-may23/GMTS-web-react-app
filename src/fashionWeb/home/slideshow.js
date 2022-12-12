import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import "./index.css"

const Slides = () => {
    const images = [
        "https://images.lifestyleasia.com/wp-content/uploads/sites/6/2021/12/01154819/Iconic-Nike-x-Off-White-sneakers-by-Virgil-Abloh-cropped-1600x837.jpeg",
         "https://www.strategyand.pwc.com/de/en/industries/consumer-markets/streetwear/teaser-streetwear.jpg",
        "https://www.insidehook.com/wp-content/uploads/2022/09/Nike-Dunk-Cover.jpg?fit=1200%2C675",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
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