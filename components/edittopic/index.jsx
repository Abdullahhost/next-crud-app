

'use client'

import React, { useState } from 'react'

import { useRouter } from 'next/navigation'
import { HiPencilAlt } from "react-icons/hi" 

const EditTopic = ({ id, title, description }) => {

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);


  const router = useRouter();

  const handleSubmit =  async (e) => {
  
    e.preventDefault();
    try{
      const res = await fetch(`http://localhost:3000/api/todo/${id}`, {method: "PUT", headers: {"Content-type" : "application/json"} , body: JSON.stringify({newTitle, newDescription})},);

      if(!res.ok){
        throw new Error('Failed to put method')
      }

      router.push('/');
      router.refresh();
    }catch(err){
      console.log(err)
    }
  
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className='my-4 flex flex-col w-10/12 md:w-8/12 ml-10 mt-40 justify-between gap-4' >
        <div className='w-full'> 
          <input type="text" 
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder='Enter A Title' 
            title='Enter A valid Title' 
            className='w-full border-b active:border-green-400 p-2 ring-1 ring-violet-300 rounded-md focus:ring-offset-4 focus:outline-violet-700' />
        </div>

        <div className='w-full'>
          <input
          onChange={(e) => setNewDescription(e.target.value)}
          type="text" placeholder='Enter A Description' title='Enter A Description' 
          className="w-full border-b active:border-green-400 p-2 ring-1 ring-violet-300 rounded-md focus:ring-offset-4 focus:outline-violet-700 "
          value={newDescription}
          />
        </div>

        <div>
          <button type='submit' className='flex items-center gap-2 border-b-4  border-violet-500 bg-slate-800 text-slate-50 px-4 py-2 rounded-md'>
             
            <HiPencilAlt />
            <span>Edit Todo</span>
            
            </button>
        </div>
      </form>
    </div>
  )
}

export default EditTopic
