import React from 'react'
import { useUpperLowerCase } from '../hooks/UpperLowerCaseHook'

export const TestingCustomHooks = () => {
    const {result, upper, lower} = useUpperLowerCase("heLlo");
    console.log(upper, lower)

    return (
        <div>
            <h1>TestingCustomHooks</h1>
            <h2>{result}</h2>
            <div>
                <button onClick={e=>upper()}>UpperCase</button>
                <button onClick={e=>lower()}>LowerCase</button>
            </div>
        </div>
    )
}
