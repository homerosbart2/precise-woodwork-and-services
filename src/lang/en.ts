import { toPlainObject } from '../util/to-plain-object';
import { CARPENTRY_SERVICE, INSTALLATION_SERVICE } from '../types/service';

export const en = toPlainObject({
    and_1: 'and',
    and_2: 'and',
    navbar: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        projects: 'Projects',
        contact: 'Contact',
    },
    home: {
        hello_we_are: 'Hello, we are',
        presentation_card: {
            title: 'Lorem ipsum dolor',
            description: 'Our focus is our client and their needs, to offer a great service and value, not speeding through the job and getting it done.',
        },
        our_services: 'Our services',
    },
    about: {

    },
    services: {
        carpentry: {
            title: 'Carpentry',
            [CARPENTRY_SERVICE.KITCHEN_CABINETS]: 'Kitchen Cabinets',
            [CARPENTRY_SERVICE.CLOSETS]: 'Closets',
            [CARPENTRY_SERVICE.VANITIES]: 'Vanities',
            [CARPENTRY_SERVICE.TRIM]: 'Trim (Baseboard, Casing, Crown Molding, etc)',
            [CARPENTRY_SERVICE.MANTELS]: 'Mantels',
            [CARPENTRY_SERVICE.STAIRS]: 'Stairs',
        },
        picture_and_artwork_installation: {
            title: 'Installation',
            [INSTALLATION_SERVICE.ARTWORK]: 'Picture and Artwork Installation',
            [INSTALLATION_SERVICE.CURTAINS]: 'Curtains and Blinds Installation',
        },
        
    },
    projects: {

    },
    contact: {
        title: 'Let\'s Create Together ',
        carpentry_services: 'Carpentry Services',
        installation_services: 'Installation Services',
        name: {
            label: 'Name',
            placeholder: 'E.g. John Wick',
        },
        phone_number: {
            label: 'Phone Number',
            placeholder: 'E.g. +1 (202) 843-8938',
        },
        description: {
            label: 'Description',
            placeholder: 'Please detail your request.',
        },
        submit: 'Submit',
        email: {
            service_request: 'Service request',
            phone_number: 'Phone number',
        },
    },
});