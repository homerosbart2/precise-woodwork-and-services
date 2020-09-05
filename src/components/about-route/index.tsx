import React from 'react';

require('./about-route.scss');

interface AboutRouteProps {

}

export function AboutRoute(props: AboutRouteProps) {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-top-background" style={{ backgroundImage: 'url(/about/background.jpg)' }}/>
                <div className="about-top-image">
                    <img src="/about/profile.png" alt=""/>
                </div>
            </div>
            <div className="about-bottom">
                <div className="about-bottom-name">
                    Byron Cotuc
                </div>
                <div className="about-bottom-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque obcaecati esse atque omnis necessitatibus quis assumenda, dolorem a minus eius quibusdam neque, perferendis porro, vitae molestiae officia in mollitia odit.
                </div>
            </div>
        </div>
    );
}