import { useState } from "react";

export const useUpperLowerCase = (text) => {
    const [result, setResult] = useState("");
    const upper = ()=>{
        setResult(text.toUpperCase());
    }
    const lower = ()=>{
        setResult(text.toLowerCase());
    }

    return {result, upper, lower}
}