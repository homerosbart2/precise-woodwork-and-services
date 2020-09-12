import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import { ImagePreviewer } from '../image-previewer';

require('./gallery-previewer.scss');

interface GalleryPreviewerProps {
    imageIndex: number;
    length: number;
    onClose(): void;
}

interface GalleryPreviewerState {
    imageIndex: number;
    shown: boolean;
}

export class GalleryPreviewer extends Component<GalleryPreviewerProps, GalleryPreviewerState> {
    timeoutId?: number;

    constructor(props: GalleryPreviewerProps) {
        super(props);

        this.state = {
            shown: false,
            imageIndex: props.imageIndex,
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

    handlePreviousClick = () => {
        this.setState(state => ({
            imageIndex: state.imageIndex === 0
                ? this.props.length - 1
                : state.imageIndex - 1
        }));
    }

    handleNextClick = () => {
        this.setState(state => ({ imageIndex: (state.imageIndex + 1) %  this.props.length}));
    }

    render() {
        return (
            <div className={`gallery-previewer ${this.state.shown ? 'shown' : ''}`}>
                <ImagePreviewer src={`/projects-image/projects-image-${this.state.imageIndex}.jpg`} shown={true}/>
                <div className="gallery-previewer-close-button" onClick={this.handleClose}>
                ×
                </div>
                <div className="gallery-previewer-previous" onClick={this.handlePreviousClick}>
                    <FontAwesomeIcon icon="chevron-left"/>
                </div>
                <div className="gallery-previewer-next" onClick={this.handleNextClick}>
                    <FontAwesomeIcon icon="chevron-right"/>
                </div>
            </div>
        )
    }
}