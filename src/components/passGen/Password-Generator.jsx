import React, { useEffect, useState } from 'react';




function PasswordGenerator() {
  const [length, setLength]                  = useState(4);
  const [charAllowed,setCharAllowed]         = useState(false)
  const [specialAllowed,setSpecialAllowed]   = useState(false)
  const [password,setPassword]               =useState("")

  const rangeChange = (event) => {
    setLength(Number(event.target.value)); 
  };

  function getPassword(){
    let str = 'abcdefghijklmnopqrstuvwxyz'
    let pass = ''

    if(charAllowed) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(specialAllowed) str+="!@#$%^&*(){}"


    if (charAllowed) pass += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random() * 26)];
    if (specialAllowed) pass += '!@#$%^&*(){}'[Math.floor(Math.random() * 12)];

    for(let i = pass.length;i<=length;i++){
      let char = Math.floor(Math.random()*str.length);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }
  useEffect(()=>getPassword(),[length,charAllowed,specialAllowed])
  return (
    <>
      <div className='py-8'>
        <div className='flex flex-wrap justify-center py-4'>
          <input
            type="text"
            readOnly
            placeholder='Password'
            value={password}
            className="border p-2"
            style={{ 
              minWidth: '150px', 
              width: `${Math.max(length * 10, 150)}px` 
            }}
          />
          <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded">
            Copy
          </button>
        </div>
        <div className="flex flex-col items-center gap-2">
          <input
            type="range"
            className="my-2 w-full max-w-xs"
            id='Range'
            min={4}
            max={100}
            value={length} 
            onChange={rangeChange}
          />
          <label htmlFor="Range">Length: {length}</label>

          <div className="flex gap-4 items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5"
              id='Char'
              onChange={()=>{
               setCharAllowed((prev)=>!prev)
              }}
            />
            <label htmlFor="Char">Capital Characters Allowed?</label>

            <input
              type="checkbox"
              className="form-checkbox h-5 w-5"
              id='Special'
              onChange={()=>{
                setSpecialAllowed((prev)=>!prev)
               }}
            />
            <label htmlFor="Special">Special Characters Allowed?</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
