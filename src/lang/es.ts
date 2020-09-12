import { toPlainObject } from '../util/to-plain-object';
import { SERVICE } from '../types/service';

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
        hello_we_are: 'Nosotros somos',
        presentation_card: {
            title: 'En PWS',
            description: 'Nuestro enfoque es el cliente y sus necesidades, no apresurando el trabajo para ofrecer un servicio de alto valor.',
        },
        our_services: 'Nuestros servicios',
    },
    about: {
        title: 'Acerca de nosotros',
        description: 'En Precise Woodwork and Services, tenemos la misión de entregarle un producto de la más alta calidad y una ejecución detallada.'
    },
    services: {
        title: 'Carpintería e instalaciones',
        [SERVICE.KITCHEN_CABINETS]: 'Gabinetes de cocina',
        [SERVICE.CLOSETS]: 'Closets',
        [SERVICE.VANITIES]: 'Tocadores',
        [SERVICE.TRIM]: 'Molduras (dinteles, carcasa, cornisas, etc)',
        [SERVICE.MANTELS]: 'Chimeneas',
        [SERVICE.STAIRS]: 'Gradas',
        [SERVICE.ARTWORK]: 'Instalación de fotografía y arte',
        [SERVICE.CURTAINS]: 'Instalación de cortinas y persianas',
        button: 'Más información',
    },
    contact: {
        title: 'Servicios de carpintería e instalación',
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
            placeholder: 'Por favor, detalle su solicitud.',
        },
        submit: 'Enviar',
        email: {
            service_request: 'Solicitud de servicio',
            phone_number: 'Número de teléfono',
        },
    },
});