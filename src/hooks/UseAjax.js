import { useEffect, useState } from "react";

export const useAjax = () => {
    const [id, setId] = useState(null);
    const [user, setUser] = useState(null);
    const getUser = async () => {
        let body = await fetch("https://jsonplaceholder.typicode.com/users");
        let parsedBody = await body.json();

        if (id != null && id > 0) {
            setUser(parsedBody[id - 1]);
        } else {
            setUser(null);

        }
    }
    useEffect(() => { 
        getUser()         
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [id]);
    useEffect(() => {
        getUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);   

    return {        
        user,
        setId
    }
}