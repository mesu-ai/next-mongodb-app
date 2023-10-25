import Link from 'next/link';
import React from 'react';

const TopicPage = async () => {
  const { topics } = await getTopics();

  return (
    <div className='my-5'>

      <div className='flex justify-between'>
        <h2>Topics page</h2>
        <Link href='/topics/add'>
          <button type="button" className='bg-blue-500 rounded-md px-3 py-2 text-white'>Add Topics</button>
        </Link>
      </div>

      <ul>
        {topics.map(topic =>

          <li key={topic?._id}>{topic.title}</li>
        )}

      </ul>


    </div>
  );
};

export default TopicPage;


async function getTopics() {
  const res = await fetch('http://localhost:3000/api/topics');

  if (!res.ok) {
    console.log('error');
  }

  return res.json();
}