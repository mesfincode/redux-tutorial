import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[250px] border-r-2 border-primary-1  hidden rounded-r-lg lg:flex h-full fixed left-0 gap-4 pt-8 px-2 flex-col'>
          <a href="/" className="bg-blue-400 px-4 py-2 rounded-lg w-full">Home</a>
       <a href="/" className="bg-blue-400 px-4 py-2 rounded-lg w-full">About</a>
    </div>
  )
}

export default Sidebar
