import Post from '@/components/Post'
import React from 'react'

const Page = ({params}) => {
  return (
    <div>
      Post {params.id}
    </div>
  )
}

export default Page
