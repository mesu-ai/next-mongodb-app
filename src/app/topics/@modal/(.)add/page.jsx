'use client'

import React, { useState } from 'react';

const TopicAddModal = () => {
  const [topic, setTopic] = useState([])

  const handleBlur= (e) => {
    const { name, value } = e.target;
    setTopic({ ...topic, [name]: value });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if ( !topic.title || !topic?.description) {
      alert("Title and description are required.");
      return;
    }

    try {

      console.log({topic})
      const res= await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(topic)
      })

      console.log({res})
     
      
    } catch (error) {
      console.log({error})
      
    }
  }
  const handleAddTopics = async() => {
   

    try {

      const res= await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({title: 'test', description: 'test'	})
      })

      console.log({res})
     
      
    } catch (error) {
      console.log({error})
      
    }
  }



  return (
    <div className='absolute top-20 lg:top-32 bottom-20 lg:bottom-32 left-16 lg:left-1/4 right-16 lg:right-1/4 bg-sky-200 rounded-lg py-3 px-4'>
      <h1 className='text-center'>Topic Add Modal</h1>

      <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input onBlur={(e)=>handleBlur(e)} type="text" id='title' name='title' />

        <label htmlFor="description">Description</label>
        <input onBlur={(e)=>handleBlur(e)} type="text" id='description' name='description' />

        <button type="submit" className='bg-blue-500 rounded-md px-8 py-2 text-white'>Add Topic</button>
      </form>

      <button onClick={()=>handleAddTopics()} type="button" className='bg-blue-500 rounded-md px-8 py-2 text-white mt-4'>Add New Topic</button>

    </div>
  );
};

export default TopicAddModal;