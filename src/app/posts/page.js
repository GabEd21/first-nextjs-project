"use client"
import Post from '@/components/Post'
import React from 'react'
import { useFetch } from 'usehooks-ts'


const Page = () => {

  const results = useFetch('/api/posts/')
  console.log(results)

  if(results.error){
    return (
      <div>
        {results.error.message}
      </div>
    )
  }
  if(!results.data){
    return(
      <div>
        loading.....
      </div>
    )
  }
  return (
    <div>
      {results.data?.map(post => (
        <Post key={post.id} title={post.title} author={post.author} body={post.body}/>
      ))}
    </div>
  ) 
}

export default Page
