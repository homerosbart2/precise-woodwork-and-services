import React from 'react';

require('./loader.scss');

interface LoaderProps {
    shown: boolean;
}

export function Loader(props: LoaderProps) {
    return (
        <div className={`loader ${props.shown ? 'shown' : ''}`}/>
    );
}