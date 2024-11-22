import React, { useState } from 'react'
import Counter from './Counter';

function Parent() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log("Parent Rendered");
    

    return (
        <div>
            <Counter count={count} />
            <h1>Count2: {count2}</h1>
            <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setCount(prev => prev + 1)}>Increment Count</button>
            <button className='bg-blue-500 text-white p-2 rounded-md' onClick={() => setCount2(prev => prev + 1)}>Increment Count2</button>
        </div>
    )
}

export default Parent