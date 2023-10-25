'use client'

import React, { useState } from 'react';

const TopicAddModal = () => {
  const [topic, setTopic] = useState([])

  const handleBlur= (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setTopic({ ...topic, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {

      console.log({topic})
      
    } catch (error) {
      
    }
  }



  return (
    <div className='absolute top-20 lg:top-32 bottom-20 lg:bottom-32 left-16 lg:left-1/4 right-16 lg:right-1/4 bg-sky-200 rounded-lg py-3 px-4'>
      <h1 className='text-center'>Topic Add Modal</h1>

      <form className='flex flex-col gap-3' onClick={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input onBlur={(e)=>handleBlur(e)} type="text" id='title' name='title' />

        <label htmlFor="description">Description</label>
        <input onBlur={(e)=>handleBlur(e)} type="text" id='description' name='description' />

        <button type="submit" className='bg-blue-500 rounded-md px-8 py-2 text-white'>Add Topic</button>
      </form>
    </div>
  );
};

export default TopicAddModal;