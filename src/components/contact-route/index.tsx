import React, { Component } from 'react';
import { SERVICE } from '../../types/service';
import { FormattedMessage, injectIntl, IntlShape } from 'react-intl';
import { Button } from '../button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

require('./contact-route.scss');

interface ContactRouteProps {
    intl: IntlShape;
    children(
        addSelectedService: (service: SERVICE) => void,
    ): void;
}

const PHONE_NUMBER_REGEX = /^\+?([0-9]*-*\(*\)*[\s]*)*$/g;
const PHONE_NUMBER = '+1 (713) 4785-880';

interface ContactRouteState {
    selectedServices: SERVICE[];
    formName: string;
    formNumber: string;
    formDescription: string;
    showCopyMessage: boolean;
}

class IntlContactRoute extends Component<ContactRouteProps, ContactRouteState> {
    copyMessageTimeoutId?: number;

    constructor(props: ContactRouteProps) {
        super(props);

        this.state = {
            selectedServices: [],
            formName: '',
            formNumber: '',
            formDescription: '',
            showCopyMessage: false,
        };
    }

    componentDidUpdate(prevProps: ContactRouteProps, prevState: ContactRouteState) {
        if (!this.shouldShowSubmitButton(prevState) && this.shouldShowSubmitButton(this.state)) {
            const formElement = document.querySelector<HTMLDivElement>('.contact-left-form');
            if (formElement) {
                formElement.scrollIntoView({ block: 'end' });
            }
        }
    }

    componentWillUnmount() {
        window.clearTimeout(this.copyMessageTimeoutId);
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

    shouldShowSubmitButton = (state: ContactRouteState) => {
        return (
            state.selectedServices.length > 0
            && Boolean(state.formName)
            && Boolean(state.formDescription)
        );
    }

    handleFormSubmit = () => {
        const mail = 'info@pwoodwork.com';
        const subject = this.state.selectedServices.reduce(
            (newSubject: string, service, index) => {
                const translatedService = this.props.intl.messages[`services.${service}`] as string;
                const useFallbackAnd = translatedService.toUpperCase().startsWith('I');

                if (index === 0) {
                    return `${newSubject} ${translatedService}`;
                } else if (index < this.state.selectedServices.length - 1) {
                    return `${newSubject}, ${translatedService}`;
                } else {
                    return `${newSubject} ${this.props.intl.messages[useFallbackAnd ? 'and_2' : 'and_1']} ${translatedService}`;
                }
            },
            `${this.props.intl.messages['contact.email.service_request']}: `,
        );
        const body = encodeURI(`${this.state.formDescription}${this.state.formNumber ?  `\n\n${this.props.intl.messages['contact.email.phone_number']}: ${this.state.formNumber}` : ''}`);
        window.open(`mailto:${mail}?subject=${subject}&body=${body.replace('+', '%2B')}`);
    }

    isMobilePhone = () => {
        const iosUserAgentRegex = /(iPhone|iPad|iPod)/;
        const androidUserAgentRegex = /Android/;

        return iosUserAgentRegex.test(window.navigator.userAgent) || androidUserAgentRegex.test(window.navigator.userAgent);
    }

    handleWhatsappClick = () => {
        if (this.isMobilePhone()) {
            window.open(`tel:${PHONE_NUMBER}`);
        } else {
            const phoneNumberInputElement = document.querySelector<HTMLInputElement>('#phone-number-input');
            if (phoneNumberInputElement) {
                phoneNumberInputElement.select();
                phoneNumberInputElement.setSelectionRange(0, PHONE_NUMBER.length);
                document.execCommand("copy");
    
                if (!this.state.showCopyMessage) {
                    this.setState(
                        { showCopyMessage: true },
                        () => {
                            window.setTimeout(
                                () => {
                                    this.setState({ showCopyMessage: false });
                                },
                                3000,
                            );
                        },
                    );
                }
            }
        }
    }

    handleInstagramClick = () => {
        window.open('https://www.instagram.com/precise_woodwork_and_services/');
    }

    handleFacebookClick = () => {
        window.open('https://www.facebook.com/pwoodwks');
    }

    render() {
        return (
            <div className="contact">
                <div className="contact-left">
                    <div className="contact-left-form">
                        <div className="contact-left-form-title">
                            <FormattedMessage id="contact.title"/>
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-container">
                                {Object.values(SERVICE).map(service => (
                                    <div
                                        key={`contact-left-form-input-container-option-${service}`}
                                        className={`contact-left-form-input-container-option ${this.state.selectedServices.includes(service) ? 'selected' : ''}`}
                                        onClick={() => this.handleServiceOptionClick(service)}
                                    >
                                        <FormattedMessage id={`services.${service}`}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-label">
                                <FormattedMessage id="contact.name.label"/>
                                <span className="contact-left-form-input-label-required">*</span>
                            </div>
                            <div className="contact-left-form-input-container">
                                <input
                                    type="text"
                                    placeholder={this.props.intl.messages['contact.name.placeholder'] as string}
                                    value={this.state.formName}
                                    onChange={this.handleFormNameChange}
                                />
                            </div>
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-label">
                                <FormattedMessage id="contact.phone_number.label"/>
                            </div>
                            <div className="contact-left-form-input-container">
                                <input
                                    type="text"
                                    placeholder={this.props.intl.messages['contact.phone_number.placeholder'] as string}
                                    value={this.state.formNumber}
                                    onChange={this.handleFormNumberChange}
                                />
                            </div>
                        </div>
                        <div className="contact-left-form-input">
                            <div className="contact-left-form-input-label">
                                <FormattedMessage id="contact.description.label"/>
                                <span className="contact-left-form-input-label-required">*</span>
                            </div>
                            <div className="contact-left-form-input-container">
                                <textarea
                                    placeholder={this.props.intl.messages['contact.description.placeholder'] as string}
                                    value={this.state.formDescription}
                                    onChange={this.handleFormDescriptionChange}
                                />
                            </div>
                        </div>
                        <div className={`contact-left-form-buttons ${this.shouldShowSubmitButton(this.state) ? 'shown' : ''}`}>
                            <div className="contact-left-form-buttons-social" onClick={this.handleWhatsappClick}>
                                <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'whatsapp' }}/>
                            </div>
                            <div className="contact-left-form-buttons-social" onClick={this.handleInstagramClick}>
                                <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'instagram' }}/>
                            </div>
                            <div className="contact-left-form-buttons-social" onClick={this.handleFacebookClick} style={{ fontSize: 22 }}>
                                <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'facebook-f' }}/>
                            </div>
                            <Button text={<FormattedMessage id="contact.submit"/>} onClick={this.handleFormSubmit}/>
                        </div>
                    </div>
                    <div className="contact-left-social-networks">
                        
                    </div>
                </div>
                <div className="contact-right">
                    <img style={{ backgroundImage: 'url(/contact/contact3.gif)' }} alt=""/>
                </div>
                <div className="contact-copy-message">
                    <div className={`contact-copy-message-text ${this.state.showCopyMessage ? 'shown' : ''}`}>
                        Se ha copiado: {PHONE_NUMBER}
                    </div>
                </div>
                {this.props.children(this.addSelectedService)}
                <input
                    type="text"
                    name="phone-number"
                    id="phone-number-input"
                    value={PHONE_NUMBER}
                    readOnly={true}
                    style={{ position: 'absolute', top: '-100%' }}
                />
            </div>
        );
    }
}

export const ContactRoute = injectIntl<'intl', ContactRouteProps>(IntlContactRoute);