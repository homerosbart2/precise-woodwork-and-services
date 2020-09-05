import React, { Component } from 'react';

require('./image-previewer.scss');

interface ImagePreviewerProps {
    src: string;
    shown: boolean;
    length?: number;
}

interface ImagePreviewerState {
    previewedImageIndex: number;
    previewedSecondaryImageIndex: number;
    showPreviewedSecondaryImage: boolean;
}

export class ImagePreviewer extends Component<ImagePreviewerProps, ImagePreviewerState> {
    intervalId?: number;
    timeoutId?: number;

    constructor(props: ImagePreviewerProps) {
        super(props);

        this.state = {
            previewedImageIndex: 0,
            previewedSecondaryImageIndex: 0,
            showPreviewedSecondaryImage: false,
        };
    }

    componentDidMount() {
        if (this.props.shown) {
            this.setInterval();
        }
    }

    componentDidUpdate(prevProps: ImagePreviewerProps, prevState: ImagePreviewerState) {
        if (prevState.previewedSecondaryImageIndex !== this.state.previewedSecondaryImageIndex) {
            this.setState(
                { showPreviewedSecondaryImage: true },
                () => {
                    window.setTimeout(
                        () => {
                            this.setState(state => ({
                                previewedImageIndex: state.previewedSecondaryImageIndex,
                                showPreviewedSecondaryImage: false,
                            }));
                        },
                        500,
                    );
                }
            );
        }

        if (prevProps.shown !== this.props.shown) {
            if (this.props.shown) {
                this.setInterval();
            } else {
                window.clearInterval(this.intervalId);
            }
        }
    }

    componentWillUnmount() {
        window.clearInterval(this.intervalId);
        window.clearTimeout(this.timeoutId);
    }

    setInterval = () => {
        if (this.props.length) {
            this.intervalId = window.setInterval(
                () => {
                    this.setState(state => ({
                        previewedSecondaryImageIndex: (state.previewedSecondaryImageIndex + 1) % this.props.length!
                    }));
                },
                5000,
            );
        }
    }

    renderImage = (previewedImageIndex: number,) => {
        const imageSrc = this.props.length
            ? `/${this.props.src}/${this.props.src}-${previewedImageIndex}.jpg`
            : this.props.src;
        return (
            <>
                <img className="image-previewer-image-background" style={{ backgroundImage: `url(${imageSrc})` }} alt=""/>
                <img className="image-previewer-image-main" src={imageSrc} alt=""/>
            </>
        );
    }

    render() {
        return (
            <div className="image-previewer">
                <div className="image-previewer-image shown">
                    {this.renderImage(this.state.previewedImageIndex)}
                </div>
                <div className={`image-previewer-image ${this.state.showPreviewedSecondaryImage ? 'shown' : ''}`}>
                    {this.renderImage(this.state.previewedSecondaryImageIndex)}
                </div>
            </div>
        );
    }
}