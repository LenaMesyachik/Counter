import React from 'react';
import './App.css';
import {Button} from "./Button";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./redux/store";
import {AddCounterAC, NullCounterAC} from "./redux/CounterReducer";


export type DisplayPropsType = {
    error: string
}
export const Display = ({error}: DisplayPropsType) => {

    const counter = useSelector<rootReducerType, number>(state => state.counter.counter) //хук принимает стейт (рут редьюсер) , а возвращает часть стейта ( обращаемся к свойству каунтрер объектра стейт ( рутредьюсер) и достаает из него значение каунтера
    const maxCounter = useSelector<rootReducerType, number>(state=>state.counter.maxCounter)
    const startCounter = useSelector<rootReducerType, number>(state=>state.counter.startCounter)


    const dispatch = useDispatch()



    const disabled = (n: number) => counter === n;
    const incStyle = counter === maxCounter
    const resetStyle = counter === startCounter

    const addCounter = () => {
        if (counter < maxCounter) {
            dispatch(AddCounterAC(counter + 1))
        }
    }
    const nullCounter = () => {
        dispatch(NullCounterAC())
    }


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
                {error ? <div className={'containerError'}>{error}</div> : <div className={'container'}>{counter}</div>}
                <Button disabled={disabled(maxCounter)} className={incStyle ? 'active-button' : 'button'} name={'inc'}
                        callback={addCounter}/>
                <Button disabled={disabled(startCounter)} className={resetStyle ? 'active-button' : 'button'}
                        name={'reset'} callback={nullCounter}/>
            </div>
        </div>
    );
}
