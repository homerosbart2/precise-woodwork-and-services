import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faBars,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

export class FontAwesomeLibrary {
    static initializeFontAwesomeLibrary = () => {
        library.add(
            faBars,
            faTimes,
        );
    }
}