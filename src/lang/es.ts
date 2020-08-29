import { toPlainObject } from '../util/to-plain-object';
import { CARPENTRY_SERVICE, INSTALLATION_SERVICE } from '../types/service';

export const es = toPlainObject({
    and_1: 'y',
    and_2: 'e',
    navbar: {
        home: 'Inicio',
        about: 'Acerca',
        services: 'Servicios',
        projects: 'Proyectos',
        contact: 'Contacto',
    },
    home: {

    },
    about: {

    },
    services: {
        carpentry: {
            title: 'Carpintería',
            [CARPENTRY_SERVICE.KITCHEN_CABINETS]: 'Gabinetes de cocina',
            [CARPENTRY_SERVICE.CLOSETS]: 'Closets',
            [CARPENTRY_SERVICE.VANITIES]: 'Tocadores',
            [CARPENTRY_SERVICE.TRIM]: 'Recorte (zócalo, carcasa, moldadura de techo, etc)',
            [CARPENTRY_SERVICE.MANTELS]: 'Chimeneas',
            [CARPENTRY_SERVICE.STAIRS]: 'Gradas',
        },
        picture_and_artwork_installation: {
            title: 'Instalación de fotografía y arte',
            [INSTALLATION_SERVICE.ARTWORK]: 'Instalación de fotografía y arte',
            [INSTALLATION_SERVICE.CURTAINS]: 'Instalación de cortinas y persianas',
        },
        
    },
    projects: {

    },
    contact: {

    },
});