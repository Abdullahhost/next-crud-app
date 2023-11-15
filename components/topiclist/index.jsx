
import React from 'react'
import DeleteIcon from '../deleteicon'
import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'


export const getTodo = async () => {

    try {
        const res = await fetch('http://localhost:3000/api/todo', { cache: "no-store" })
        if (!res.ok) {
            throw new Error('Failed To Fetch!')
        }

        return res.json();

    } catch (err) {
        console.log(err)
    }

}

const TopicList = async () => {

    const { data } = await getTodo();

    return (
        <>
            {data?.map((singleData) => {
                return <div key={singleData._id}>

                    <div className='flex mx-4'>

                        <div className='flex items-end
                                        w-11/12 lg:w-7/12
                                        flex-wrap
                                        shadow-md
                                        lg:flex-nowrap
                                        justify-between my-8
                                        border-b bg-slate-50 
                                        px-7 py-4
                                        md:px-14 border-slate-900
                                        gap-4 md:gap-8
                                        m-auto
                                        transition-all
                                        hover:scale-110
                                        hover:shadow-xl
                                        hover:bg-orange-400
                                        origin-bottom
                                        '>
                            <div className='w-full md:w-4/5 text-justify' >
                                <p className='text-2xl font-semibold my-3 hover:text-white text-slate-800 font-mono'>{singleData.title}</p>
                                <small className="text-slate-700 text-justify w-full hover:text-white text-[12px] md:text-[15px] ">{singleData.description}</small>
                            </div>

                            <div>
                                <div className='flex gap-2 border-b-2 border-slate-500'>
                                    <DeleteIcon id={singleData._id} />
                                    <Link href={`edittopic/${singleData._id}`} className='bg-slate-50 p-3 rounded-sm shadow-md cursor-pointer'>
                                        <HiPencilAlt size={18} />
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </>
    )
}

export default TopicList
