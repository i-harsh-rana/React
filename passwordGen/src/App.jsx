import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllow, setNumberAllow] = useState(false)
  const [charAllow, setCharAllow] = useState(false)
  const [password, setPassword] = useState("")
  
  const passRef = useRef(null);

  const passwordGen = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnobqrstuvwxyz"
    if(numberAllow) str += "0123456789"
    if(charAllow) str += "!@#$%)(*&^"

    for(let i = 0; i<length; i++){
      let chr = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(chr)
    }
    setPassword(pass);
  }, [length, numberAllow, charAllow, setPassword])

  useEffect(()=>{
    passwordGen()
  }, [length, numberAllow,length, charAllow, passwordGen]);


  const copyText = useCallback(()=>{
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center align items-center '>
        <div className='p-5 white border border-gray-200 rounded-lg shadow rounded-xl'>
        <h2 className='text-center mb-5 mt-1 antialiased font-bold text-2xl'>Password Generator</h2>
          <div>
            <input readOnly type="text" style={{width: "400px"}} value={password} className='border border-gray-200 rounded-s-lg p-2' ref={passRef}/>
            <button className='rounded-e-lg bg-blue-600 p-2 px-3 text-white border border-blue-600 hover:bg-blue-500 active:bg-blue-700' onClick={copyText}>Copy</button>
          </div>
          <div className='mt-5 flex flex-wrap justify-between'>
            <div>
            <input type="range" id='range' min={8} max={30} value={length} onChange={(e)=>{setLength(e.target.value)}} />
            <label className='pl-3' htmlFor="range" value={length}></label> Length: {length}
            </div>
            <div>
            <input type="checkbox" defaultChecked={numberAllow} id='checkbox' onChange={()=>{setNumberAllow((pre)=>!pre)}}/>
            <label className='pl-3' htmlFor="checkbox">Number</label>
            </div>
            <div>
            <input type="checkbox" defaultChecked={charAllow} id='char' onChange={()=>{setCharAllow((pre)=>!pre)}}/>
            <label className='pl-3' htmlFor="char">Char</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
