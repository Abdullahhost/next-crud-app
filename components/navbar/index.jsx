import Link from "next/link"


const Navbar = () => {
  return (
    <div className=" fixed top-0 left-0 w-full flex gap-6 justify-between border-b-8 border-slate-800 backdrop-blur-sm z-50 brightness-105 text-slate-100 bg-[#e0dd4b18] px-7 py-4 md:px-20">
        <Link href="/" className=' text-2xl md:text-3xl font-semibold  text-slate-900 '>TODOAPP</Link>

        <Link href='/addtopic' className='bg-slate-800 px-3 py-2 md:px-5 md:py-3 text-xs md:text-sm rounded-md shadow-inner  uppercase font-semibold cursor-pointer' >Add todo</Link>
    </div>
  )
}

export default Navbar
