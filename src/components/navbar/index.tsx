import { Component } from 'react';
import { ROUTE } from '../../types/route';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Locale } from '../../types/locale';

require('./navbar.scss');

interface NavbarProps {
    locale: Locale;
    route: ROUTE;
    onActionClick(route: ROUTE): void;
    onLocaleChange(locale: Locale): void;
}

export class Navbar extends Component<NavbarProps> {
    renderActions = () => {
        return Object.values(ROUTE).map(route => (
            <div key={`navbar-action-${route}`} className={`navbar-action ${this.props.route === route ? 'selected' : ''}`} onClick={() => { this.props.onActionClick(route) }}>
                <FormattedMessage id={`navbar.${route}`}/>
            </div>
        ));
    }

    handleLanguageButtonClick = () => {
        this.props.onLocaleChange(this.props.locale === 'en' ? 'es' : 'en');
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-logo">
                    <iframe title="logo" src="/logo.svg">
                        PWS
                    </iframe>
                </div>
                <div className="navbar-actions">
                    {this.renderActions()}
                    <div className="navbar-language-button" onClick={this.handleLanguageButtonClick}>
                        {this.props.locale}
                        <img src={`/language/${this.props.locale}.png`} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}