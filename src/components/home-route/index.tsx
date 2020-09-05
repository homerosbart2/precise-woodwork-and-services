import React from 'react';
import { ImagePreviewer } from '../image-previewer';
import { Button } from '../button';
import { FormattedMessage } from 'react-intl';

require('./home-route.scss');

interface HomeRouteProps {
    shown: boolean;
    onGoToServicesRoute(): void;
}

export function HomeRoute(props: HomeRouteProps) {
    return (
        <div className="home">
            <div className="home-title">
                <div className="home-title-secondary">
                    <FormattedMessage id="home.hello_we_are"/>
                </div>
                <div className="home-title-primary">
                    Precise Woodwork and Services
                </div>
            </div>
            <div className="home-gallery-preview">
                <ImagePreviewer src="home-image" length={3} shown={props.shown}/>
            </div>
            <div className="home-presentation-card">
                <div className="home-presentation-card-container">
                    <div className="home-presentation-card-container-title">
                        <FormattedMessage id="home.presentation_card.title"/>
                    </div>
                    <div className="home-presentation-card-container-description">
                        <FormattedMessage id="home.presentation_card.description"/>
                    </div>
                    <Button text={<FormattedMessage id="home.our_services"/>} onClick={props.onGoToServicesRoute}/>
                </div>
            </div>
        </div>
    );
}