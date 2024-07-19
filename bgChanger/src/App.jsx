import { useState } from 'react'
function App() {
let [color, setColor] = useState("#e5e7eb");

  return (
    <>
      <div className="w-full h-screen flex flex-wrap justify-center" style={{backgroundColor: color}}> 
        <div className="bg-white fixed rounded-full shadow-md flex flex-wrap bottom-16 gap-2 py-4 px-5">

          <button onClick={()=>setColor("red")} className='p-4 w-32 rounded-full bg-red-600 text-white shadow-lg border-solid border-2'>
            Red
          </button>

          <button onClick={()=>setColor("green")} className='p-4 w-32 rounded-full bg-green-600 text-white shadow-lg border-solid border-2'>
            Green
          </button>

          <button onClick={()=>setColor("black")} className='p-4 w-32 rounded-full bg-black text-white shadow-lg border-solid border-2'>
            Black
          </button>

          <button onClick={()=>setColor("Orange")} className='p-4 w-32 rounded-full bg-orange-600 text-white shadow-lg border-solid border-2'>
            Orange
          </button>

          <button onClick={()=>setColor("white")} className='p-4 w-32 rounded-full bg-white text-black shadow-lg border-solid border-2'>
            White
          </button>
        </div>
      </div>
    </>
  )
}

export default App
