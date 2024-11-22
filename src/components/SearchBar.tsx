import { memo } from "react";

function SearchBar({
    onChange
}) {

    console.log("SearchBar Rerendered");
    // console.log("SearchBar Rerendered",onChange);
    

    return (
        <input onChange={onChange} type="text" placeholder='Search Student' className='w-full p-2 rounded-md border border-gray-300' />
    )
}

export default memo(SearchBar)