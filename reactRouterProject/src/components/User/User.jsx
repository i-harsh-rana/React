import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams() 
  return (
    <div className='text-center text-3xl p-16'>
        User ID : {id}
    </div>
  )
}

export default User