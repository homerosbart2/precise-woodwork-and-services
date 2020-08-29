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
            title: 'Picture and Artwork Installation',
            [INSTALLATION_SERVICE.ARTWORK]: 'Picture and Artwork Installation',
            [INSTALLATION_SERVICE.CURTAINS]: 'Curtains and Blinds Installation',
        },
        
    },
    projects: {

    },
    contact: {

    },
});