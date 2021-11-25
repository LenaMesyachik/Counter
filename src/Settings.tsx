import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Input} from "./Input";


export type SettingsPropsType = {
    maxCounter:number,
    startCounter:number,
    setMaxCounter:(value:number)=>void
    setStartCounter:(value:number)=>void
    ChangeError:()=>void
    setValue:(startCounter:number)=>void

}

export const Settings = ({maxCounter,ChangeError, setValue, startCounter,setStartCounter,setMaxCounter, ...props}: SettingsPropsType) => {

    const onChangeStartValue=(value:number)=>{
        if (value)
        setStartCounter(value)
    }
    const onChangeMaxValue=(value:number)=>{
        setMaxCounter(value)
    }
    const setCounterValue=()=>{setValue(startCounter)}
    const disabled = () => maxCounter === startCounter;
    const disabledStyle=maxCounter === startCounter
        return (
        <div className={'body'}>
            <div className={'container'}>
                <div className={'Counter'}>maxCounter</div>
                <Input className={disabledStyle ? 'inputError':'input'} counter={maxCounter} callBack={onChangeMaxValue}/>
                <div className={'Counter'}>startCounter</div>
                <Input className={disabledStyle ? 'inputError':'input'} counter={startCounter} callBack={onChangeStartValue} />
            </div>
            <Button disabled={disabled()} className={disabledStyle ? 'active-button' : 'button'}name={'set'} callback={setCounterValue} />
        </div>
    );
}
