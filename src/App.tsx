import React, { Component } from 'react';
import logo from './logo.svg';
import { Component1 } from './components/component-1';
import { IntlProvider } from 'react-intl';
import { en } from './lang/en';
import { es } from './lang/es';

require('./App.scss');

interface AppProps {
    text: string;
}

interface AppState {
    color: string;
}

const messages = {
    en,
    es,
};

export class App extends Component<AppProps, AppState> {
    locale: 'en' | 'es' = 'en';

    constructor(props: AppProps) {
        super(props);

        this.state = {
            color: '#00FF00',
        };
    }

    handleChangeColorButtonClick = () => {
        this.setState(state => ({
            color: state.color === '#00FF00' ? '#FF0000' : '#00FF00',
        }));
    }

    render() {
        return (
            <IntlProvider locale={this.locale} messages={messages[this.locale]}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p className="App-text">
                            { this.props.text }
                        </p>
                        <Component1 color={this.state.color}/>
                        <div onClick={this.handleChangeColorButtonClick} className="change-color-button">
                            Change color
                        </div>
                    </header>
                </div>
            </IntlProvider>
        );
    }
}
