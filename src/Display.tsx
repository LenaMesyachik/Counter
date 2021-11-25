import React, {useState} from 'react';
import './App.css';
import {Button} from "./Button";


export type DisplayPropsType = {
    counter: number,
    addCounter: () => void
    nullCounter: () => void
    maxCounter: number
    startCounter: number
    setCounter:(value:number)=>void
    error:string
}
export const Display = ({counter,error, addCounter, nullCounter, maxCounter, startCounter}: DisplayPropsType) => {

    const disabled = (n: number) => counter === n;
    const incStyle = counter === maxCounter
    const resetStyle = counter === startCounter


/*    const setLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
        localStorage.setItem('counterValue+1', JSON.stringify(counter+1))
    }
    const getFromLocalStorageHandler = () => {
        debugger
        let valueString=localStorage.getItem('counterValue')
        if (valueString) {
            debugger
        let newValue=JSON.parse(valueString)
        setCounter(newValue)
    }}
    const clearLocalStorageHandler=()=>{
        localStorage.clear()
        setCounter(minCounter)
    }
    const removeLocalStorageHandler=()=>{
        localStorage.removeItem('counterValue+1')
    }*/
    return (
        <div>

            <div className={'body'}>
                {error?<div className={'containerError'}>{error}</div>:<div className={'container'}>{counter}</div>}
                <Button disabled={disabled(maxCounter)} className={incStyle ? 'active-button' : 'button'} name={'inc'}
                        callback={addCounter}/>
                <Button  disabled={disabled(startCounter)} className={resetStyle ? 'active-button' : 'button'}
                        name={'reset'} callback={nullCounter}/>
            </div>
        </div>
    );
}
