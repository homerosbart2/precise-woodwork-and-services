import React from 'react';

require('./contact-route.scss');

interface ContactRouteProps {

}

export function ContactRoute(props: ContactRouteProps) {
    return (
        <div className="contact">
            <div className="contact-left">
                <div className="contact-left-form">
                    
                </div>
                <div className="contact-left-social-networks">
                    
                </div>
            </div>
            <div className="contact-right">
                <img style={{ backgroundImage: 'url(/contact/contact.jpg)' }} alt=""/>
            </div>
        </div>
    );
}