// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { useMemo, useState } from "react";
// import { initalItems } from "./support";

// import Parent from "./components/Parent"
import List from "./List"

// function App() {

//     const [count, setCount] = useState(0);

//     const [items,setItems] = useState(initalItems)


//     const selectedItem = useMemo(() => {
//         return items.find(item => item.isSelected)
//     }, [items]);

//     return (
//         <div className="h-screen w-screen flex justify-center items-center gap-8">
//             <Card className="w-[400px] h-[400px]">
//                 <CardContent className="h-full flex flex-col gap-4 justify-center items-center">
//                     <h1 className="text-2xl font-bold">Counter</h1>
//                     <h1 className="text-lg font-semibold">{count}</h1>
//                     <Button onClick={() => setCount(prev => prev + 1)}>Increment</Button>
//                 </CardContent>
//             </Card>
//             <Card className="w-[400px] h-[400px]">
//                 <CardContent className="h-full flex flex-col gap-4 justify-center items-center">
//                     <h1 className="text-2xl font-bold">Selected Item</h1>
//                     <h1 className="text-lg font-semibold">{selectedItem?.id}</h1>
//                 </CardContent>
//             </Card>
//         </div>
//     )
// }

// export default App


function App() {
    return (
        <div>
            {/* <Parent /> */}
            <List />
        </div>
    )
}

export default App