import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Settings} from "./Settings";
import {useDispatch,} from "react-redux";


function App() {
    const [counter, setCounter] = useState<number>(0);
    const [error, setError] = useState('')


    const dispatch = useDispatch()

    const ChangeError = () => {
        setError('Incorrect value!')
        /*setError('')*/
    }
    useEffect(() => {
        const valueString = localStorage.getItem('counterValue')
        if (valueString) {
            let newValue = JSON.parse(valueString)
            setCounter(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(counter))
    }, [counter])


    return (
        <div className={'App'}>
            <div><Settings ChangeError={ChangeError}/></div>
            <div><Display error={error}/></div>
        </div>
    );
}

export default App;
