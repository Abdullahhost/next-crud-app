"use client"


import React from 'react'

import { useRouter } from 'next/navigation'


import { BsFillTrash3Fill } from 'react-icons/bs'

const DeleteIcon = ({ id }) => {

    const router = useRouter();
    const removeTodo = async () => {
        const confirmd = confirm('Are you sure....?')

        if (confirmd) {
            const res = await fetch(`http://localhost:3000/api/todo?id=${id}`, { method: "DELETE" });

            if (res.ok) {
                router.refresh();
            }
        }

    };


    return (
        <button onClick={removeTodo} className="bg-slate-50 p-3 rounded-sm shadow-md cursor-pointer">
            <BsFillTrash3Fill size={18} />
        </button>
    )
}

export default DeleteIcon
