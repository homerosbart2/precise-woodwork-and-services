import React from "react";
import { ROUTE } from "../../types/route";

require('./route-horse-carousel.scss');

export interface RouteCarouselHorseProps {
    route: ROUTE;
    translateX: {[route: string]: number};
    children: React.ReactNode;
}

export function RouteCarouselHorse(props: RouteCarouselHorseProps) {
    return (
        <div className="route-horse-carousel" style={{ transform: `translateX(${props.translateX[props.route]}%)` }}>
            {props.children}
        </div>
    )
}