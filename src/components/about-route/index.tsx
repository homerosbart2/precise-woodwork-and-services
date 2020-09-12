import React from 'react';
import { FormattedMessage } from 'react-intl';

require('./about-route.scss');

interface AboutRouteProps {

}

export function AboutRoute(props: AboutRouteProps) {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-top-background" style={{ backgroundImage: 'url(/about/background.jpg)' }}/>
                <div className="about-top-image">
                    <img src="/about/profile.PNG" alt=""/>
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