import React, {ChangeEvent} from 'react';
import './App.css';


export type InputPropsType = {
    className?:string
    counter:number
    callBack:(value:number)=>void
}
export const Input = ({className,...props}: InputPropsType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.valueAsNumber)}
    return (
        <div>
                <input type='number' value={props.counter}  className={className} onChange={onChangeHandler}/>
        </div>

    );
}
