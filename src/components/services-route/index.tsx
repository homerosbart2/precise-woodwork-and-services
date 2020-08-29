import React from 'react';
import { ImagePreviewer } from '../image-previewer';
import { Service } from './service';
import { FormattedMessage } from 'react-intl';
import { CARPENTRY_SERVICE, INSTALLATION_SERVICE, SERVICE } from '../../types/service';

interface ServicesRouteProps {
    onGoToContactRoute(service: SERVICE): void;
}

export function ServicesRoute(props: ServicesRouteProps) {
    const handleBuildButtonClick = () => {
        props.onGoToContactRoute(CARPENTRY_SERVICE.KITCHEN_CABINETS);
    }

    const handleInstallButtonClick = () => {
        props.onGoToContactRoute(INSTALLATION_SERVICE.ARTWORK);
    }

    return (
        <div className="services">
            <div className="services-image-previewer">
                <ImagePreviewer imagesName="service-image" length={3}/>
            </div>
            {/* TODO: translate */}
            <Service
                title={<FormattedMessage id="services.carpentry.title"/>}
                buttonText="Build"
                listElements={Object.values(CARPENTRY_SERVICE).map(service => (
                    <FormattedMessage key={`carpentry-service-${service}`} id={`services.carpentry.${service}`}/>
                ))}
                onButtonClick={handleBuildButtonClick}
            />
            <Service
                title={<FormattedMessage id="services.picture_and_artwork_installation.title"/>}
                buttonText="Install"
                listElements={Object.values(INSTALLATION_SERVICE).map(service => (
                    <FormattedMessage key={`instalattion-service-${service}`} id={`services.picture_and_artwork_installation.${service}`}/>
                ))}
                onButtonClick={handleInstallButtonClick}
            />
        </div>
    );
}