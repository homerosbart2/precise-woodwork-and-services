import { toPlainObject } from '../util/to-plain-object';
import { SERVICE } from '../types/service';

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
        hello_we_are: 'We are',
        presentation_card: {
            title: 'At PWS',
            description: 'Our focus is our client and their needs, to offer a great service and value, not speeding through the job and getting it done.',
        },
        our_services: 'Our services',
    },
    about: {
        title: 'About us',
        description: 'At Precise Woodwork and services, we are on a mission to delivery you the highest quality product and detailed execution.'
    },
    services: {
        title: 'Carpentry and Installations',
        [SERVICE.KITCHEN_CABINETS]: 'Kitchen Cabinets',
        [SERVICE.CLOSETS]: 'Closets',
        [SERVICE.VANITIES]: 'Vanities',
        [SERVICE.TRIM]: 'Trim (Baseboard, Casing, Crown Molding, etc)',
        [SERVICE.MANTELS]: 'Mantels',
        [SERVICE.STAIRS]: 'Stairs',
        [SERVICE.ARTWORK]: 'Picture and Artwork Installation',
        [SERVICE.CURTAINS]: 'Curtains and Blinds Installation',
        button: 'More info',
    },
    projects: {

    },
    contact: {
        title: 'Carpentry and Installation Services',
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
            placeholder: 'Please, detail your request.',
        },
        submit: 'Submit',
        email: {
            service_request: 'Service request',
            phone_number: 'Phone number',
        },
    },
});