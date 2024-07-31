import { useState,useCallback, useEffect } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(6)
  const [addnum,setaddnum] = useState(false)
  const [addchar,setaddchar] = useState(false)
  const [password,setpassword] = useState("")


  const passwordGenerator = useCallback(()=>{

    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVQXYZabcdefgijklmnopqrstuvwxyz"
    if(addnum) str+="0123456789"
    if(addchar) str+="!@#$%^&*()_"

    for (let index = 0; index < length; index++) {
      let randomIndex = Math.floor(Math.random()*str.length)

      pass+=str.charAt(randomIndex)
      
    }

    setpassword(pass)

  },[length,addchar,addnum,password])

  useEffect(()=>{passwordGenerator()},[length,addchar,addnum])

  return (
    <>
    <div className='flex items-center flex-col w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-white'>
      <h1 className='font-bold  text-lg'>
        Password Generator</h1>
      
      <div className='px-5 py-2 bg-blue-300 rounded-full my-5'>
        <input type="text" value={password} readOnly/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white text-center px-2 rounded-r-full'>
          Copy
          </button>
      </div>

      <div className='flex gap-3 items-center flex-wrap'>
        
        <div className='flex'>
          <input type="range" min="1" max="10" onChange={(e)=>{
            setLength(e.target.value)
          }}/>
          <label>length:{length}</label>
        </div>

           

        <div className='flex'>
        <input type="checkbox" onChange={()=>{setaddnum((prev)=>!prev)}}/>
        <label >Number</label>
        </div>
        
        
        
        <div className='flex'>
          <input type="checkbox" onChange={()=>{setaddchar((prev)=>!prev)}} />
          <label >Character</label>
        </div>

        <div className='flex'>
        <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={passwordGenerator}
        >Generate</button>
        </div>
      </div>

      </div>
    </>
  )
}

export default App
