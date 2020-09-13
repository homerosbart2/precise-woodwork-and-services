import { Component } from 'react';
import { ROUTE } from '../../types/route';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Locale } from '../../types/locale';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('./navbar.scss');

interface NavbarProps {
    locale: Locale;
    route: ROUTE;
    onActionClick(route: ROUTE): void;
    onLocaleChange(locale: Locale): void;
}

interface NavbarState {
    opened: boolean;
}

export class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);

        this.state = {
            opened: false,
        };
    }

    handleActionClick = (route: ROUTE) => {
        this.setState({ opened: false });
        this.props.onActionClick(route)
    }

    renderActions = () => {
        return Object.values(ROUTE).map(route => (
            <div key={`navbar-action-${route}`} className={`navbar-action ${this.props.route === route ? 'selected' : ''}`} onClick={() => this.handleActionClick(route) }>
                <FormattedMessage id={`navbar.${route}`}/>
            </div>
        ));
    }

    handleLanguageButtonClick = () => {
        this.props.onLocaleChange(this.props.locale === 'en' ? 'es' : 'en');
    }

    handleMenuClick = () => {
        this.setState(state => ({
            opened: !state.opened,
        }));
    }

    render() {
        return (
            <div className={`navbar ${this.state.opened ? 'opened' : ''}`}>
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
                    <div className="navbar-actions-footer">
                        <FormattedMessage id="footer.text"/>
                    </div>
                </div>
                <div className="navbar-menu" onClick={this.handleMenuClick}>
                    <FontAwesomeIcon icon={this.state.opened ? 'times' : 'bars'} />
                </div>
            </div>
        );
    }
}