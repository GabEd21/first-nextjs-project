import React from 'react'
import Button from './Button'

const post = ({title, author}) => {
  return (
    <div className='border border-gray-100 p-4 flex flex-col'>
        <h1 className='font-bold text-xl'>{title}</h1>
        <span className='text-lg mb-3'>by {author}</span>
        {/*spacing here */}
        <p className='text-base'>{body}</p>
        <div className='w-full flex flex-row-reverse '>
            <Button onClick={() => console.log(title)} text='View'></Button>
        </div>
    </div>
  )
}

export default post
