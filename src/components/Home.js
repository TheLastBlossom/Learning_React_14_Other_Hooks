import React, { useId } from 'react'

export const Home = () => {
    const id1 = useId();
    const id2 = useId();
    const id3 = useId();
    const id4 = useId();
    const id5 = useId();
    console.log(id1, id2, id3, id4, id5);
    return (
        <div>Home</div>
    )
}
