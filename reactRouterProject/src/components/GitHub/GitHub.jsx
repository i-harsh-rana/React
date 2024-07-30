import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function GitHub() {
    const data = useLoaderData()
  return (
    <>
    <div className='flex flex-col items-center justify-center w-screen m-10'>
    <img  className='rounded-full align-middle' src={data.avatar_url} alt="Git picture" width={300} />
    <div className='text-center m-4 p-4 text-3xl'>
        Github followers: {data.followers}
    </div>
    </div>
    </>
  )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/i-harsh-rana')
    return response.json()
}
