import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

require('./component-1.scss');

interface Component1Props {
    color: string;
}

export class Component1 extends Component<Component1Props> {
    render() {
        return (
            <div className="component-1-container" style={{ color: this.props.color }}>
                <FormattedMessage id="greeting" values={{ name: 'Cotuc' }} />
            </div>
        );
    }
}