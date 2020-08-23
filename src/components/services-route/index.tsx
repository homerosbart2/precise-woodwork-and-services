import React from 'react';
import { ImagePreviewer } from '../image-previewer';
import { Service } from './service';

interface ServicesRouteProps {
    onGoToContactRoute(): void;
}

export function ServicesRoute(props: ServicesRouteProps) {
    return (
        <div className="services">
            <div className="services-image-previewer">
                <ImagePreviewer imagesName="service-image" length={3}/>
            </div>
            {/* TODO: translate */}
            <Service
                title="Build Your Furniture"
                buttonText="Build"
                listElements={[
                    'Kitchen Cabinets',
                    'Closets',
                    'Vanities',
                    'Trim (Baseboard, Casing, Crown Molding, etc)',
                    'Interior and Exterior Door Installation',
                    'Mantels',
                    'Stairs',
                ]}
                onButtonClick={props.onGoToContactRoute}
            />
            <Service
                title="Install Decorations"
                buttonText="Install"
                listElements={[
                    'Picture and Artwork Installation',
                    'Curtains and Blinds Installation',
                    'TV Mount Installation',
                ]}
                onButtonClick={props.onGoToContactRoute}
            />
        </div>
    );
}