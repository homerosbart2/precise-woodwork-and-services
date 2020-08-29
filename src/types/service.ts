export enum CARPENTRY_SERVICE {
    KITCHEN_CABINETS = 'kitchen_cabinets',
    CLOSETS = 'closets',
    VANITIES = 'vanities',
    TRIM = 'trim',
    MANTELS = 'mantels',
    STAIRS = 'stairs',
}

export enum INSTALLATION_SERVICE {
    ARTWORK = 'artwork',
    CURTAINS = 'curtaions',
}

export type SERVICE = CARPENTRY_SERVICE | INSTALLATION_SERVICE;