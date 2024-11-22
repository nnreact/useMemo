import React, { useCallback, useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './components/ui/card'
import { Button } from './components/ui/button'
import SearchBar from './components/SearchBar';


const initialStudents = ["divya", "diya", "dimple", "krishna", "mohit", "raj", "dipen"]

function List() {

    const [students, setStudents] = useState(initialStudents);
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(prev => prev = e.target.value);
        setStudents(initialStudents.filter(student => student.toLowerCase().includes(e.target.value.toLowerCase())));
    }, [searchValue])

const handleShuffle = () => {
    const shuffledStudents = [...students].sort(() => Math.random() - 0.5);
    setStudents(shuffledStudents);
}

console.log("list re-rendered")

return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <Card>
            <CardHeader>
                <CardTitle>Student List</CardTitle>
            </CardHeader>
            <CardContent>
                <div className='w-full gap-2 flex justify-between items-center'>
                    <SearchBar onChange={handleSearch} />
                    <Button onClick={handleShuffle} >Shuffle</Button>
                </div>

                <ul className='w-full mt-4 flex flex-col gap-2'>
                    {
                        students.map((item, index) => (
                            <li key={index} className='p-2 rounded-md border border-gray-300'>{item}</li>
                        ))
                    }
                </ul>

            </CardContent>
        </Card>
    </div>
)
}

export default List