import React from 'react';
import { Button } from '../button';

require('./service.scss');

interface ServiceProps {
    title: JSX.Element;
    buttonText: JSX.Element;
    listElements:  JSX.Element[];
    onButtonClick(): void;
}

export function Service(props: ServiceProps) {
    return (
        <div className="services-service">
            <div className="services-service-title">
                {props.title}
            </div>
            <div className="services-service-list">
                {props.listElements.map((listElement, index) => (
                    <div key={`services-service-list-element-${index}`} className="services-service-list-element">
                        {listElement}
                    </div>
                ))}
            </div>
            <Button text={props.buttonText} onClick={props.onButtonClick}/>
        </div>
    );
}