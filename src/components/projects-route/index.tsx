import React from 'react';
import { ImageStore } from '../../stores/image-store';
import { Loader } from '../loader';
import { normalizeDigits } from '../../util/normalize-digits';
import { Image } from '../../types/image';

require('./projects-route.scss');

interface ProjectsRouteProps {
    imageStore: ImageStore;
    fetching: boolean;
    onImageClick(image: Image): void;
}

export function ProjectsRoute(props: ProjectsRouteProps) {
    return (
        <div className="projects">
            <div className="projects-gallery">
                {props.imageStore.imagesByPost.map((images, index) => images.map(image => (
                    <div key={`projects-gallery-item-${image.id}`} className="projects-gallery-item">
                        <img src={image.src} alt="" onClick={() => props.onImageClick(image)}/>
                        <div className="projects-gallery-item-number">
                            # {normalizeDigits(props.imageStore.imagesByPost.length - index)}
                        </div>
                    </div>
                )))}
            </div>
            <Loader shown={props.fetching}/>
        </div>
    );
}