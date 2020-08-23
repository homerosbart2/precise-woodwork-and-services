import React, { Component } from 'react';

require('./image-previewer.scss');

interface ImagePreviewerProps {
    imagesName: string;
    length: number;
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
        this.intervalId = window.setInterval(
            () => {
                this.setState(state => ({
                    previewedSecondaryImageIndex: (state.previewedSecondaryImageIndex + 1) % this.props.length
                }));
            },
            5000,
        );
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
    }

    componentWillUnmount() {
        window.clearInterval(this.intervalId);
        window.clearTimeout(this.timeoutId);
    }

    renderImage = (previewedImageIndex: number,) => {
        return (
            <>
                <img className="image-previewer-image-background" style={{ backgroundImage: `url(/${this.props.imagesName}/${this.props.imagesName}-${previewedImageIndex}.jpg)` }} alt=""/>
                <img className="image-previewer-image-main" src={`/${this.props.imagesName}/${this.props.imagesName}-${previewedImageIndex}.jpg`} alt=""/>
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