import { useState } from "react"

const Counter  =()=>{


    const [counter,set_counter] = useState(0)


const handleinc =()=>{
    set_counter(counter+1)
}
const handledec =()=>{
    if(counter <= 0){
        set_counter(0);
        return;
    } 
     set_counter(counter-1)
}

    return (
        <>
        <section className="w-full h-screen flex justify-center items-center">
            <div className="flex w-96 h-80 flex-col bg-gray-100 justify-center items-center shadow-lg rounded-md">
                <span className="text-4xl font-bold ">{counter}</span>

                <div className="mt-10 flex  flex-row-reverse">
                <button onClick={handleinc} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Inc.</button>
                <button  onClick={handledec} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Dec.</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default Counter