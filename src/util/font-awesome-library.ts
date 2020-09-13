import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faBars,
    faTimes,
    faChevronRight,
    faChevronLeft,
    faHeart,
} from '@fortawesome/free-solid-svg-icons';

import {
    faFacebookF,
    faInstagram,
    faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

export class FontAwesomeLibrary {
    static initializeFontAwesomeLibrary = () => {
        library.add(
            faBars,
            faTimes,
            faChevronRight,
            faChevronLeft,
            faFacebookF,
            faInstagram,
            faWhatsapp,
            faHeart,
        );
    }
}