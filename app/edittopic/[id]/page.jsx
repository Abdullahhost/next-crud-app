
import React from 'react'

import EditTopic from '@/components/edittopic'

const getTodoId = async (id) => {

  try{
    const res = await fetch(`http://localhost:3000/api/todo/${id}`, { cache: 'no-store' });
    if(!res.ok){
      throw new Error("failed to fetch")
    }
    return res.json();

  }catch(err){
    console.log(err)
  }
}

const Page = async ({params}) => {

  const { id } = params
 
 const { singleTodo } =  await getTodoId(id);

const { title, description } = singleTodo

  return (
    <div>
      <EditTopic id={id} title={title} description={description}/>
    </div>
  )
}

export default Page
