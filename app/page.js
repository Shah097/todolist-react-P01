"use client"

import React, { useState } from 'react'

const page = () => {

  const [tittle, settittle] = useState("")
  const [desc, setdesc] = useState("")
  const [maintask, setmaintask] = useState([])
  const delethandle = (i) =>{
    let copytask = [...maintask]
    copytask.splice(i,1)
    setmaintask(copytask)
  }
  let rendertask = <h2>NO Task.</h2>

 if (maintask.length>0) {
  rendertask = maintask.map((t,i)=>{
    return(
     
      <ol className=' list-decimal list-inside'>
         <li typeof=' number' className=' flex
        items-center justify-center mb-4'>
      <div className='  flex items-center justify-between  w-2/3 '>
          
          <div className='  w-96  whitespace-normal'>
          <h5 className=' whitespace-normal text-2xl  font-bold'>{t.tittle}</h5>
          </div>

          <div className=' w-96'>
          <h6 className=' text-xl '>{t.desc}</h6>
          </div>
          
          <button onClick={()=>{
            delethandle(i)
          }} className=' font-bold bg-red-300 px-5 py-2 rounded-sm text-white'>Delete</button>
        </div>
      </li>
      </ol>
     
    );
  })
 }

  const submithandler=(e)=>{
    e.preventDefault()
     setmaintask([...maintask,{tittle,desc}])
    setdesc("")
    settittle("")
    console.log(maintask);
  }

  return (
    <div>
      <h1 className='bg-black text-white text-5xl font-bold text-center' value={tittle} >Manveer's Todo list</h1>
      
     <form onSubmit={submithandler} >

     <input className='p-5 font-bold text-center border-zinc-600  border-2 rounded-xl  m-5 'placeholder="Enter your tittle"  value={tittle} onChange={(elem)=>{
          settittle(elem.target.value)
     }} type='text '/>

     <input className='p-5 font-bold text-center border-zinc-600  border-2 rounded-xl  m-5 'placeholder="Enter Description. "  type='text' value={desc} onChange={(elem)=>{setdesc(elem.target.value)}}     />

     <button className=' py-3 px-3 bg-black text-white rounded-lg  font-bold  m-7'>Add Task</button>
     </form>
      <hr/>

     <div className=' bg-slate-300 p-5 '>

     <ul>
     {rendertask}
     </ul>

     </div>

    </div>
  )
}

export default page


// 1. e.preventDefult() :- It is a default function which is used to stop the reloading of form after submiting.

// 2. Spread opreator(...) :- It is used to store data but when we store  first data after that when store second data then first data will erase automatically .To prevent that condiciton we use spread operator to store one or more than on data.