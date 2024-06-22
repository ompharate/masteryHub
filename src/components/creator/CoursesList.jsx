import React from 'react'
import { Button } from '../ui/button'
import { MdModeEdit } from "react-icons/md";
const CoursesList = () => {
  return (
    <div className='grid grid-cols-4 gap-4'>
        <div className='bg-slate-200 shadow-md rounded-lg p-4 flex items-center justify-between'>
            <h1 className='text-xl font-semibold cursor-pointer '>Python full stack</h1>
            <Button><MdModeEdit /></Button>
        </div>
        <div className='bg-slate-200 shadow-md rounded-lg p-4 flex items-center justify-between'>
            <h1 className='text-xl font-semibold cursor-pointer '>Spring boot</h1>
            <Button><MdModeEdit /></Button>
        </div>
        <div className='bg-slate-200 shadow-md rounded-lg p-4 flex items-center justify-between'>
            <h1 className='text-xl font-semibold cursor-pointer '>Mern stack</h1>
            <Button><MdModeEdit /></Button>
        </div>
        <div className='bg-slate-200 shadow-md rounded-lg p-4 flex items-center justify-between'>
            <h1 className='text-xl font-semibold cursor-pointer '>Next js</h1>
            <Button><MdModeEdit /></Button>
        </div>
    </div>
  )
}

export default CoursesList