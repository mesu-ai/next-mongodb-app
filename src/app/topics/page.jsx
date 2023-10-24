import React from 'react';

const page = async () => {
  const {topics} = await getTopics();
 
  return (
    <div>

      Topics page

      {topics.map(topic => 
      
      <p key={topic?._id}>{topic.title}</p>
    )}
      
    </div>
  );
};

export default page;


async function getTopics() {
  const res = await fetch('http://localhost:3000/api/topics');

  if(!res.ok){
    console.log('error');
  }

  return res.json();
}