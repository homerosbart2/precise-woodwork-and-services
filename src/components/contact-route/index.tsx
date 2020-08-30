import React, { Component } from 'react';
import { SERVICE, CARPENTRY_SERVICE, INSTALLATION_SERVICE } from '../../types/service';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';
import { Button } from '../button';

require('./contact-route.scss');

interface ContactRouteProps {
    intl: IntlShape;
    children(
        addSelectedService: (service: SERVICE) => void,
    ): void;
}

const PHONE_NUMBER_REGEX = /^\+?([0-9]*-*\(*\)*[\s]*)*$/g;

interface ContactRouteState {
    selectedServices: SERVICE[];
    formName: string;
    formNumber: string;
    formDescription: string;
}

class IntlContactRoute extends Component<ContactRouteProps, ContactRouteState> {
    constructor(props: ContactRouteProps) {
        super(props);

        this.state = {
            selectedServices: [],
            formName: '',
            formNumber: '',
            formDescription: '',
        };
    }

    handleServiceOptionClick = (service: SERVICE) => {
        this.setState(state => ({
            selectedServices: state.selectedServices.includes(service)
                ? state.selectedServices.filter(selectedService => selectedService !== service)
                : state.selectedServices.concat(service),
        }));
    }

    addSelectedService = (service: SERVICE) => {
        if (this.state.selectedServices.length === 0) {
            this.setState({
                selectedServices: [service],
            });
        }
    }

    handleFormNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ formName: event.currentTarget.value });
    }

    handleFormNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formNumber = event.currentTarget.value.match(PHONE_NUMBER_REGEX)
            ? event.currentTarget.value
            : this.state.formNumber;

        this.setState({ formNumber });
    }

    handleFormDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ formDescription: event.currentTarget.value });
    }

    shouldShowSubmitButton = () => {
        return (
            this.state.selectedServices.length > 0
            && Boolean(this.state.formName)
            && Boolean(this.state.formDescription)
        );
    }

    isCarpentryService = (service: SERVICE): service is CARPENTRY_SERVICE => {
        return (Object.values(CARPENTRY_SERVICE) as SERVICE[]).includes(service);
    }

    handleFormSubmit = () => {
        const mail = 'info@pwoodwork.com';
        const subject = this.state.selectedServices.reduce(
            (newSubject: string, service, index) => {
                const translatedService = (this.isCarpentryService(service) ? this.props.intl.messages[`services.carpentry.${service}`] : this.props.intl.messages[`services.picture_and_artwork_installation.${service}`]) as string;
                const useFallbackAnd = translatedService.toUpperCase().startsWith('I');

                if (index === 0) {
                    return `${newSubject} ${translatedService}`;
                } else if (index < this.state.selectedServices.length - 1) {
                    return `${newSubject}, ${translatedService}`;
                } else {
                    return `${newSubject} ${this.props.intl.messages[useFallbackAnd ? 'and_2' : 'and_1']} ${translatedService}`;
                }
            },
            'Service request: ',
        );
        const body = encodeURI(`${this.state.formDescription}${this.state.formNumber ?  `\n\nPhone number: ${this.state.formNumber}` : ''}`);
        window.open(`mailto:${mail}?subject=${subject}&body=${body}`);
    }

    render() {
        return (
            <div className="contact">
                <div className="contact-left">
                    <div className="contact-left-form">
                        <div className="contact-left-form-title">
                            Let's create together 
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-label">
                                Carpentry Services
                            </div>
                            <div className="contact-left-form-input-container">
                                {Object.values(CARPENTRY_SERVICE).map(service => (
                                    <div
                                        key={`contact-left-form-input-container-option-${service}`}
                                        className={`contact-left-form-input-container-option ${this.state.selectedServices.includes(service) ? 'selected' : ''}`}
                                        onClick={() => this.handleServiceOptionClick(service)}
                                    >
                                        <FormattedMessage id={`services.carpentry.${service}`}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-label">
                                Installation Services
                            </div>
                            <div className="contact-left-form-input-container">
                                {Object.values(INSTALLATION_SERVICE).map(service => (
                                    <div
                                        key={`contact-left-form-input-container-option-${service}`}
                                        className={`contact-left-form-input-container-option ${this.state.selectedServices.includes(service) ? 'selected' : ''}`}
                                        onClick={() => this.handleServiceOptionClick(service)}
                                    >
                                        <FormattedMessage id={`services.picture_and_artwork_installation.${service}`}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-label">
                                Name *
                            </div>
                            <div className="contact-left-form-input-container">
                                <input
                                    type="text"
                                    placeholder="eg. John Wick"
                                    value={this.state.formName}
                                    onChange={this.handleFormNameChange}
                                />
                            </div>
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-label">
                                Phone Number
                            </div>
                            <div className="contact-left-form-input-container">
                                <input
                                    type="text"
                                    placeholder="eg. +1 (202) 843-8938"
                                    value={this.state.formNumber}
                                    onChange={this.handleFormNumberChange}
                                />
                            </div>
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-label">
                                Description *
                            </div>
                            <div className="contact-left-form-input-container">
                                <textarea
                                    placeholder="Please detail your request."
                                    value={this.state.formDescription}
                                    onChange={this.handleFormDescriptionChange}
                                />
                            </div>
                        </div>
                        <div className={`contact-left-form-button ${this.shouldShowSubmitButton() ? 'shown' : ''}`}>
                            <Button text="Submit" onClick={this.handleFormSubmit}/>
                        </div>
                    </div>
                    <div className="contact-left-social-networks">
                        
                    </div>
                </div>
                <div className="contact-right">
                    <img style={{ backgroundImage: 'url(/contact/contact1.jpg)' }} alt=""/>
                </div>
                {this.props.children(this.addSelectedService)}
            </div>
        );
    }
}

export const ContactRoute = injectIntl<'intl', ContactRouteProps>(IntlContactRoute);