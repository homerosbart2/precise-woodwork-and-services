import React, { Component } from 'react';
import { GalleryPreviewer } from './gallery-previewer';

require('./projects-route.scss');

interface ProjectsRouteState {
    previewedImageIndex?: number;
}

const PROJECTS_ROUTE_IMAGES_LENGTH = 9;

export class ProjectsRoute extends Component<{}, ProjectsRouteState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            
        }
    }

    handleImageClick = (imageIndex: number) => {
        this.setState({ previewedImageIndex: imageIndex });
    }

    handleGalleryPreviewerClose = () => {
        this.setState({ previewedImageIndex: undefined });
    }

    renderImages = () => {
        const images: JSX.Element[] = [];

        for (let index = 0; index < PROJECTS_ROUTE_IMAGES_LENGTH; index++) {
            images.push(
            <div key={`projects-gallery-item-${index}`} className="projects-gallery-item">
                <img
                    style={{ backgroundImage: `url(/projects-image/projects-image-${index}.jpg)` }}
                    alt=""
                    onClick={() => this.handleImageClick(index)}
                />
            </div>
            );
        }

        return images;
    }

    render() {
        return (
            <div className="projects">
                <div className="projects-gallery">
                    {this.renderImages()}
                </div>
                {this.state.previewedImageIndex !== undefined && (
                    <GalleryPreviewer
                        imageIndex={this.state.previewedImageIndex}
                        length={PROJECTS_ROUTE_IMAGES_LENGTH}
                        onClose={this.handleGalleryPreviewerClose}
                    />
                )}
            </div>
        );
    }
}