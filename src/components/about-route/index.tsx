import React from 'react';
import { FormattedMessage } from 'react-intl';

require('./about-route.scss');

interface AboutRouteProps {

}

export function AboutRoute(props: AboutRouteProps) {
    const imageRef = React.createRef<HTMLDivElement>();

    const handleImageLoad = () => {
        const imageElement = imageRef.current;

        if (imageElement) {
            imageElement.classList.add('shown');
        }
    }

    return (
        <div className="about">
            <div className="about-top">
                <div className="about-top-background" style={{ backgroundImage: 'url(/about/background2.jpg)' }}/>
                <div ref={imageRef} className="about-top-image">
                    <img src="/about/profile.png" alt="" onLoad={handleImageLoad}/>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-title">
                    <FormattedMessage id="about.title"/>
                </div>
                <div className="about-bottom-description">
                    <FormattedMessage id="about.description"/>
                </div>
            </div>
        </div>
    );
}