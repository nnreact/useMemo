import { memo } from "react";

function Counter({ count }) {
    
    console.log("Counter Rendered: "+ count);

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}

export default memo(Counter)