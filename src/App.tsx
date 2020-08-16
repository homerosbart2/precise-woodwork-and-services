import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import { en } from './lang/en';
import { es } from './lang/es';
import { Navbar } from './components/navbar';
import { ROUTE } from './types/route';
import { Button } from './components/button';
import { ImageStore } from './stores/image-store';
import { Loader } from './components/loader';
import { Image } from './types/image';

require('./App.scss');

const messages = {
    en,
    es,
};

interface AppState {
    fetching: boolean;
    previewedImage?: Image;
}

export class App extends Component<{}, AppState> {
    locale: 'en' | 'es' = 'en';
    imageStore = new ImageStore();

    constructor(props: {}) {
        super(props);

        this.state = {
            fetching: true,
        };
    }

    componentDidMount() {
        this.imageStore.fetchImages().then(_ => {
            this.setState({
                fetching: false,
                previewedImage: this.imageStore.images[0],
            });
        });
    }

    render() {
        return (
            <IntlProvider locale={this.locale} messages={messages[this.locale]}>
                <div className="app">
                    <Navbar route={ROUTE.HOME} onActionClick={() => { debugger; }}/>
                    <div className="home">
                        <div className="home-title">
                            <div className="home-title-secondary">
                                {/* TODO: translate */}
                                Hello, we are
                            </div>
                            <div className="home-title-primary">
                                Precise Woodwork and Services
                            </div>
                        </div>
                        <div className="home-gallery-preview">
                            {this.state.previewedImage && (
                                <img src={this.state.previewedImage.src} alt="previewed"/>
                            )}
                            <Loader shown={this.state.fetching}/>
                        </div>
                        <div className="home-presentation-card">
                            <div className="home-presentation-card-container">
                                <div className="home-presentation-card-container-title">
                                    Lorem ipsum dolor
                                </div>
                                <div className="home-presentation-card-container-description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis mattis orci, in suscipit nisi euismod ac.
                                </div>
                                {/* TODO: translate */}
                                <Button text="Our services" onClick={() => { debugger; }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </IntlProvider>
        );
    }
}
