import React from 'react';
import './App.css';


export type PropsButtonType = {
    name: string
    callback: () => void
    disabled?: boolean
    className?:string
}
export const Button = (props: PropsButtonType) => {

    return (
        <>
            <button  className={props.className} disabled= {props.disabled} onClick={props.callback}>{props.name}</button>
        </>
    );
}
