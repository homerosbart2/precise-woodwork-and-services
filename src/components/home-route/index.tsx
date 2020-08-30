import React from 'react';
import { ImagePreviewer } from '../image-previewer';
import { Button } from '../button';

interface HomeRouteProps {
    onGoToServicesRoute(): void;
}

export function HomeRoute(props: HomeRouteProps) {
    return (
        <div className="home">
            <div className="home-title">
                <div className="home-title-secondary">
                    {/* TODO: translate */}
                    Hello, we are
                </div>
                <div className="home-title-primary">
                    Precise Woodwork and Services
                </div>
            </div>
            <div className="home-gallery-preview">
                <ImagePreviewer src="home-image" length={3}/>
            </div>
            <div className="home-presentation-card">
                <div className="home-presentation-card-container">
                    <div className="home-presentation-card-container-title">
                        Lorem ipsum dolor
                    </div>
                    <div className="home-presentation-card-container-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis mattis orci, in suscipit nisi euismod ac.
                    </div>
                    {/* TODO: translate */}
                    <Button text="Our services" onClick={props.onGoToServicesRoute}/>
                </div>
            </div>
        </div>
    );
}