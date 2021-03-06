import React from "react";

require('./button.scss');

interface ButtonProps {
    text:  JSX.Element | string;
    onClick(): void;
}

export function Button(props: ButtonProps) {
    return (
        <div onClick={props.onClick} className="button">
            {props.text}
        </div>
    )
}