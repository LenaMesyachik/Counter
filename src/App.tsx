import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./Display";
import {Settings} from "./Settings";

function App() {
    const [counter, setCounter] = useState<number>(0);
    const [maxCounter, setMaxCounter] = useState<number>(0)
    const [startCounter, setStartCounter] = useState<number>(0)
    const [error, setError] = useState('')

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
    const addCounter = () => {
        if (counter < maxCounter) {
            const newCounter = counter + 1
            setCounter(newCounter)
        }
    }
    const nullCounter = () => {
        setCounter(startCounter)
    }
    const setValue = (startCounter: number) => {
        if (startCounter !== maxCounter)
            setCounter(startCounter)
        else {
            setError('Incorrect value!')
        }

    }
    return (
        <div className={'App'}>
            <div><Settings ChangeError={ChangeError} setValue={setValue} maxCounter={maxCounter}
                           startCounter={startCounter} setMaxCounter={setMaxCounter}
                           setStartCounter={setStartCounter}/></div>
            <div><Display counter={counter} error={error} addCounter={addCounter} nullCounter={nullCounter}
                          maxCounter={maxCounter}
                          startCounter={startCounter} setCounter={setCounter}/></div>
        </div>
    );
}

export default App;
