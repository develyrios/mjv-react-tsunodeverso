import { useState } from 'react';

export const States = () => {
    const [count, setCount] = useState(0);

    function add(){
        setCount(count + 1);
    }

    function sub(){
        setCount(count +-1);
    }


    return(
        <main>
            <h1>Contador: {count}</h1>
            <button onClick={add}> + </button>
            <button onClick={sub}> - </button>
        </main>
    )
}