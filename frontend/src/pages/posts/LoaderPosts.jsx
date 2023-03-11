import React from 'react'
import LoaderCard from './LoaderCard'

export default function LoaderPosts() {
  return (
    <div className="flex  py-20  justify-center  ">
        <div className="mr-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 lg:grid-cols-4">
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
            <LoaderCard/>
        </div>
    </div>
  )
}
