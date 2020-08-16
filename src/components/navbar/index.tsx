import { Component } from 'react';
import { ROUTE } from '../../types/route';
import React from 'react';
import { FormattedMessage } from 'react-intl';

require('./navbar.scss');

interface NavbarProps {
    route: ROUTE;
    onActionClick(route: ROUTE): void;
}

export class Navbar extends Component<NavbarProps> {
    renderActions = () => {
        return Object.values(ROUTE).map(route => (
            <div key={`navbar-action-${route}`} className={`navbar-action ${this.props.route === route ? 'selected' : ''}`}>
                <FormattedMessage id={`navbar.${route}`}/>
            </div>
        ));
    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar-logo">
                    PWS
                </div>
                <div className="navbar-actions">
                    {this.renderActions()}
                </div>
            </div>
        );
    }
}