"use client";
import Card from '@/components/card/Card';
import { useSession } from 'next-auth/react';
import React from 'react'

const page = () => {
  const { data: session } = useSession();
  return (
    <div>
      <div className='w-full bg-[#2d2f30]'>
      <div className='max-w-6xl mx-auto h-32 flex items-center'>
          <h1 className='text-white font-semibold text-2xl '>{session?.user?.name}</h1>
      </div>
      </div>
      <div className='max-w-6xl mx-auto'>
          <div className='p-12'>
            <img className='rounded-full' width={100} height={100} src={session?.user?.pic}/>
          </div>
          <div className='text-center'>
            <h1 className='text-xl font-semibold p-2'>Courses you're enrolled in</h1>
          </div>
          <Card/>
      </div>
    </div>
  )
}

export default page