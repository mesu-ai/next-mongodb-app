'use client'

import React from 'react';

const TopicAddPage = () => {

  const handleAddTopics = async () => {
    try {
      const res = await fetch('https://localhost:3000/api/topics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'test', description: 'test' }),
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log('Success:', data);
      } else {
        console.log('Error:', res.status);
      }
    } catch (error) {
      console.log('Network error:', error);
    }
  };
  

  return (
    <div>
      <h1>Topic Add Page</h1>

      <button 
      onClick={() => handleAddTopics()} 
      type="button" 
      className='bg-blue-500 rounded-md px-8 py-2 text-white mt-4'>Add New Topic</button>

    </div>
  );
};

export default TopicAddPage;