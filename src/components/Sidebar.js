import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[250px] mt-[70px] hidden lg:flex bg-slate-500 h-full fixed left-0 gap-4 pt-8 px-2 flex-col'>
          <a href="/" className="bg-blue-400 px-4 py-2 rounded-lg w-full">Home</a>
       <a href="/" className="bg-blue-400 px-4 py-2 rounded-lg w-full">About</a>
    </div>
  )
}

export default Sidebar
