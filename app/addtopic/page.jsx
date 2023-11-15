
"use client"

import React, { useState } from 'react'
import { useRouter}  from 'next/navigation' 

import { HiPencilAlt } from "react-icons/hi"

const AddTopic = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")

  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Title And Description both are Required!')
      return;
    }

    try{
      const res = await fetch("http://localhost:3000/api/todo", {
        method: "POST",
        headers: {
          "Content-type" : "application/json"
        },
        body : JSON.stringify({title, description})
      })


      if(res.ok){
        router.push("/")
        router.refresh();
      }else{
        throw new Error("Failed To Create Todo -:( ")
      }

    }catch(err){
      console.log(err)
    }   
  }


  return (
    <div>
      <form onSubmit={handleSubmit} className='my-4 flex flex-col w-10/12 md:w-8/12 ml-10 mt-40 justify-between gap-4' >
        <div className='w-full'>
          <input onChange={(e) => setTitle(e.target.value)} type="text"
            value={title}
            placeholder='Enter A Title'
            title='Enter A valid Title'
            className='w-full border-b p-2 ring-1 ring-violet-300 rounded-md focus:ring-offset-4 focus:outline-violet-700' />
        </div>

        <div className='w-full'>
          <input onChange={(e) => setDescription(e.target.value)}
            className="w-full border-b p-2 ring-1 ring-violet-300 rounded-md focus:ring-offset-4 focus:outline-violet-700 "
            value={description}
            type="text" placeholder='Enter A Description'
            title='Enter A Description' />

        </div>

        <div>
          <button type={"submit"} className='flex items-center gap-2 border-b-4  border-violet-500 bg-slate-800 text-slate-50 px-4 py-2 rounded-md'>

            <HiPencilAlt />
            <span>Add Todo</span>

          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTopic
