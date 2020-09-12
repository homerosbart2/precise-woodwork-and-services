import React from 'react';
import { ImagePreviewer } from '../image-previewer';
import { Service } from './service';
import { FormattedMessage } from 'react-intl';
import { SERVICE } from '../../types/service';

require('./services-route.scss');

interface ServicesRouteProps {
    shown: boolean;
    onGoToContactRoute(service: SERVICE): void;
}

export function ServicesRoute(props: ServicesRouteProps) {
    const handleButtonClick = () => {
        props.onGoToContactRoute(SERVICE.KITCHEN_CABINETS);
    }

    return (
        <div className="services">
            <div className="services-image-previewer">
                <ImagePreviewer src="service-image" length={3} shown={props.shown}/>
            </div>
            {/* TODO: translate */}
            <Service
                title={<FormattedMessage id="services.title"/>}
                buttonText={<FormattedMessage id="services.button"/>}
                listElements={Object.values(SERVICE).map(service => (
                    <FormattedMessage key={`instalattion-service-${service}`} id={`services.${service}`}/>
                ))}
                onButtonClick={handleButtonClick}
            />
        </div>
    );
}