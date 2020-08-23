import React, { Component } from 'react';
import { RouteCarouselHorseProps } from './route-carousel-horse';
import { ROUTE } from '../../types/route';

interface RouteCarouselProps {
    route: ROUTE;
    children(translateX: {[route: string]: number}): React.ReactElement<RouteCarouselHorseProps>[];
}

export class RouteCarousel extends Component<RouteCarouselProps> {
    indexedRouteHorses: { [route: string]: number };

    constructor(props: RouteCarouselProps) {
        super(props);

        this.indexedRouteHorses = props.children({}).reduce(
            (indexedRoutes: { [route: string]: number }, routeHorse, index) => {
                return {
                    ...indexedRoutes,
                    [routeHorse.props.route]: index,
                };
            },
            {},
        );
    }

    render() {
        const index = this.indexedRouteHorses[this.props.route];
        const translateX = Object.values(ROUTE).reduce(
            (translateX: {[route: string]: number}, route) => {
                return {
                    ...translateX,
                    [route]: (this.indexedRouteHorses[route] - index) * 100,
                };
            },
            {},
        );

        return (
            <>
                {this.props.children(translateX)}
            </>
        );
    }
}