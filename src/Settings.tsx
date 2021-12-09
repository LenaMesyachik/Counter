import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Button} from "./Button";
import {Input} from "./Input";
import {useDispatch, useSelector} from "react-redux";
import {ChangeMaxValueAC, ChangeStartValueAC, SetErrorAC, SetValueAC} from "./redux/CounterReducer";
import {rootReducerType} from "./redux/store";


export type SettingsPropsType = {
    ChangeError: () => void


}

export const Settings = ({ChangeError ,...props}: SettingsPropsType) => {


    const maxCounter = useSelector<rootReducerType, number>(state => state.counter.maxCounter)
    const startCounter = useSelector<rootReducerType, number>(state => state.counter.startCounter)
    const dispatch = useDispatch()


    const onChangeStartValue = (value: number) => {
        dispatch(ChangeStartValueAC(value))
    }
    const onChangeMaxValue = (value: number) => {
        dispatch(ChangeMaxValueAC(value))
    }

    const disabled = () => maxCounter === startCounter;
    const disabledStyle = maxCounter === startCounter


        const setValue = (startCounter: number) => {
        let errMessage = 'Error'
            if (startCounter !== maxCounter)
                dispatch(SetValueAC(startCounter))
            else {
                dispatch(SetErrorAC(errMessage))
            }

        }
    return (
        <div className={'body'}>
            <div className={'container'}>
                <div className={'Counter'}>maxCounter</div>
                <Input className={disabledStyle ? 'inputError' : 'input'} counter={maxCounter}
                       callBack={onChangeMaxValue}/>
                <div className={'Counter'}>startCounter</div>
                <Input className={disabledStyle ? 'inputError' : 'input'} counter={startCounter}
                       callBack={onChangeStartValue}/>
            </div>
            <Button disabled={disabled()} className={disabledStyle ? 'active-button' : 'button'} name={'set'}
                    callback={()=>setValue(startCounter)}/>
        </div>
    );
}
