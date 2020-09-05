import React, { Component } from 'react';
import { ImagePreviewer } from '../image-previewer';
import { Image } from '../../types/image';

require('./gallery-previewer.scss');

interface GalleryPreviewerProps {
    image: Image;
    onClose(): void;
}

interface GalleryPreviewerState {
    shown: boolean;
}

export class GalleryPreviewer extends Component<GalleryPreviewerProps, GalleryPreviewerState> {
    timeoutId?: number;

    constructor(props: GalleryPreviewerProps) {
        super(props);

        this.state = {
            shown: false,
        };
    }

    componentDidMount() {
        this.timeoutId = window.setTimeout(
            () => {
                this.setState({ shown: true });
            },
            100,
        );
    }

    componentWillUnmount() {
        window.clearTimeout(this.timeoutId);
    }

    handleClose = () => {
        this.setState(
            { shown: false },
            () => {
                this.timeoutId = window.setTimeout(
                    () => {
                        this.props.onClose();
                    },
                    200,
                );
            },
        );
    }

    render() {
        return (
            <div className={`gallery-previewer ${this.state.shown ? 'shown' : ''}`}>
                <ImagePreviewer src={this.props.image.src} shown={true}/>
                <div className="gallery-previewer-description">
                    {this.props.image.description.split(/(?:\r\n|\r|\n)/g).map((sentence, index) => (
                        <div key={`gallery-previewer-description-${index}`}>{sentence}</div>
                    ))}
                </div>
                <div className="gallery-previewer-close-button" onClick={this.handleClose}>
                ×
                </div>
            </div>
        )
    }
}