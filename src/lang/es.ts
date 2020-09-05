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
        hello_we_are: 'Hola, nosotros somos',
        presentation_card: {
            title: 'Lorem ipsum dolor',
            description: 'Nuestro enfoque es el cliente y sus necesidades, para ofrecer un servicio de alto valor, no apresurando el trabajo.',
        },
        our_services: 'Nuestros servicios',
    },
    about: {

    },
    services: {
        carpentry: {
            title: 'Carpintería',
            [CARPENTRY_SERVICE.KITCHEN_CABINETS]: 'Gabinetes de cocina',
            [CARPENTRY_SERVICE.CLOSETS]: 'Closets',
            [CARPENTRY_SERVICE.VANITIES]: 'Tocadores',
            [CARPENTRY_SERVICE.TRIM]: 'Molduras (zócalo, carcasa, moldadura de techo, etc)',
            [CARPENTRY_SERVICE.MANTELS]: 'Chimeneas',
            [CARPENTRY_SERVICE.STAIRS]: 'Gradas',
        },
        picture_and_artwork_installation: {
            title: 'Instalaciones',
            [INSTALLATION_SERVICE.ARTWORK]: 'Instalación de fotografía y arte',
            [INSTALLATION_SERVICE.CURTAINS]: 'Instalación de cortinas y persianas',
        },
        
    },
    contact: {
        title: 'Construyamos juntos',
        carpentry_services: 'Servicios de carpintería',
        installation_services: 'Servicios de instalación',
        name: {
            label: 'Nombre',
            placeholder: 'Ej. Antonio Banderas',
        },
        phone_number: {
            label: 'Número de teléfono',
            placeholder: 'Ej. +1 (202) 843-8938',
        },
        description: {
            label: 'Descripción',
            placeholder: 'Por favor detalle su solicitud.',
        },
        submit: 'Enviar',
        email: {
            service_request: 'Solicitud de servicio',
            phone_number: 'Número de teléfono',
        },
    },
});